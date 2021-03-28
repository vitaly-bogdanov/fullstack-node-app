export const loadRepositoriesApi: Function = async (callbackResponse: Function, callbackError: Function) => {
  try {
    const response: Response = await fetch('http://localhost:5000/repositories', { method: 'GET' });
    const result: Response = await response.json();
    callbackResponse(result);
  } catch (error) {
    callbackError(error);
  }
}