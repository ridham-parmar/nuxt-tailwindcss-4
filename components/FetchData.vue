<script setup>
// const dataTwice = await $fetch('/api/world')
// console.log("fetched twice data=========", dataTwice);

const { data } = await useAsyncData('products', () => $fetch('/api/world'))
console.log("fetched single data========", data);

const { data:useFetched } = await useFetch('/api/world')
console.log("fetched by useFetch=============", useFetched);

async function apiCall() {
    console.log("api calling on button click");
    
    const { data:innerData} = await useAsyncData('products', () => $fetch('/api/world'))
    console.log("innerData==========", innerData);
    
}
</script>

<template>
    <!-- <h2>$fetch : {{ dataTwice }}</h2> -->

    <!-- <br><br><br> -->

    <h2>useFetch : {{ useFetched }}</h2>

    <br><br><br>

    <h2>useAsyncData : {{ data }}</h2>

    <button @click="apiCall">Click to make api call</button>
</template>