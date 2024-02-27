<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/Card.vue';
import NameList from '@/components/NameList.vue';
import Fetchjson from '@/components/Fetchjson.vue';


const url = 'https://api.thecatapi.com/v1/images/search'

</script>

<template>
    <div>
        Home
        <hr>
        <div class="">
            <Card>

                <template v-slot:default>

                </template>

                <template v-slot:header>
                    <h3>
                        Header
                    </h3>
                </template>


                <template v-slot:content>
                    <img width="350" height="150"
                        src="https://www.megavoxels.com/wp-content/uploads/2023/06/Pixel-Art-Duck.png" alt="">
                </template>


                <template v-slot:footer>
                    <h3>
                        Footer
                    </h3>

                </template>
            </Card>
        </div>
        <hr>

        <NameList>
            <template v-slot:default="slotProps">
                {{ slotProps.firstname }} {{ slotProps.lastname }}
            </template>

        </NameList>

        <hr>


        <h1>Fetch JSON ADVANCE</h1>

        <Fetchjson :url="url" #="{ res, loading }">
            <div v-if="loading">
                <h1>Loading...</h1>
            </div>
            <div v-else>
                <img v-if="res && res.length > 0" :src="res[0].url" alt="" />
            </div>
        </Fetchjson>


    </div>
</template>

<style lang="css" scoped></style>