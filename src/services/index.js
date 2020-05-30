import { mockResponse } from '../utils/api';
import userDetailsResponse from '../api-mocks/user-details';

export const getUsersDetails = login =>  mockResponse(userDetailsResponse);
