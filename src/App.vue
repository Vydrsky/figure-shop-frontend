<template>
    <v-app>
        <v-parallax src="/bg.jpg" cover scale="0.6">
            <the-header></the-header>
            <v-main>
                <router-view></router-view>
            </v-main>
        </v-parallax>
            <the-footer></the-footer>
    </v-app>
</template>

<script>
import TheHeader from './components/global/TheHeader.vue'
import TheFooter from './components/global/TheFooter.vue'

export default {
    components: {
        TheHeader,
        TheFooter
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}
</style>