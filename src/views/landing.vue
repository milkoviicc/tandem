<script setup lang="ts">
  import navbar from '../components/navbar.vue';
  import { Motion } from '@oku-ui/motion';
  const testimonials = [
    {
      id: 1,
      name: 'Jenna & Marco',
      feedback: 'Finally an app that understands shared finances. We saved for our honeymoon 2x faster!'
    },
    {
      id: 2,
      name: 'Sarah & Liam',
      feedback: 'Saved $8,000 for our wedding in just 10 months. The shared goals feature kept us both motivated and accountable'
    },
    {
      id: 3,
      name: 'Jessica & Alex',
      feedback: 'We went from fighting about money to actually looking forward to our budget meetings. Tandem made it fun and stress-free!'
    },
    {
      id: 4,
      name: 'Mike & Emma',
      feedback: 'Tandem transformed our financial life. We set joint goals, track expenses together, and it’s made us closer than ever.'
    },
    {
      id: 5,
      name: 'Olivia & Ethan',
      feedback: 'Finally an app that gets it. We can maintain our independence while building something together. Perfect for modern couples!'
    }
  ]
</script>

<template>
  <div>
    <navbar />

    <!-- HERO SECTION -->
    <div class="bg-[#DADAFF] h-screen flex flex-col">
      <div class="flex">
        <div class="flex flex-col py-6 px-12">
          <h1 class="font-['Inter'] text-7xl font-semibold bg-gradient-to-r pt-4 from-[rgba(59,130,246,1)] to-[rgba(99,102,241,1)] bg-clip-text text-transparent leading-20">Plan Together.<br/>Save together.</h1>
          <p class="text-[#2e2e2e] text-xl mt-2 font-['Manrope'] leading-8 w-3/4 pt-4">The only budgeting app designed specifically for couples. Track shared expenses, set joint goals, and build your financial future together — without the awkward money conversations.</p>
          <div class="flex gap-4 mt-4">
            <button class="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[rgba(59,130,246,0.5)] to-[rgba(99,102,241,0.5)] font-['Inter'] text-[#fff] group shadow-xl bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] transition-all">Get started <span class="transition-all group-hover:translate-x-1">→</span></button>
            <button class="rounded-full px-6 py-3 font-['Inter'] text-[#2C7BE5] font-semibold border border-[#2C7BE5] hover:bg-[#2C7BE5] hover:text-[#fff] transition-all shadow-xl">Watch demo</button>
          </div>
          <div class="flex gap-4 mt-2">
            <div class="flex items-center px-2"><img src="../assets/icons/lock.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1">Secure</p></div>
            <div class="flex items-center px-2"><img src="../assets/icons/star.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1">4.9/5.0 Rating</p></div>
            <div class="flex items-center px-2"><img src="../assets/icons/couples.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1">50,000+ Couples</p></div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <img src="../assets/hero.png" alt="Man and woman with a piggy bank" class="w-2/3 h-fit" />
        </div>
      </div>
      <!-- TESTIMONIALS -->
      <div class="overflow-hidden w-full h-full max-h-[175px] py-2 -mt-4 bg-transparent">
        <div class="scrolling-wrapper flex space-x-4 w-max h-full">
          <template v-for="n in 2">
            <div v-for="testimonial in testimonials" :key="`${n}-${testimonial.id}`" class="min-w-[300px] max-w-[300px] h-full flex flex-col justify-between rounded-lg p-4 bg-[#D8D8FF] border-[rgba(0,0,0,0.8)] shadow-[0_3px_5px_1px_rgba(0,0,0,0.25)]">
              <p class="text-[#2E2E2E] text-center font-['IBM Plex Sans'] italic">{{ testimonial.feedback }}</p>
              <p class="text-[#62AAFF] text-center font-['Inter'] font-semibold text-sm">— {{ testimonial.name }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- INSIGHTS -->
    <div class="bg-[#DADAFF] flex flex-col items-center">
      <h1 class="text-center text-[#2E2E2E] font-['Inter'] font-semibold text-5xl">Built for Two, Made for Success</h1>
      <p class="text-center text-[#666] font-['Manrope'] w-1/3 py-4 leading-6 text-lg">Unlike generic budgeting apps, Tandem understands that couples have unique financial needs. Here's how we make money management effortless for partners.</p>
    
      <div class="grid grid-cols-3 px-12 my-8 gap-12">
          <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/handshake.png" alt="Handshake icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Shared Goals & Dreams </h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Set joint savings goals for your wedding, house, vacation, or emergency fund. Watch your progress together and celebrate milestones as a team.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/bankcard.png" alt="Bank card icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Smart Expense Splitting</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Automatically categorize and split shared expenses. No more "who paid for what" arguments or tedious receipt tracking.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/graph.png" alt="Graph icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Real-Time Sync</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Both partners see updates instantly. Make a purchase? Your partner knows immediately. Complete transparency, zero surprises.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/target.png" alt="Target icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Individual + Joint Budgets</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Maintain personal spending freedom while managing shared expenses. Perfect balance of independence and partnership.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/iphone.png" alt="Mobile phone icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Gentle Reminders</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Smart notifications keep you both on track without being nagging. Celebrate wins and gently course-correct when needed.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/chat.png" alt="Chat icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Better Money Conversations</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Built-in prompts and insights help you discuss finances constructively. Turn money stress into money success.</p>
        </div>
      </div>
    </div>

    <!-- PRICING PLAN -->
    <div class="flex flex-col items-center py-16 bg-[#DADAFF]">
      <h1 class="text-5xl font-['Inter'] text-[#2E2E2E] font-semibold">Simple, Transparent Pricing</h1>
      <h3 class="text-lg font-['Inter'] text-[#3B82F6] font-semibold py-3">Start free, upgrade anytime.</h3>
      <div class="flex py-4">
        <button class="py-2 px-4 text-[#FFF] font-['Inter'] bg-[#2263CD] rounded-tl-lg rounded-bl-lg">Monthly</button>
        <button class="py-2 px-4 text-[#2E2E2E] font-['Inter'] bg-[#F8F7FE] rounded-tr-lg rounded-br-lg">Yearly</button>
      </div>
      <div class="flex gap-8">
        <div class="flex flex-col items-center gap-4 bg-[#f8f7feac] rounded-xl min-w-[300px] max-w-[300px] p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <img src="../assets/icons/pricing-avatar.png" alt="Avatar icon" class="w-16 h-16 text-center" />
          <h2 class="text-[#2263CD] text-3xl font-bold">Starter</h2>
          <p class="text-center text-[#2E2E2E]">Start Solo. Upgrade to share your journey.</p>
          <div class="flex flex-col text-[#2E2E2E] font-['Inter'] text-sm">
            <p>Track income & expenses</p>
            <p>1 personal goal</p>
            <p>Email reminders</p>
          </div>
          <h3 class="text-[#2263CD] font-bold text-4xl text-shadow-2xs">Free</h3>
          <button class="px-6 py-2 text-sm font-['Inter'] font-semibold bg-[#2263CD] rounded-2xl shadow-2xl hover:bg-[#44536c] transition-all">Choose plan</button>
        </div>
      </div>
    </div>
  </div>
</template>
 