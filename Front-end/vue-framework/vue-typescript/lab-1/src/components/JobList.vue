<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";
import { type Job } from '../types/Job'
import { type OrderTerm } from '../types/OrderTerm'


export default defineComponent({
    props: {
        thejobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        },
        sortOrder: {
            required: true,
            type: String as PropType<'asc' | 'desc'>
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.thejobs].sort((a: Job, b: Job) => {
                const comparison = a[props.order] > b[props.order] ? 1 : -1;
                return props.sortOrder === 'asc' ? comparison : -comparison;
            });

        });
        return { orderedJobs }
    }

});


</script>

<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary">
                    <p>{{ job.salary }} rupees</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus deserunt animi
                        consectetur
                        tempora quidem provident sunt atque. Ratione quod ipsam officiis porro. Laudantium velit ipsum
                        repudiandae quisquam. Earum, hic!</p>
                </div>
            </li>
        </transition-group>
    </div>
</template>
<style  scoped>
.list-move {
    transition-duration: 500ms;
}
</style>

