<template>
    <v-parallax src="img/bg.jpg" height="500" cover class="d-flex align-center" gradient="rgba(0,0,0,.6), rgba(0,0,0,.6)">
        <div class="centered text-center ma-8 text-white font-weight-bold text-h4 ">Zapraszamy do zapoznania się
            z
            aktualną
            ofertą</div>
        <v-row justify="center" class="pa-0 pa-md-12">
            <home-action-button>Przejrzyj kolekcję</home-action-button>
            <v-col cols="0" sm="1"></v-col>
            <home-action-button>Złóź zamówienie</home-action-button>
        </v-row>
    </v-parallax>
</template>

<script>
import HomeActionButton from '../../dedicated/home/HomeActionButton.vue'

export default {
    components: {
        HomeActionButton
    }
}
</script>