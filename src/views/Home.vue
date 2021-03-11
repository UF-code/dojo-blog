<template>
  <div class="home">Home</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click!</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  setup() {
    console.log('setup')

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('Cliked!!!')
    }

    return { name, age, handleClick }
  },
}
</script>
