import TRequestMethod from '../abstractions/types/TRequestMethod';
import { BASE_URI } from './vars';

const apiMethod = async (path: string, method: TRequestMethod, callbackResponse: Function, callbackError: Function): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URI}${path}`, { method });
    const result = await response.json();
    callbackResponse(result);
  } catch (error) {
    callbackError(error);
  }
};

export default apiMethod;