import { rest } from 'msw';
import { AppRoutesApi } from '../constants';
import { mockData } from './data';

export const handlers = [
  rest.get(AppRoutesApi.fetchUsers, (_request, response, context) => {
    return response(context.status(200), context.json(mockData[AppRoutesApi.fetchUsers]));
  }),
];
