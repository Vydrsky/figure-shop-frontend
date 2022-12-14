<template>
    <v-col cols="6" md="3" lg="2" class="bordered">
        <v-card>
            <v-img :src="'/img/' + image"></v-img>
        </v-card>
    </v-col>
</template>

<script>
export default{
    props:{
        image:{
            type: String,
            required: false,
            default: 'company.png'
        }
    }
}
</script>