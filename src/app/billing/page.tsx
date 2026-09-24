'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BillingPlans } from '@/components/billing/BillingPlans';

export default function BillingPage() {
  // In a real application, authToken & workspaceId are sourced from your Auth context / session state
  const mockAuthToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') || '' : '';
  const mockWorkspaceId = 1;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <Header />
      <main className="flex-1 py-12 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Billing & Subscription Plans
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the right plan to power your automated social media posting and AI caption creation.
          </p>
        </div>

        <BillingPlans
          workspaceId={mockWorkspaceId}
          authToken={mockAuthToken}
          currentPlanSlug="free"
        />
      </main>
      <Footer />
    </div>
  );
}
