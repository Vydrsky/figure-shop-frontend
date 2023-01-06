<template>
    <v-parallax height="500" cover class="d-flex align-center container">
        <v-img src="img/bg.jpg" class="background" cover gradient="rgba(0,0,0,.5), rgba(0,0,0,.5)" eager></v-img>
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

<style scoped>
.container {
    position: relative;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
</style>