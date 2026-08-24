'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const itemId = `faq-item-${idx}`;

        return (
          <div
            key={idx}
            className="glass-card"
            style={{
              overflow: 'hidden',
              transition: 'border-color 0.2s ease',
            }}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`${itemId}-content`}
              id={`${itemId}-header`}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'var(--color-text-main)',
                fontWeight: '700',
                fontSize: '1.05rem',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  color: 'var(--color-primary)',
                  flexShrink: 0,
                  marginLeft: '1rem',
                }}
              />
            </button>

            {isOpen && (
              <div
                id={`${itemId}-content`}
                role="region"
                aria-labelledby={`${itemId}-header`}
                style={{
                  padding: '0 1.5rem 1.25rem 1.5rem',
                  fontSize: '0.95rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--color-border)',
                  marginTop: '0.25rem',
                  paddingTop: '1rem',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
