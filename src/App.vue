<template>
    <div id="app">
        <router-link to="/" > <b>Home </b></router-link>
        <router-link to="/pricing" > <b> Pricing Calculator</b></router-link>
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
