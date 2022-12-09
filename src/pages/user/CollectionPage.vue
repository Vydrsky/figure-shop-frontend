<template>
    <v-row justify="space-around" no-gutters>
        <figure-card v-for="figure in figures" :key="figure.id" :figure="figure"></figure-card>
    </v-row>
</template>

<script>
import FigureCard from '../../components/dedicated/FigureCard.vue'
import { mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters('figure',['figures']),
    },
    components: {
        FigureCard
    },
    created(){
        this.$store.dispatch('figure/getAllFigures');
    }
}
</script>