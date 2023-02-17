import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { Users } from '../Users';
import { content } from '../../../content';
import { mockData } from '../../../mocks/data';
import { AppRoutesApi } from '../../../constants';
import { server } from '../../../mocks/server';

describe('<Users/>', () => {
  const {
    Users: { title, errorText },
  } = content;

  test('renders correctly', () => {
    render(<Users />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    const mock = mockData[AppRoutesApi.fetchUsers];

    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(mock.length);
  });

  test('renders error UI in case of error', async () => {
    server.use(
      rest.get(AppRoutesApi.fetchUsers, (_request, response, context) => {
        return response(context.status(500));
      }),
    );

    render(<Users />);
    const error = await screen.findByText(errorText);
    expect(error).toBeInTheDocument();
  });
});
