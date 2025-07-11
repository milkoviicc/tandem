<script setup lang="ts">
  import { computed, ref, onMounted } from 'vue';

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



 const counterRef = ref<HTMLElement | null>(null);
 const displayValue = ref(35000);
 const ratingValue = ref(2.5);
 const targetCount = 50000;
 const targetRating = 4.9;

 
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      let count = 35000
      let rating = 2.5

      const interval = setInterval(() => {
        if (count < targetCount) {
          count += 500
          displayValue.value = count
        }

        if (rating < targetRating) {
          rating += 0.1
          ratingValue.value = Math.min(rating, targetRating)
        }

        if (count >= targetCount && rating >= targetRating) {
          clearInterval(interval)
        }
      }, 50)
    }
  }, { threshold: 1 })

  if (counterRef.value) observer.observe(counterRef.value)
})

</script>

<template>
  <div>


    <!-- HERO SECTION -->
    <div class="bg-[#DADAFF] h-screen flex flex-col">
      <div class="flex">
        <div class="flex flex-col py-0 px-12"  data-aos="fade-in" data-aos-delay="200">
          <h1 class="font-['Inter'] text-7xl font-semibold bg-gradient-to-r pt-4 from-[rgba(59,130,246,1)] to-[rgba(99,102,241,1)] bg-clip-text text-transparent leading-20">Plan Together.<br/>Save together.</h1>
          <p class="text-[#2e2e2e] text-xl mt-2 font-['Manrope'] leading-8 w-3/4 pt-4">The only budgeting app designed specifically for couples. Track shared expenses, set joint goals, and build your financial future together — without the awkward money conversations.</p>
          <div class="flex gap-4 mt-2">
            <button class="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[rgba(59,130,246,0.5)] to-[rgba(99,102,241,0.5)] font-['Inter'] text-[#fff] group shadow-xl bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] transition-all duration-200">Get started <span class="transition-all group-hover:translate-x-1">→</span></button>
            <button class="rounded-full px-6 py-3 font-['Inter'] text-[#2C7BE5] font-semibold border border-[#2C7BE5] hover:bg-[#2C7BE5] hover:text-[#fff] transition-all shadow-xl">Watch demo</button>
          </div>
          <div class="flex gap-4 mt-2">
            <div class="flex items-center px-2"><img src="/assets/icons/lock.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1">Secure</p></div>
            <div class="flex items-center px-2"><img src="/assets/icons/star.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1"><span ref="counterRef">{{ ratingValue.toFixed(1) }}</span>/5.0 Rating</p></div>
            <div class="flex items-center px-2"><img src="/assets/icons/couples.png" class="w-[24px] h-[24px]"/> <p class="text-[#2E2E2E] font-['IBM Plex Sans'] pt-1 px-1"><span ref="counterRef">{{ displayValue }}</span>+ Couples</p></div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <img src="/assets/hero.png" alt="Man and woman with a piggy bank" class="w-2/3 h-fit" v-motion :initial="{opacity: 0}" :enter="{opacity: 1}" :delay="200" :duration="1000" />
        </div>
      </div>
      <!-- TESTIMONIALS -->
      <div class="overflow-hidden w-full h-full max-h-[175px] py-2 mt-2 bg-transparent" data-aos="fade-up">
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
      <h1 class="text-center text-[#2E2E2E] font-['Inter'] font-semibold text-5xl" data-aos="fade-up">Built for Two, Made for Success</h1>
      <p class="text-center text-[#666] font-['Manrope'] w-1/3 py-4 leading-6 text-lg" data-aos="fade-up">Unlike generic budgeting apps, Tandem understands that couples have unique financial needs. Here's how we make money management effortless for partners.</p>
    
      <div class="grid grid-cols-3 px-12 my-8 gap-12">
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/icons/handshake.png" alt="Handshake icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Shared Goals & Dreams </h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Set joint savings goals for your wedding, house, vacation, or emergency fund. Watch your progress together and celebrate milestones as a team.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="400">
          <img src="/assets/icons/bankcard.png" alt="Bank card icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Smart Expense Splitting</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Automatically categorize and split shared expenses. No more "who paid for what" arguments or tedious receipt tracking.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="600">
          <img src="/assets/icons/graph.png" alt="Graph icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Real-Time Sync</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Both partners see updates instantly. Make a purchase? Your partner knows immediately. Complete transparency, zero surprises.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="800">
          <img src="/assets/icons/target.png" alt="Target icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Individual + Joint Budgets</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Maintain personal spending freedom while managing shared expenses. Perfect balance of independence and partnership.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="1000">
          <img src="/assets/icons/iphone.png" alt="Mobile phone icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Gentle Reminders</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Smart notifications keep you both on track without being nagging. Celebrate wins and gently course-correct when needed.</p>
        </div>
        <div class="flex flex-col items-center gap-3 bg-[#E1E1FF] rounded-lg min-w-[400px] max-w-[400px] p-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]" data-aos="fade-up" data-aos-delay="1200">
          <img src="/assets/icons/chat.png" alt="Chat icon" class="w-16 h-16" />
          <h1 class="font-['Inter'] font-semibold text-[#2E2E2E] text-2xl pb-4">Better Money Conversations</h1>
          <p class="font-['Inter'] text-[#2E2E2E] text-center text-sm">Built-in prompts and insights help you discuss finances constructively. Turn money stress into money success.</p>
        </div>
      </div>
    </div>

    <!-- PRICING PLAN -->
    <div class="flex flex-col items-center py-16 bg-[#DADAFF]">
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
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">Choose plan</button>
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
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">Choose plan</button>
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
            <button class="relative overflow-hidden angular px-6 py-2 text-sm font-['Inter'] text-[#fff] font-semibold bg-[#2263CD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">Choose plan</button>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 px-16 bg-[#000]" style="background-image: url('/assets/bg-image.png'); object-fit: contain; background-repeat: no-repeat; background-size: cover; background-position: center;">
      <h1 class="font-['Inter'] text-6xl font-semibold" data-aos="fade-up">Ready to <br/><span class="text-[#FBFF00]">Transform</span> Your<br/>Financial Future?</h1>
      <p class="py-6 font-['Inter'] font-medium text-xl w-1/3" data-aos="fade-up">Join 50,000+ couples who've already started their journey to financial harmony.</p>
      <p class="flex gap-2 items-center text-xl" data-aos="fade-up"><img src="/assets/icons/tick-circle.png" alt="Tick circle" class="w-8"> Start under 5 minutes</p>  
      <p class="flex gap-2 items-center text-xl py-4" data-aos="fade-up"><img src="/assets/icons/tick-circle.png" alt="Tick circle" class="w-8"> Built for Couples</p>
      <button data-aos="fade-up" class="rounded-full px-6 py-3 mt-4 font-['Inter'] bg-[#F1F1F1] text-[#2C7BE5] font-semibold border border-[#2C7BE5] hover:bg-[#2C7BE5] hover:text-[#fff] transition-all shadow-xl">Start your Free Trial</button>
    </div>

    <div class="bg-[#1A202C] flex flex-col py-4">
      <div class="flex w-full justify-between">
        <div class="flex flex-col justify-between relative w-1/3"  data-aos="fade-in">
          <div class="flex flex-col gap-2">
            <img src="/assets/tandem-white.png" alt="Tandem Logo" class="w-[334px] h-[112px] px-10 pt-6 absolute -top-8 -left-12" />
            <p class="text-[#CBD5E0] w-2/3 pl-9 mt-16">Building stronger relationships through better financial communication.</p>
          </div>
          <div class="flex gap-4 pl-9">
            <a href="#" class="hover:opacity-80 transition-all duration-200"><img src="/assets/icons/twitter.png" alt="Twitter" class="w-8"></a>
            <a href="#" class="hover:opacity-80 transition-all duration-200"><img src="/assets/icons/gmail.png" alt="Gmail" class="w-8"></a>
            <a href="#" class="hover:opacity-80 transition-all duration-200"><img src="/assets/icons/linkedin.png" alt="LinkedIn" class="w-8"></a>
          </div>
        </div>
        <div class="flex gap-24 px-12 text-[#A0AEC0]"  data-aos="fade-in" data-aos-delay="200">
          <div class="flex flex-col gap-2 py-4 font-['IBM Plex Sans'] text-[#] w-full text-sm">
            <h4 class="text-[#3B82F6] text-2xl font-['Inter'] font-semibold">Product</h4>
            <a href="#" class="pt-2 hover:opacity-80 transition-all duration-200 w-fit">Features</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Pricing</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Demo</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">What's New</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Integrations</a>
          </div>
          <div class="flex flex-col gap-2 py-4 font-['IBM Plex Sans'] w-full text-sm">
            <h4 class="text-[#3B82F6] text-2xl font-['Inter'] font-semibold">Support</h4>
            <a href="#" class="pt-2 hover:opacity-80 transition-all duration-200 w-fit">Help Center</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Contact Us</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Community</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">System Status</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Send Feedback</a>
          </div>
          <div class="flex flex-col gap-2 py-4 font-['IBM Plex Sans'] w-full text-sm">
            <h4 class="text-[#3B82F6] text-2xl font-['Inter'] font-semibold">Company</h4>
            <a href="#" class="pt-2 hover:opacity-80 transition-all duration-200 w-fit">About Us</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Careers</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Press Kit</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Partners</a>
            <a href="#" class="hover:opacity-80 transition-all duration-200 w-fit">Inventors</a>
          </div>
        </div>
        <div class="flex flex-col items-end gap-4 px-12 py-8 w-1/3"  data-aos="fade-in" data-aos-delay="300">
          <!-- Google Play Button -->
          <a href="#"  class="relative overflow-hidden angular flex items-center gap-3 px-6 py-2 mt-4 max-w-[200px] w-full max-h-[55px] h-full rounded-full bg-gradient-to-r from-[rgba(59,130,246,0.5)] to-[rgba(99,102,241,0.5)] shadow-lg transition-all duration-300">
            <img src="/assets/icons/google-play.png" alt="Google Play" class="w-8 h-8 z-10" />
            <div class="flex flex-col text-left text-white leading-tight z-10">
              <span class="text-xs font-medium font-['Manrope']">GET IT ON</span>
              <span class="text-lg font-semibold font-['Inter']">Google Play</span>
            </div>
          </a>

          <!-- App Store Button -->
          <a href="#" class="relative overflow-hidden angular flex items-center gap-3 px-4 py-2 max-w-[200px] w-full max-h-[55px] h-full rounded-full bg-gradient-to-r from-[rgba(59,130,246,0.5)]  to-[rgba(99,102,241,0.5)] shadow-lg">
            <img src="/assets/icons/apple.png" alt="App Store" class="w-12 z-10" />
            <div class="flex flex-col text-left text-white leading-tight -ml-1 z-10">
              <span class="text-xs font-medium font-['Manrope']">Download on the</span>
              <span class="text-lg font-semibold font-['Inter']">App Store</span>
            </div>
          </a>
        </div>
      </div>
      <hr class="px-8 mt-4 text-[rgba(217,217,217,0.2)] w-[95%] mx-auto" data-aos="fade-in" data-aos-delay="350">
      <div class="flex gap-4 py-1 px-9 text-sm font-['IBM Plex Sans'] text-[#A0AEC0]" data-aos="fade-in" data-aos-delay="400" id="copyright">
        <a href="#" class="hover:opacity-80 transition-all duration-200">Privacy Policy</a>
        <a href="#" class="hover:opacity-80 transition-all duration-200">Terms of Service</a>
        <a href="#" class="hover:opacity-80 transition-all duration-200">Security</a>
        <a href="#" class="hover:opacity-80 transition-all duration-200">Cookie Policy</a>
        <a href="#" class="hover:opacity-80 transition-all duration-200">Accessibility</a>
      </div>
      <h6 class="font-['Manrope'] text-[#A0AEC0] font-medium text-center pt-8" data-aos="fade-in" data-aos-delay="450" data-aos-anchor="#copyright">© 2025 Tandem Financial, Inc. All rights reserved.</h6>
    </div>
  </div>
</template>
