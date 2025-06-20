<script setup>
const callCount = ref(0);

const username = ref("ridham");
const password = ref('');

const body = computed(() => ({
    username: username.value,
    password: password.value,
}))

const didItWork = ref(false);

const { error, execute } = await useFetch('/api/login', {
    method: 'POST',
    immediate: false,
    watch:false,
    body,
    onResponse() {
        callCount.value++;
    }
})
console.log("error ---------", error.value);

async function submitForm() {
    await execute()
    if (!error.value) {
        didItWork.value = true;
    } else {
        didItWork.value = false;
    }
}
</script>

<template>
    <div class="wrapper">
        <h1>With useFetch composable outside a function</h1>
        <h2>Login User</h2>

        <br>

        <form @submit.prevent="submitForm">
            <input v-model="username" type="text" placeholder="username" class="border rounded">
            <input v-model="password" type="password" placeholder="password" class="border rounded">
            <button class="border rounded">Submit Form</button>
        </form>

        <h4>Call Count : {{ callCount }}</h4>
        <h4>Did it work : {{ didItWork }} </h4>
    </div>
</template>
