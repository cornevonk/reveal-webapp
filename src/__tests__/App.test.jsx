import { render } from '@testing-library/react';
import { describe, it, beforeAll } from 'vitest';
import App from '../App';

beforeAll(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
