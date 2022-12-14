<template>
    <v-app >
        <v-main class="bg-primary">
            <router-view></router-view>
        </v-main>
        <the-footer></the-footer>
    </v-app>
</template>

<script>
import TheFooter from './components/global/TheFooter.vue'

export default {
    components: {
        TheFooter
    },
}
</script>

<style>

.v-main{
    position: relative;
    z-index: 0;
}

body {
    margin: 0;
    padding: 0;
}

.outline{
    -webkit-text-stroke: 1px #AB987A;
}

a {
    text-decoration: none;
}
</style>