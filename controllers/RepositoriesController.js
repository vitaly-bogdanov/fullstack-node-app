import { getTrendsRepositories } from '../config/githubApiMethods.js';
import Repository from '../models/Repository.js';
import { syncRepositoriesWithTransaction } from '../config/helpers.js';

const RepositoriesController = {
  /**
   * 1. Get a repository by name or ID
   * 
   */
  showById: async (request, response) => {
    try {
      const repository = await Repository.find({ id: request.params.id });
      response.status(200).json(repository);
    } catch (error) {
      response.status(500).json({error: error.message});
    }
  },

  showByName: async (request, response) => {
    try {
      const repository = await Repository.find({ name: request.params.name });
      response.status(200).json(repository);
    } catch (error) {
      response.status(500).json({error: error.message});
    }
  },

  /**
   * 2. Get all repositories
   * 
   */
  index: async (request, response) => {
    try {
      const repositories = await Repository.find({});
      response.status(200).json(repositories);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: error.message });
    }
  },

  /**
   * 3. Start sync with Github
   * 
   */
  update: async (request, response) => {
    try {
      const repositories = await syncRepositoriesWithTransaction();
      response.status(201).json(repositories);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: error.message });
    }
  },

  delete: async (request, response) => {
    try {
      await Repository.deleteMany({});
      response.status(200).end();
    } catch (error) {
      console.log(error);
      response.status().json({ error: error.message });
    }
  }
}

export default RepositoriesController;