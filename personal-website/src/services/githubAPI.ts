/**
 * GitHub API 服务
 * 用于获取用户的GitHub仓库信息
 */

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface TransformedProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
}

const GITHUB_USERNAME = 'liberal-CloudArchitect';
const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_KEY = 'github_repos_cache';
const CACHE_DURATION = 1000 * 60 * 60; // 1小时缓存

/**
 * 从缓存中获取数据
 */
function getFromCache(): TransformedProject[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // 检查缓存是否过期
    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

/**
 * 保存数据到缓存
 */
function saveToCache(data: TransformedProject[]) {
  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

/**
 * 获取用户的GitHub仓库列表
 */
export async function fetchGitHubRepos(): Promise<TransformedProject[]> {
  // 先尝试从缓存获取
  const cached = getFromCache();
  if (cached) {
    console.log('Using cached GitHub data');
    return cached;
  }

  try {
    console.log('Fetching GitHub repos from API...');
    
    // 获取用户仓库（排序：最近更新，只获取非fork的仓库）
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=owner`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // 如果有GitHub Token，可以添加以提高API速率限制
          // 'Authorization': `token ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // 转换数据格式
    const transformedRepos = repos
      .filter(repo => !repo.fork) // 过滤掉fork的仓库
      .map(repo => transformProject(repo))
      .sort((a, b) => b.stars - a.stars); // 按stars排序

    // 保存到缓存
    saveToCache(transformedRepos);

    return transformedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

/**
 * 转换GitHub仓库数据为项目数据格式
 */
function transformProject(repo: GitHubRepo): TransformedProject {
  // 提取技术栈（从topics和language）
  const technologies = [
    ...(repo.topics || []),
    repo.language,
  ].filter(Boolean) as string[];

  return {
    id: repo.id,
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || '暂无描述',
    technologies: Array.from(new Set(technologies)), // 去重
    githubLink: repo.html_url,
    liveLink: repo.homepage || '#',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || 'Unknown',
    updatedAt: new Date(repo.updated_at).toLocaleDateString('zh-CN'),
  };
}

/**
 * 获取特定仓库的详细信息
 */
export async function fetchRepoDetails(repoName: string): Promise<GitHubRepo> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching repo details:', error);
    throw error;
  }
}

/**
 * 清除缓存
 */
export function clearGitHubCache() {
  localStorage.removeItem(CACHE_KEY);
}

