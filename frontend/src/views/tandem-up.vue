<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    const email = ref('');
    const password = ref('');

    const invitePartner = async() => {

        if(!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        try {
            const response = await axios.post('http://localhost:3000/api/users/invitePartner', {email: email.value})
            if(response.status === 200) {
                console.log('Invitation sent successfully');
                email.value = '';
            }
        } catch (error) {
            console.error('Invitation failed:', error);
        }
    }
</script>

<template>
    <div class="flex">
        <div class="flex flex-col h-screen w-1/2 justify-center items-center bg-[#000]" style="background-image: url('/assets/pricing.png'); object-fit: contain; background-repeat: no-repeat; background-size: cover; background-position: center;"></div>
        <div class="flex flex-col h-screen w-1/2 justify-center items-center gap-12">
            <h1 class="text-[#2E2E2E] font-['Inter'] text-5xl font-semibold">Ready to Tandem Up? 🤝</h1>
            <form @submit.prevent="handleLogin" class="flex flex-col gap-4 w-full items-center">
                <h3 class="text-[#2E2E2E] font-['Inter'] font-medium">Share your journey and goals with someone you trust.</h3>
                <input v-model="email" type="email" placeholder="Email" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <button type="submit" class="py-2 font-['Manrope'] w-1/2 font-medium text-xl bg-[#466CFF] border-1 border-[rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-lg relative overflow-hidden angular transition-all duration-200"><span class="z-10">Invite Partner</span></button>
                <p class="text-[rgba(41,41,41,0.75)] font-['Manrope'] font-medium text-xl">You can skip this now and invite them later</p>
                <a href="/register" class="font-['Manrope'] font-semibold text-[#466CFF] text-lg relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Skip</a>
            </form>
        </div>
    </div>
</template>