<template>
    <div class="relative flex justify-between items-center bg-[#DADAFF] shadow-[0_4px_20px_2px_rgba(0,0,0,0.5)] px-10">
        <router-link to="/"><img src="../assets/tandem-dark.png" alt="TANDEM logo" class="w-64 cursor-pointer"/></router-link>
        <div class="flex gap-6 font-semibold text-xl text-[#2E2E2E] font-['Inter']">
            <router-link to="/" class="hover:text-[#466CFF] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Home</router-link>
            <router-link to="/login" class="hover:text-[#466CFF] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Features</router-link>
            <router-link to="/register" class="hover:text-[#466CFF] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Pricing</router-link>
        </div>
        <button class="inline-flex items-center gap-2 rounded-full px-6 py-3 mx-10 bg-gradient-to-r from-[rgba(59,130,246,0.5)] to-[rgba(99,102,241,0.5)] font-['Inter'] text-[#fff] group shadow-xl bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)] transition-all">Get started <span class="transition-all group-hover:translate-x-1">→</span></button>
    </div>
</template>