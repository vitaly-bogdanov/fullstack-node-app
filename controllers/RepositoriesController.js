import { getTrendsRepositories } from '../config/githubApiMethods';

const RepositoriesController = {
  /**
   * 1. Get a repository by name or ID
   * 
   */
   show: async (request, respons) => {
    try {

    } catch (error) {

    }
  },

  /**
   * 2. Get all repositories
   * 
   */
  index: async (request, response) => {
    try {

    } catch (error) {

    }
  },

  /**
   * 3. Start sync with Github
   * 
   */
  update: async (request, response) => {
    try {
      const repositories = await getTrendsRepositories();
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }
}

export default RepositoriesController;