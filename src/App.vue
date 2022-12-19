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
    overflow: hidden;
}

.outline{
    -webkit-text-stroke: 1px #985E6D;
}

.bordered{
    border: 2px solid #98878F;
}

.line {
    border-bottom: 2px dashed white;
}

.centered{
    margin: 0 auto;
}

a {
    text-decoration: none;
}
</style>