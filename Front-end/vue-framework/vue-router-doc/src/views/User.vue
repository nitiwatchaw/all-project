<script setup >
import { reactive } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const Users = reactive([
    { id: 1, name: 'John' },
    { id: 2, name: 'Mojfd' },
    { id: 3, name: 'Kepprit' },
    { id: 4, name: 'Croper' },
    { id: 5, name: 'Robert' }
])


const handleRouteUpdate = () => {
    console.log('Route updated');
}


onBeforeRouteUpdate(handleRouteUpdate);

</script>

<template>
    <div class="">
        <div>
            User Page
        </div>
        <div>
            <p v-for="user in Users" :key="user.id">
                <router-link :to="{ name: 'usersingle', params: { id: user.id } }">
                    ({{ user.id }}) {{ user.name }}
                </router-link>
            </p>
        </div>


        <router-view />
    </div>
</template>

<style lang="css" scoped></style>