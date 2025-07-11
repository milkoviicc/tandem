<script setup lang="ts">
  import axios from 'axios';
import { computed, ref } from 'vue';

  const pricingPlans = {
      tandem: {
        monthly: '4.99€',
        yearly: '49.99€'
      },
      pro: {
        monthly: '9.99€',
        yearly: '99.99€'
      }
  } as const;
  
  const billingCycle = ref('monthly');

  const prices = computed(() => ({
      tandem: pricingPlans.tandem[billingCycle.value as 'monthly' | 'yearly'],
      pro: pricingPlans.pro[billingCycle.value as 'monthly' | 'yearly'],
  }))

  const pickPlan = async(plan: string) => {

    if(plan === 'starter') {
      console.log('Starter plan selected, no action needed as it is free.');
      return;
    }

    if(plan === 'tandem') {
      const user = localStorage.getItem('user') || "";
      const getUserId = async () => {
        try {
          const userId = await axios.get(`http://localhost:3000/api/users/getUserId?email=${JSON.parse(user).email}`);
          return userId.data;
        } catch(error) {
          console.error('Error fetching user ID:', error);
          throw error;
        }
      }
      const userId = await getUserId();
      const res = await axios.post('http://localhost:3000/api/subscription/pickPlan', {userId: userId.userId, plan: plan, amount: prices.value[plan], interval: billingCycle.value});
      if(res.status === 200) {
        console.log('Subscription selected successfully:', res.data);
        window.location.href = res.data.url; // Redirect to Stripe checkout
      } else {
        console.error('Error selecting subscription:', res.data);
      }
    }
  };

</script>

<template>
    <div class="flex flex-col items-center py-10 bg-[#DADAFF]">
      <h1 class="text-5xl font-['Inter'] text-[#2E2E2E] font-semibold" data-aos="fade-up">Simple, Transparent Pricing</h1>
      <h3 class="text-lg font-['Inter'] text-[#3B82F6] font-semibold py-3" data-aos="fade-up">Start free, upgrade anytime.</h3>
      <div class="flex py-4">
        <div class="relative inline-flex bg-[#F8F7FE] rounded-lg overflow-hidden" data-aos="fade-up">
          <div class="absolute top-0 left-0 w-1/2 h-full bg-[#2263CD] transition-transform duration-300 rounded-lg" :class="billingCycle === 'yearly' ? 'translate-x-full' : 'translate-x-0'"></div>
            <button @click="billingCycle = 'monthly'" class="relative z-10 w-24 py-2 text-sm font-medium transition-colors duration-300" :class="billingCycle === 'monthly' ? 'text-white' : 'text-[#2E2E2E]'">Monthly</button>
            <button @click="billingCycle = 'yearly'" class="relative z-10 w-24 py-2 text-sm font-medium transition-colors duration-300" :class="billingCycle === 'yearly' ? 'text-white' : 'text-[#2E2E2E]'">Yearly</button>
        </div>
      </div>
      <div class="flex gap-8 pt-4">
        <div class="flex flex-col justify-evenly gap-4 bg-[#f8f7feac] rounded-xl min-w-[300px] max-w-[300px] p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="200">
          <div class="flex flex-col items-center gap-4">
            <img src="/assets/icons/pricing-avatar.png" alt="Avatar icon" class="w-16 h-16 text-center" />
            <h2 class="text-[#2263CD] text-3xl font-bold">Starter</h2>
            <p class="text-center text-[#2E2E2E]">Start Solo, upgrade to share your journey.</p>
          </div>
          <div class="flex flex-col text-[#2E2E2E] font-['Inter'] text-sm w-full gap-2">
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Track income & expenses</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> 1 personal goal</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Email reminders</p>
          </div>
          <div class="flex flex-col items-center gap-4">
            <h3 class="text-[#2263CD] font-bold text-4xl text-shadow-lg">Free</h3>
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200" @click="pickPlan('starter')">Choose plan</button>
          </div>
        </div>
        <div class="flex flex-col justify-evenly gap-4 bg-[#f8f7feac] rounded-xl min-w-[300px] max-w-[300px] p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="400">
          <div class="flex flex-col items-center gap-4">
            <img src="/assets/icons/pricing-tandem.png" alt="Tandem icon" class="w-24 h-16 text-center" />
            <h2 class="text-[#2263CD] text-3xl font-bold">Tandem</h2>
            <p class="text-center text-[#2E2E2E]">One subscription, two users.</p>
          </div>
          <div class="flex flex-col text-[#2E2E2E] font-['Inter'] text-sm w-full gap-2">
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Invite your partner</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Shared budgets & goals</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Real-time sync</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Reminders for both</p>
          </div>
          <div class="flex flex-col items-center gap-4">
            <h3 class="text-[#2263CD] font-bold text-4xl text-shadow-lg">{{prices.tandem}}</h3>
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200" @click="pickPlan('tandem')">Choose plan</button>
          </div>
        </div>
        <div class="flex flex-col justify-evenly gap-4 bg-[#f8f7feac] rounded-xl min-w-[300px] max-w-[300px] p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="600">
          <div class="flex flex-col items-center gap-4">
            <img src="/assets/icons/pricing-avatar.png" alt="Avatar icon" class="w-16 h-16 text-center" />
            <h2 class="text-[#2263CD] text-3xl font-bold">Pro</h2>
            <p class="text-center text-[#2E2E2E]">More control & insights.</p>
          </div>
          <div class="flex flex-col text-[#2E2E2E] font-['Inter'] text-sm w-full gap-2">
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Everything in Tandem</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Smart analytics</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Expense insights</p>
            <p class="flex items-center gap-2"><img src="/assets/icons/tick.png" alt="Tick" class="w-4 h-4"/> Early access to features</p>
          </div>
          <div class="flex flex-col items-center gap-4">
            <h3 class="text-[#2263CD] font-bold text-4xl text-shadow-lg">{{prices.pro}}</h3>
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200" @click="pickPlan('pro')">Choose plan</button>
          </div>
        </div>
      </div>
    </div>
</template>