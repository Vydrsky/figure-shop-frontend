<template>
    <v-app>
        <the-nav></the-nav>
        <v-main class="bg-primary">
            <transition :name="headerTransitionControl()" mode="out-in">
                <the-header v-if="!isHomeRoute"></the-header>
            </transition>
            <router-view v-slot="slotProps">
                <transition :name="routeTransitionControl()" mode="out-in">
                    <component :is="slotProps.Component"></component>
                </transition>
            </router-view>
            <the-footer></the-footer>
        </v-main>
    </v-app>
</template>

<script>
import TheFooter from './components/global/TheFooter.vue'
import TheHeader from './components/global/TheHeader.vue'
import TheNav from './components/global/TheNav.vue'

export default {
    components: {
        TheFooter,
        TheHeader,
        TheNav
    },
    data() {
        return {
            show: false,
        }
    },
    computed: {
        isHomeRoute() {
            return this.$route.name == 'home';
        },

    },
    methods: {
        routeTransitionControl() {
            if (this.$router.options.history.state.back === '/home' || this.isHomeRoute) return 'home';
            else return 'route';
        },
        headerTransitionControl() {
            return 'header';
        }
    },
    mounted() {
        this.show = true;
    }
}
</script>

<style>
.v-main {
    position: relative;
    z-index: 0;
}

body {
    margin: 0;
    padding: 0;
    overflow: hidden;
}


.bordered {
    border: 4px solid rgb(var(--v-theme-secondary));
}

.vertical-bordered {
    border-top: 2px solid rgb(var(--v-theme-secondary));
    border-bottom: 2px solid rgb(var(--v-theme-secondary));
}

.line {
    border-top: 2px dashed white;
}

.center-horizontal {
    margin: 0 auto;
}

.center-vertical {
    margin: auto auto;
}

.page-desc {
    height: 30rem;
}

a {
    text-decoration: none;
    color: inherit;
}

.route-enter-from {
    transform: translateX(-100%);
}

.route-leave-to {
    transform: translateX(100%);
}

.route-enter-active {
    transition: all 0.2s ease;
}

.route-leave-active {
    transition: all 0.2s ease;
}

.route-enter-to,
.route.leave-from {
    opacity: 1;
    transform: translateX(0px);
}

.home-enter-from {
    opacity: 0;
    transform: translateY(-50%);
}

.home-leave-to {
    opacity: 0;
    transform: translateY(50%);
}

.home-enter-active {
    transition: all 0.2s ease;
}

.home-leave-active {
    transition: all 0.2s ease;
}

.home-enter-to,
.home.leave-from {
    opacity: 1;
    transform: translateY(0px);
}

.header-enter-from {
    opacity: 0;
    transform: translateY(-300px);
}

.header-leave-to {
    opacity: 0;
    transform: translateY(-300px);
}

.header-enter-active {
    transition: all 0.2s ease-out;
}

.header-leave-active {
    transition: all 0.2s ease-in;
}

.header-enter.to,
.header.leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>