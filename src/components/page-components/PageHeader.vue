<template>
    <header>
        <v-row justify="center" align="center" class="bg-secondary">
            <v-spacer></v-spacer>
            <v-col cols="2" md="1">
                <header-button>Kolekcja</header-button>
            </v-col>
            <v-col cols="2" md="1">
                <header-button>Zamów</header-button>
            </v-col>
            <v-col cols="3" md="2">
                <div class="logo">
                    <v-img src="/img/logo.jpg" ></v-img>
                </div>
            </v-col>
            <v-col cols="2" md="1">
                <header-button>Kontakt</header-button>
            </v-col>
            <v-col cols="2" md="1">
                <header-button>O nas</header-button>
            </v-col>
            <v-spacer></v-spacer>
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
.logo {
    position: relative;
    top: 30px;
    max-height: 100px;
}
.v-img{
    border-radius: 10px;
}
</style>