<template>
    <v-app>
        <v-parallax src="" scale="0.35">
            <the-header></the-header>
            <v-main>
                <router-view></router-view>
            </v-main>
        </v-parallax>
    </v-app>
</template>

<script>
import TheHeader from './components/global/TheHeader.vue'

export default {
    components: {
        TheHeader
    },
}
</script>

<style>
a {
    text-decoration: none;
}
</style>