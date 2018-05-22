<template>
    <div id="app">
        <router-link to="/" > Home </router-link> 
        <router-link to="/pricing" > Pricing </router-link> 
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
<style>
    @import './assets/css/style.css'
</style>
