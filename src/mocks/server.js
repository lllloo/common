import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'

export const baseURL = 'https://test.com';
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)