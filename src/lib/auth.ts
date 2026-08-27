/**
 * Authentication Service Layer for Next.js Marketing Website
 * Connects directly to the Laravel 11 API Backend (https://social-api.w3lead.in/api/v1)
 */

export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://social-dashboard.w3lead.in';
export const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://social-api.w3lead.in/api/v1').replace(/\/+$/, '');

export interface LoginPayload {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface SignupPayload {
  name: string;
  email: string;
  password?: string;
  workspace_name?: string;
  termsAccepted?: boolean;
}

export async function loginUser(payload: LoginPayload): Promise<{ success: boolean; redirectUrl: string }> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Authentication failed. Please check your credentials.');
  }

  const token = data.data?.token || '';
  const workspaceId = data.data?.current_workspace?.id || '';

  const redirectUrl = `${DASHBOARD_URL}/?token=${encodeURIComponent(token)}${workspaceId ? `&workspace_id=${workspaceId}` : ''}`;

  return {
    success: true,
    redirectUrl,
  };
}

export async function signupUser(payload: SignupPayload): Promise<{ success: boolean; redirectUrl: string }> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      workspace_name: payload.workspace_name || `${payload.name}'s Workspace`,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Registration failed. Please check your information.');
  }

  const token = data.data?.token || '';
  const workspaceId = data.data?.current_workspace?.id || '';

  const redirectUrl = `${DASHBOARD_URL}/?token=${encodeURIComponent(token)}${workspaceId ? `&workspace_id=${workspaceId}` : ''}`;

  return {
    success: true,
    redirectUrl,
  };
}
