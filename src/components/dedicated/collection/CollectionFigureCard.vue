<template>
    <v-col cols="6" md="4" lg="3">
        <router-link :to="details">
            <v-card rounded="md" class="bg-primary border" elevation="20" block>
                <v-hover v-slot="{ isHovering, props }" v-model="hover">
                    <v-img :src="figure.filePath" cover :height="size" v-bind="props"
                        :class="isHovering ? 'zoom-in' : ''" eager></v-img>
                    <div class="overlay w-100 h-100 text-h5 text-center" v-bind="props" v-if="hover">
                        <div class="center-vertical">
                            <div>
                                <v-icon :size="size / 3">mdi-magnify</v-icon>
                            </div>
                            <div>
                                {{ figure.name }}
                            </div>
                        </div>
                    </div>
                </v-hover>
            </v-card>
        </router-link>
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

    },
    computed: {
        size() {
            if (this.$vuetify.display.xs) {
                return 150;
            }
            else if (this.$vuetify.display.lgAndDown) {
                return 350;
            }
            else {
                return 500;
            }
        },
        details() {
            return this.$route.path + '/details/' + this.figure.id;
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
}

.v-card {
    position: relative;
    text-align: center;
}

.overlay {
    transition: all 0.2s ease;
    position: absolute;
    top: 0%;
}

.overlay:hover {
    filter: opacity(0.75);
    background-color: rgb(var(--v-theme-accent));
}
</style>