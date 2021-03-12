<template>
  <div class="home">Home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click!</button>
  <input type="text" v-model="name" />
  <button @click="age++">Increase Age by One</button>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  setup() {
    console.log(this)

    const p = ref(null)
    console.log(p)

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick, p }
  },
}
</script>
