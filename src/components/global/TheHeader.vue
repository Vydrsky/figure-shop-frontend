<template>
    <header>
        <v-row justify="start" dense class="pa-3">
            <v-col cols="1" class="pa-3">
                <router-link to="home" class="text-text">LOGO</router-link>
            </v-col>
            <v-spacer></v-spacer>
            <header-button link to="collection">Kolekcja</header-button>
            <v-divider vertical color="accent" thickness="2" inset></v-divider>
            <header-button link to="order">Zamów</header-button>
            <v-divider vertical color="accent" thickness="2" inset></v-divider>
            <header-button link to="contact">Kontakt</header-button>
            <v-divider vertical color="accent" thickness="2" inset></v-divider>
            <header-button link to="about">O nas</header-button>
        </v-row>
    </header>
</template>

<script>
import HeaderButton from '../dedicated/HeaderButton.vue'

export default {
    components: {
        HeaderButton
    }
}
</script>

<style scoped>

</style>