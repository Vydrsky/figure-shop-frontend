<template>
    <v-container>
        <div class="line w-100 mb-12"></div>
    </v-container>
    <div class="centered text-center ma-8 text-accent font-weight-bold text-h4">Zapraszamy do zapoznania się z aktualną
        ofertą</div>
    <v-row justify="center" class="ma-12 pa-12">
        <home-action-button>Przejrzyj kolekcję</home-action-button>
        <v-col cols="0" sm="1"></v-col>
        <home-action-button>Złóź zamówienie</home-action-button>
    </v-row>
</template>

<script>
import HomeActionButton from '../../dedicated/home/HomeActionButton.vue'

export default {
    components: {
        HomeActionButton
    }
}
</script>