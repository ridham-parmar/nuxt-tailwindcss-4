<script setup>
const callCount = ref(0);

const username = ref("ridham");
const password = ref('');

const body = computed(() => ({
    username: username.value,
    password: password.value,
}))

const didItWork = ref(false);

// With useFetch

// NOTE :  
//       - can use useFetch inside the function as below in order to stop useFetch to watch ref/reactive states
//       - here browser still throws warning as component is already mounted, use $fetch() instead of useFetch()   
async function submitForm() {
    const { error } = await useFetch('/api/login', {
        method: 'POST',
        // watch: false,                          
        body,
        onResponse() {
            callCount.value++;
        }
    })
    console.log("error ---------", error.value);

    if(!error.value) {
        didItWork.value = true;
    }
}

// with $fetch

// NOTE: 
//       - A proper way to handle api call on client side
// async function submitForm() {
//     try {
//         console.log("body--------", body);
        
//         const data = await $fetch('/api/login', {
//             method: 'POST',
//             body: body.value,
//             onResponse() {
//                 callCount.value++;
//             }
//         })
//         console.log("error ---------", data);
//         didItWork.value = true;
//     } catch (error) {
//         console.error(error)
//     }
// }
</script>

<template>
    <div class="wrapper">
        <h1>Login User</h1>

        <br><br><br>

        <form @submit.prevent="submitForm">
            <input v-model="username" type="text" placeholder="username">
            <input v-model="password" type="password" placeholder="password">
            <button>Submit Form</button>
        </form>

        <h4>Call Count : {{ callCount }}</h4>
        <h4>Did it work : {{ didItWork }} </h4>
    </div>
</template>
