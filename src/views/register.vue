<template>
    <div class="flex">
        <div class="flex flex-col h-screen w-1/2 justify-center items-center bg-[conic-gradient(from_0deg_at_top_left,_#4F62EE,_#4F7CFF)]">
            <img src="/assets/tandem-white.png" alt="Tandem logo" class="w-96"/>
            <img src="/assets/piggybank.png" alt="Piggy bank" class="w-96"/>
            <h1 class="text-6xl font-['Inter'] font-semibold">Plan Together.<br/>Save Together.</h1>
        </div>
        <div class="flex flex-col h-screen w-1/2 justify-center items-center gap-12">
            <h1 class="text-[#2E2E2E] font-['Inter'] text-5xl font-semibold">Let's Get Started 🚀</h1>
            <div class="flex flex-col gap-4 w-full items-center">
                <input type="text" placeholder="Full Name" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input type="email" placeholder="Email" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input type="password" placeholder="Password" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input type="password" placeholder="Confirm Password" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <button class="py-2 font-['Manrope'] w-1/2 font-medium text-xl bg-[#466CFF] border-1 border-[rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-lg relative overflow-hidden angular transition-all duration-200"><span class="z-10">Sign Up</span></button>
                <p class="text-[rgba(41,41,41,0.75)] font-['Manrope'] font-medium text-xl">Already have an account?</p>
                <a href="/login" class="font-['Manrope'] font-semibold text-[#466CFF] text-lg relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Login now</a>
            </div>
        </div>
    </div>
</template>