<script setup >
import { ref } from 'vue';
import Comp1 from './Comp1.vue'
import Comp2 from './Comp2.vue'


const show = ref(false)
const docstate = ref('edit')

const onBeforeEnter = (e) => {
    console.log('On onBeforeEnter ', e)
}
const onEnter = (e, done) => {
    console.log('On onEnter enter', e)

    const animate = e.animate([{ transform: 'scale(0)' }, {}], { duration: 1000 })
    animate.onfinish = () => {
        done()
    }
}
const onAfterEnter = (e) => {
    console.log('On onAfterEnter enter', e)
}
const onBeforeLeave = (e) => {
    console.log('On onBeforeLeave enter', e)
}
const onLeave = (e, done) => {
    console.log('On onLeave enter', e)
    const animate = e.animate([{}, { transform: 'scale(0)' }], { duration: 1000 })

    animate.onfinish = () => {
        done()
    }
}
const onAfterLeave = (e) => {
    console.log('On onAfterLeave enter', e)
}


const items = ref([1, 2, 3, 4, 5])

let amount = items.value.length + 1;
const addIndex = () => {

    amount++
    const randomPosition = Math.floor(Math.random() * (items.value.length + 1));
    items.value.splice(randomPosition, 0, amount);
};


const removeIndex = () => {
    const randomPosition = Math.floor(Math.random() * (items.value.length + 1));
    items.value.splice(randomPosition, 1);
};

const shuffIndex = () => {
    const array = items.value;

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const tabs = { Comp1, Comp2 }
const currentTab = ref('Comp1')

</script>

<template>
    <Transition />

    <button @click="show = !show">Toggle</button>

    <Transition :duration="550" name="nested">
        <div v-if="show" class="outer">
            <div class="inner">
                Hello
            </div>
        </div>
    </Transition>



    <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave"
        @leave="onLeave" @after-leave="onAfterLeave">
        <div v-if="show" style="text-align: center;">Transition Hook</div>
    </Transition>


    <div class="box">
        <Transition mode="out-in" :duration="250" name="change">
            <button v-if="docstate === 'edit'" @click="docstate = 'save'">Edit</button>
            <button v-else-if="docstate === 'save'" @click="docstate = 'cancle'">Save</button>
            <button v-else-if="docstate === 'cancle'" @click="docstate = 'edit'">Cancle</button>
        </Transition>
    </div>




    <button @click="addIndex">Add at random index</button>
    <button @click="removeIndex">Remove at random index</button>
    <button @click="shuffIndex">Shuffle random index</button>
    <TransitionGroup name="list" tag="ul">
        <li v-for="item in items" :key="item">
            {{ item }}
        </li>
    </TransitionGroup>

    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
    </button>

    <KeepAlive>
        <component :is="tabs[currentTab]" class="tab">

        </component>
    </KeepAlive>
</template>

<style scoped>
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0;
}

.nested-enter-active .inner {
    transition-delay: 0.25s;

}

.outer {
    background-color: aqua;
    height: 120px;
}

.inner {
    background: #ccc;
    color: #213547;
}


.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {

    opacity: 0;
    transform: translateX(30px);
}


.change-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.change-enter-to {
    transform: translateY(0);
    opacity: 1;
    transition-duration: 500ms;
}

.change-leave-to {
    transform: translateY(30px);
    opacity: 0;
    transition-duration: 500ms;
}


.box {
    margin: 50px 0;
    position: relative;
}
</style>