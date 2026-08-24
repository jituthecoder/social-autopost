/**
 * Authentication Service Layer
 * 
 * Note for Phase 2: This module will be updated to consume the Laravel REST API
 * (e.g. POST to https://api.mydomain.com/api/v1/auth/login and /auth/register with Sanctum cookies/tokens).
 * Currently, it provides validation and handles client-side redirection to NEXT_PUBLIC_DASHBOARD_URL.
 */

export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.mydomain.com';

export interface LoginPayload {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface SignupPayload {
  name: string;
  email: string;
  password?: string;
  termsAccepted: boolean;
}

export async function loginUser(payload: LoginPayload): Promise<{ success: boolean; redirectUrl: string }> {
  // In Phase 2, dispatch API call to Laravel Sanctum / Fortify API
  console.log('[Auth Service] Simulated login attempt:', payload.email);

  // Redirect to production/dev dashboard domain after successful authentication
  return {
    success: true,
    redirectUrl: DASHBOARD_URL,
  };
}

export async function signupUser(payload: SignupPayload): Promise<{ success: boolean; redirectUrl: string }> {
  // In Phase 2, dispatch API call to Laravel API
  console.log('[Auth Service] Simulated signup attempt:', payload.email);

  return {
    success: true,
    redirectUrl: DASHBOARD_URL,
  };
}
