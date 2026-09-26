'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FormInput } from '@/components/ui/FormInput';
import { Button } from '@/components/ui/Button';
import { signupUser } from '@/lib/auth';
import { trackEvent } from '@/lib/analytics';
import { Share2, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    termsAccepted?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!password || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms of service';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      trackEvent('signup_attempt', { email, name });
      const result = await signupUser({ name, email, password, termsAccepted });

      if (result.success) {
        // Redirect to configured Dashboard URL (Laravel frontend / dashboard domain)
        window.location.href = result.redirectUrl;
      }
    } catch (err: unknown) {
      console.error('Signup error:', err);
      const msg = err instanceof Error ? err.message : 'Failed to create account. Please try again.';
      setErrors({ general: msg });
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 144px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '2.5rem 2rem',
          borderRadius: '1.25rem',
          boxShadow: 'var(--shadow-xl)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              textDecoration: 'none',
            }}
          >
            <img
              src="/logo.png"
              alt="A4 AutoPost"
              className="logo-dark"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <img
              src="/logo-light.png"
              alt="A4 AutoPost"
              className="logo-light"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>

          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-text-main)' }}>
            Start Your 14-Day Free Trial
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            No credit card required. Cancel anytime.
          </p>
        </div>

        {errors.general && (
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--color-error-bg)',
              color: 'var(--color-error)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              marginBottom: '1.25rem',
            }}
          >
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          <FormInput
            id="signup-name"
            label="Full Name"
            placeholder="Sarah Jenkins"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            required
          />

          <FormInput
            id="signup-email"
            label="Work Email"
            type="email"
            placeholder="sarah@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />

          <FormInput
            id="signup-password"
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />

          <FormInput
            id="signup-confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            required
          />

          <div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                style={{ accentColor: 'var(--color-primary)', marginTop: '0.2rem' }}
              />
              <span>
                I agree to the <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Terms of Service</a> and <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Privacy Policy</a>.
              </span>
            </label>
            {errors.termsAccepted && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-error)', display: 'block', marginTop: '0.25rem' }}>
                {errors.termsAccepted}
              </span>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
          </Button>
        </form>

        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Already have an account?{' '}
          <Link href="/login" style={{ fontWeight: '700', color: 'var(--color-primary)' }}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
