import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiData from '../components/ApiData';

describe('ApiData', () => {
  it('fetches and displays data from the Rails API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Hello from Rails API!' }),
      })
    );

    render(<ApiData />);
    expect(screen.queryByTestId('api-data')).toBeNull();

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

    expect(screen.getByTestId('api-data')).toHaveTextContent('Hello from Rails API!');
  });
});
