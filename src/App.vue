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
    -webkit-text-stroke: 1px rgb(var(--v-theme-secondary));
}

.bordered{
    border: 2px solid rgb(var(--v-theme-secondary));
}

.vertical-bordered{
    border-top: 2px solid rgb(var(--v-theme-secondary));
    border-bottom: 2px solid rgb(var(--v-theme-secondary));
}

.line {
    border-top: 2px dashed white;
}

.center-horizontal{
    margin: 0 auto;
}

.center-vertical {
    margin: auto 0;
}

a {
    text-decoration: none;
}
</style>