<script  lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { type dataType } from './types/data'
import axios from 'axios'


export default defineComponent(
  {

    setup() {

      const items = ref<string[]>(['ปิด', 'เบลอ']);
      const modeBlue = ref<string>('');
      const activeIndex = ref<number>(0);
      const data = ref<dataType[]>([]);
      const limits = ref<number>(10)
      const offset = ref<number>(0)


      const handleClickActive = (index: number) => {
        activeIndex.value = index;
        localStorage.setItem('modeBlue', JSON.stringify(items.value[index]));

      };

      const nextPage = () => {
        offset.value = offset.value + 10;
        fetchData();
      };



      const prevPage = () => {
        offset.value = offset.value - 10;
        fetchData();
      };

      const fetchData = async () => {
        try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${offset.value}&_limit=${limits.value}`);
          data.value = await res.data;
        } catch (error) {
          console.error(error);
        }
      };


      onMounted(async () => {
        const storedValue = localStorage.getItem('modeBlue');
        if (storedValue) {
          modeBlue.value = JSON.parse(storedValue);
          activeIndex.value = items.value.indexOf(modeBlue.value)


        }
        fetchData();
      });

      return {
        handleClickActive,
        items,
        modeBlue,
        activeIndex,
        data,
        limits,
        nextPage,
        prevPage,
        offset
      };
    },

  }
)


</script>

<template>
  <div class="">
    <ul class="list">
      <transition-group name="fade">
        <li v-for="(item, index) in items" :key="index" :class="{ active: index === activeIndex }"
          @click="handleClickActive(index)">
          {{ item }}
          <span>
            <fa icon="check" />
          </span>
        </li>
      </transition-group>
    </ul>
  </div>
  <div class="">
    Current Offset: {{ offset }}
    <button :disabled="offset === 0" @click="prevPage">Prev</button>
    <button @click="nextPage">Next</button>
  </div>

  <div class="">
    <div v-for="item in data" :key="item.id">
      {{ item.title }}
      {{ item.id }}
      <img :class="{ blur: items[activeIndex] === 'เบลอ' }" :src="item.thumbnailUrl" alt="">
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;

}

.list li {
  cursor: pointer;
  background-color: #414141;
  width: 100px;
  border-radius: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;

}

.list li span {
  margin-left: 10px;
  display: none;

  transition-duration: 500ms;
}

.list li.active span {
  display: block !important;
}

.img-container {
  overflow: hidden;
}

.blur {
  object-fit: cover;
  opacity: .5;

  filter: blur(9px);
}


.list li:hover,
.list li.active {
  background: #6e6e6e;


}
</style>
