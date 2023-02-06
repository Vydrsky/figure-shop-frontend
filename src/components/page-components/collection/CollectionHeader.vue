<template>
    <summary class="page-desc">
        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <p class="text-h3 text-center center-horizontal py-8 mt-8">Kolekcja</p>
                </v-col>
                <v-col cols="12" md="8">
                    <div class="d-flex align-center">
                        <v-icon :size="size" color="white" icon="mdi-checkbox-multiple-blank-outline" class="mt-0 mt-md-4"></v-icon>
                        <p class="text-caption text-sm-h6 text-justify center-horizontal pa-4">Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Natus maiores aut veritatis nulla consequuntur error architecto. Temporibus
                            consequuntur
                            voluptas,
                            voluptate ut in numquam tempore sit ipsa pariatur exercitationem culpa suscipit.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </summary>
</template>

<script>
export default{
    computed:{
        size(){
            if(this.$vuetify.display.smAndDown) return 60;
            else return 80;
        }
    }
}
</script>

<style scoped>

</style>