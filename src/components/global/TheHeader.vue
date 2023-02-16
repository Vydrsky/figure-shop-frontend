<template>
    <header class="parent">
        <v-row justify="center" :align="'start'" class="bg-secondary header-nav">
            <v-col cols="4" md="5" class="pt-10">
                <v-row justify="start">
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="/collection">KOLEKCJA</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="/order">ZAMÓW</header-button>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3" sm="2" md="2" lg="1">
                <router-link to="home" class="logo">
                    <v-img eager src="/img/logo.jpg"></v-img>
                </router-link>
            </v-col>
            <v-col cols="4" md="5" class="pt-10">
                <v-row justify="end">
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="/contact">KONTAKT</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="/about">O NAS</header-button>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <div v-if="!isAdminPage" class="header-background d-flex">
            <v-img cover src="/img/bg3.jpg" class="backdrop"></v-img>
        </div>
    </header>
</template>

<script>
import HeaderButton from './HeaderButton.vue'

export default {
    components: {
        HeaderButton
    },
    computed:{
        isAdminPage(){
            return this.$route.path.match('admin');
        }
    }
}
</script>

<style scoped>
.header-nav {
    height: 10rem;
}

.header-background {
    height: 30rem;
    position: absolute;
    filter: grayscale(1);
    top: 10rem;
    left: 0px;
    width: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%);
}

.logo {
    position: relative;
    top: 30px;
}

.parent {
    position: relative;
}

.backdrop{
    filter:brightness(0.3);
}
</style>