<template>
    <header class="py-2 mb-12 bg-secondary" md="5">
        <v-row justify="center" align="center" >
            <v-col cols="4" md="5">
                <v-row justify="end">
                    <v-col cols="12" sm="6" lg="3">
                        <header-button>Kolekcja</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button>Zamów</header-button>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4" sm="3" md="2" lg="1">
                <div class="logo">
                    <v-img src="/img/logo.jpg"></v-img>
                </div>
            </v-col>
            <v-col cols="4" md="5">
                <v-row justify="start">
                    <v-col cols="12" sm="6" lg="3">
                        <header-button>Kontakt</header-button>
                    </v-col>
                    <v-col cols="12" sm="6" lg="3">
                        <header-button>O nas</header-button>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </header>
    <div class="pa-12"></div>
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
.logo {
    position: relative;
    top: 30px;
    max-height: 100px;
}

.v-img {
    border-radius: 10px;
}
</style>