<template>
    <v-col cols="3" md="2" lg="1" class="d-flex justify-center align-center mx-0 mx-md-8">
        <a :href="link" target="blank">
            <v-avatar :color="color" :size="size" rounded="lg" :class="type">
                <v-icon :size="iconSize">{{ iconName }}</v-icon>
            </v-avatar>
        </a>
    </v-col>
</template>

<script>

export default {
    props: {
        size: {
            type: Number,
            required: true,
        },
        iconSize: {
            type: Number,
            required: true
        },
        iconName: {
            type: String,
            required: false,
            default: "mdi-account-supervisor"
        },
        color: {
            type: String,
            required: false,
            default: "#FFFFFF",
        },
        type: {
            type: String,
            required: false,
            default: ""
        },
        link: {
            type: String,
            required: false,
            default: "#"
        }
    }
}
</script>


<style scoped>
.instagram {
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
}

a {
    transition: all 0.2s ease-out;
}

a:hover {
    transform: scale(1.1);
}
</style>