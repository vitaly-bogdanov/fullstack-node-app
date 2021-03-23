import fetch from 'node-fetch';

export const getTrendsRepositories = async () => {
  const response = await fetch(`https://api.github.com/search/repositories?sort=stars&order=desc&q=since:daily`);
  const repositories = await response.json();
  return repositories.items.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    homepage: item.url,
    language: item.language,
    stargazers_count: item.stargazers_count,
    forks_count: item.forks_count
  }));
}
