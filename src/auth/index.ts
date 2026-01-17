/**
 * Authentication Module
 *
 * This module provides authentication utilities for validating tokens
 * and managing user authentication workflows.
 */

/**
 * Validates a token string
 *
 * @param token - The authentication token to validate
 * @returns true if the token is valid (non-empty), false otherwise
 */
export function authenticate(token: string): boolean {
  return token.length > 0;
}
