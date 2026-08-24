import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
}

export function FormInput({
  label,
  id,
  error,
  helperText,
  className = '',
  type = 'text',
  ...props
}: FormInputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', width: '100%' }}>
      <label
        htmlFor={id}
        style={{
          fontSize: '0.875rem',
          fontWeight: '600',
          color: 'var(--color-text-main)',
        }}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        style={{
          width: '100%',
          padding: '0.65rem 0.9rem',
          borderRadius: '0.5rem',
          border: error ? '1px solid var(--color-error)' : '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text-main)',
          fontSize: '0.95rem',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          outline: 'none',
        }}
        className={className}
        {...props}
      />

      {error ? (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-error)',
            marginTop: '0.1rem',
          }}
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          id={`${id}-helper`}
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.1rem',
          }}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
