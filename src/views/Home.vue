<template>
  <div class="home">Home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click!</button>
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

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p }
  },
}
</script>
