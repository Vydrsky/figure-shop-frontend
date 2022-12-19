<template>
    <v-col cols="12" md="4" xl="3" class="pa-2 pa-md-8">
        <v-card class="bg-primary" :elevation="20">
            <v-card-title class="pa-4 pa-md-8">
                <v-icon class="w-100" size="120">{{iconName}}</v-icon>
            </v-card-title>
            <v-card-text class="text-center text-h6 bordered pa-8 border">
                <slot></slot>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props:{
        iconName:{
            type: String,
            required: false,
            default: 'mdi-account'
        }
    }
}
</script>