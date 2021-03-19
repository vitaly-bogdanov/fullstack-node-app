export const getTrendsRepositories = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  let response = await fetch(`https://api.github.com/search/repositories?sort=stars&order=desc?page=1&q=created:${year}-${month}-${day}`);
  let repositories = await response.json();
  return repositories;
}