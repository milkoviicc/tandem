<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    const email = ref('');
    const password = ref('');

    const handleLogin = async() => {

        if(!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {email: email.value, password: password.value})
            if(response.status === 200) {
                const {token, user} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                email.value = '';
                password.value = '';
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
</script>

<template>
    <div class="flex">
        <div class="flex flex-col h-screen w-1/2 justify-center items-center bg-[conic-gradient(from_0deg_at_top_left,_#4F62EE,_#4F7CFF)]">
            <img src="/assets/tandem-white.png" alt="Tandem logo" class="w-96"/>
            <img src="/assets/piggybank.png" alt="Piggy bank" class="w-96"/>
            <h1 class="text-6xl font-['Inter'] font-semibold">Plan Together.<br/>Save Together.</h1>
        </div>
        <div class="flex flex-col h-screen w-1/2 justify-center items-center gap-12">
            <h1 class="text-[#2E2E2E] font-['Inter'] text-5xl font-semibold">Welcome Back  👋</h1>
            <form @submit.prevent="handleLogin" class="flex flex-col gap-4 w-full items-center">
                <input v-model="email" type="email" placeholder="Email" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input v-model="password" type="password" placeholder="Password" class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <button type="submit" class="py-2 font-['Manrope'] w-1/2 font-medium text-xl bg-[#466CFF] border-1 border-[rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-lg relative overflow-hidden angular transition-all duration-200"><span class="z-10">Sign In</span></button>
                <p class="text-[rgba(41,41,41,0.75)] font-['Manrope'] font-medium text-xl">Don't have an account?</p>
                <a href="/register" class="font-['Manrope'] font-semibold text-[#466CFF] text-lg relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Register now</a>
            </form>
        </div>
    </div>
</template>