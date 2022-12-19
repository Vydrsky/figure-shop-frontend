<template>
    <the-header></the-header>
    <v-row justify="space-around" no-gutters>
        <figure-card v-for="figure in figures" :key="figure.id" :figure="figure"></figure-card>
    </v-row>
</template>

<script>
import FigureCard from '../../components/dedicated/collection/CollectionFigureCard.vue'
import TheHeader from '../../components/global/TheHeader.vue'
import { mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters('figure',['figures']),
    },
    components: {
        FigureCard,
        TheHeader
    },
    created(){
        this.$store.dispatch('figure/getAllFigures');
    }
}
</script>