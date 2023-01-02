<template>
    <v-col cols="6" md="4" lg="3" class="my-10">
        <v-card rounded="md" class="bg-primary border" elevation="20" block>
            <v-hover v-slot="{ isHovering, props }" v-model="hover">
                <v-img :src="figure.filePath" cover :height="500" v-bind="props"
                    :class="isHovering ? 'zoom-in' : ''"></v-img>
                <div v-if="hover" class="overlay" v-bind="props">ahujifshgjf</div>
            </v-hover>
        </v-card>
    </v-col>
</template>

<script>

export default {
    props: {
        figure: {
            type: Object,
            required: true,
            default: null,
        }
    },
    data() {
        return {
            hover: false,
        }
    },
    methods: {
        logg() {
            console.log(this.figure.name + " " + this.hover);
        }
    }
}
</script>

<style scoped>
.v-img {
    transition: all 0.2s ease-out;
}

.zoom-in {
    transform: scale(1.1);
    filter: brightness(50%);
}

.v-card {
    position: relative;
    text-align: center;

}

.overlay {
    position: absolute;
    top: 50%;
}
</style>