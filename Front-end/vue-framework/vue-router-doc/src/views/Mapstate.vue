<script  >
import { useCounterStore } from '@/stores/counter';
import { mapState, mapActions, mapWritableState } from 'pinia';
export default {
    computed: {
        //only read
        ...mapState(useCounterStore, {
            count: 'count',
            doubleCount: 'doubleCount',
            tripleValue: (state) => state.count * 3,
        }),
        //can edit 
        ...mapWritableState(useCounterStore, ['name'])
    },
    methods: {
        ...mapActions(useCounterStore, ['increment', '$reset', '$patch', '$subscribe']),
        add() {
            this.$patch({
                count: this.count + 1,
                name: this.name = (this.name + ' isthathim').toString()
            })
            // console.log(this.count)
            // this.increment();
           
            // this.name = (this.name + ' isthathim').toString();
        }
    },
    mounted() {
        this.$subscribe((mutation, state) => {
            console.log(mutation)
            console.log(state)
        })
    }
}

</script>

<template>
    <div>
        <h1> Map State</h1>
        <div class="">
            Counter: {{ count }}
        </div>
        <div class="">
            DoubleCount: {{ doubleCount }}
        </div>
        <div class="">
            TripleCount: {{ tripleValue }}
        </div>
        <button @click="increment()">Increase++</button>
        <button @click="add()">console.log</button>
        <button @click="$reset()">Reset</button>
        <div class="">
            Name: {{ name }}
        </div>
    </div>
</template>

<style lang="css" scoped></style>