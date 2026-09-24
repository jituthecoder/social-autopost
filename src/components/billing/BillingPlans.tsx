import React, { useState } from 'react';
import { loadRazorpayScript } from '@/lib/razorpay';

interface Plan {
  id: number;
  name: string;
  slug: string;
  price_monthly: number;
  price_yearly: number;
  features: {
    social_accounts: number;
    posts_per_month: number;
    ai_generations: number;
  };
}

interface BillingPlansProps {
  currentPlanSlug?: string;
  workspaceId?: number;
  authToken?: string;
  apiUrl?: string;
  onSuccess?: () => void;
  dashboardUrl?: string;
}

export const BillingPlans: React.FC<BillingPlansProps> = ({
  currentPlanSlug = 'free',
  workspaceId,
  authToken,
  apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.a4autopost.com',
  dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.a4autopost.com',
  onSuccess,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null);

  const normalizedApiUrl = apiUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');

  const plans: Plan[] = [
    {
      id: 1,
      name: 'Free Plan',
      slug: 'free',
      price_monthly: 0,
      price_yearly: 0,
      features: { social_accounts: 3, posts_per_month: 30, ai_generations: 10 },
    },
    {
      id: 2,
      name: 'Pro Plan',
      slug: 'pro',
      price_monthly: 499,
      price_yearly: 4990,
      features: { social_accounts: 15, posts_per_month: 500, ai_generations: 250 },
    },
    {
      id: 3,
      name: 'Agency Plan',
      slug: 'agency',
      price_monthly: 1499,
      price_yearly: 14990,
      features: { social_accounts: 100, posts_per_month: 5000, ai_generations: 2000 },
    },
  ];

  const handleSubscribe = async (plan: Plan) => {
    if (plan.slug === currentPlanSlug || plan.price_monthly === 0) return;

    // If guest user, redirect to dashboard sign up / login
    if (!authToken || !workspaceId) {
      window.location.href = `${dashboardUrl}/register?plan=${plan.id}&billing=${billingCycle}`;
      return;
    }

    try {
      setLoadingPlanId(plan.id);

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert('Failed to load Razorpay SDK. Please check your network connection.');
        setLoadingPlanId(null);
        return;
      }

      const res = await fetch(`${normalizedApiUrl}/api/v1/payments/razorpay/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
          'X-Workspace-Id': workspaceId.toString(),
        },
        body: JSON.stringify({
          plan_id: plan.id,
          billing_cycle: billingCycle,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to create payment order.');
      }

      const orderData = result.data;

      const options = {
        key: orderData.razorpay_key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'A4AutoPost',
        description: `${plan.name} (${billingCycle} subscription)`,
        order_id: orderData.order_id,
        handler: async (paymentResponse: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await fetch(`${normalizedApiUrl}/api/v1/payments/razorpay/verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                'X-Workspace-Id': workspaceId.toString(),
              },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });

            const verifyResult = await verifyRes.json();
            if (verifyResult.success) {
              alert('Payment Successful! Your workspace plan has been upgraded.');
              if (onSuccess) onSuccess();
            } else {
              alert('Payment verification failed: ' + verifyResult.message);
            }
          } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown verification error';
            alert('Verification Error: ' + errorMessage);
          }
        },
        modal: {
          ondismiss: () => setLoadingPlanId(null),
        },
        theme: {
          color: '#6366f1',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred initiating payment.';
      alert(errorMessage);
    } finally {
      setLoadingPlanId(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Monthly / Yearly Toggle */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
          Billed Monthly
        </span>
        <button
          type="button"
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          className="relative w-14 h-8 bg-indigo-600 rounded-full p-1 transition-colors duration-300"
        >
          <div
            className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
              billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-sm font-medium flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
          Billed Yearly
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-semibold">
            Save 20%
          </span>
        </span>
      </div>

      {/* Plan Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isCurrent = plan.slug === currentPlanSlug;
          const price = billingCycle === 'yearly' ? plan.price_yearly : plan.price_monthly;
          const isLoading = loadingPlanId === plan.id;

          return (
            <div
              key={plan.id}
              className={`p-6 rounded-2xl border bg-slate-900/60 backdrop-blur-xl transition-all flex flex-col justify-between ${
                isCurrent ? 'border-indigo-500 ring-2 ring-indigo-500/50' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-extrabold text-white">?{price}</span>
                  <span className="text-gray-400 text-sm">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                </div>
                <ul className="space-y-3 my-6 text-sm text-gray-300">
                  <li className="flex items-center gap-2">? Up to {plan.features.social_accounts} Social Accounts</li>
                  <li className="flex items-center gap-2">? {plan.features.posts_per_month} Posts per Month</li>
                  <li className="flex items-center gap-2">? {plan.features.ai_generations} AI Generations</li>
                </ul>
              </div>

              <button
                type="button"
                disabled={isCurrent || isLoading}
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  isCurrent
                    ? 'bg-slate-800 text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                }`}
              >
                {isLoading ? 'Processing...' : isCurrent ? 'Active Plan' : `Upgrade to ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
