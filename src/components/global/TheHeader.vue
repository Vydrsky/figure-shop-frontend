<template>
    <header>
        <v-row justify="center" :align="'start'" class=" bg-secondary">
            <v-col cols="4" md="5" class="pt-10">
                <v-row justify="start">
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="collection">Kolekcja</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="order">Zamów</header-button>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4" sm="3" md="2" lg="1">
                <router-link to="home">
                    <v-img eager src="/img/logo.jpg"></v-img>
                </router-link>
            </v-col>
            <v-col cols="4" md="5" class="pt-10">
                <v-row justify="end" >
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="contact">Kontakt</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button link to="about">O nas</header-button>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <div class="header-background"></div>
    </header>
</template>

<script>
import HeaderButton from './HeaderButton.vue'

export default {
    components: {
        HeaderButton
    }
}
</script>

<style scoped>
.header-nav {
    max-height: 100px;
}

.header-background {
    height: 25rem;
    background-color: rgb(var(--v-theme-secondary));
}
</style>