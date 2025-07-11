<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import router from '@/router';
    
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const handleRegister = async () => {

        if(password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post('http://localhost:3000/api/users/register', {
                fullName: fullName.value,
                email: email.value,
                password: password.value,
            });

            const loginResponse = await axios.post('http://localhost:3000/api/users/login', {
                email: email.value,
                password: password.value,
            });
            
            if(loginResponse.status === 200) {
                localStorage.setItem('token', loginResponse.data.token);
                localStorage.setItem('user', JSON.stringify({
                    id: loginResponse.data.user.id,
                    email: loginResponse.data.user.email,
                    fullName: loginResponse.data.user.fullName,
                }));
            }
            
            fullName.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';



            router.push('/register/pricing');
        } catch(error) {
            console.error('Registration failed:', error);
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
            <h1 class="text-[#2E2E2E] font-['Inter'] text-5xl font-semibold">Let's Get Started 🚀</h1>
            <form @submit.prevent="handleRegister" class="flex flex-col gap-4 w-full items-center">
                <input v-model="fullName" type="text" placeholder="Full Name" required class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input v-model="email" type="email" placeholder="Email" required class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input v-model="password" type="password" placeholder="Password" required class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required class="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-1/2 outline-0 p-2 rounded-lg font-['Manrope'] font-medium text-[#2e2e2e] border-1 border-[rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.3)] placeholder-[rgba(41,41,41,0.75)]"/>
                <button type="submit" class="py-2 font-['Manrope'] w-1/2 font-medium text-xl bg-[#466CFF] border-1 border-[rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-lg relative overflow-hidden angular transition-all duration-200"><span class="z-10">Sign Up</span></button>
                <p class="text-[rgba(41,41,41,0.75)] font-['Manrope'] font-medium text-xl">Already have an account?</p>
                <a href="/login" class="font-['Manrope'] font-semibold text-[#466CFF] text-lg relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#466CFF] after:transition-all after:duration-300 hover:after:w-full transition">Login now</a>
            </form>
        </div>
    </div>
</template>