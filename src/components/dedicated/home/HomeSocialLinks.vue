<template>
    <social-link color="#4267B2" :size="size" :iconSize="fbSize" iconName="mdi-facebook"></social-link>
    <social-link :size="size" :iconSize="size" iconName="mdi-instagram" type="instagram"></social-link>
    <social-link :size="size" :iconSize="size" color="blue" iconName="mdi-twitter"></social-link>
    <social-link :size="size" :iconSize="size" color="green" iconName="mdi-whatsapp"></social-link>
</template>

<script>
import SocialLink from '../../global/SocialLink.vue'

export default{
    components:{
        SocialLink
    },
    props:{
        size:{
            type: Number,
            required: false,
            default: 60
        }
    },
    computed:{
        fbSize(){
            return this.size*2;
        },
    }
}
</script>