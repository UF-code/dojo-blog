<template>
  <div class="create">
    <form>
      <label>Title: </label>
      <input v-model="title" type="text" required />
      <label>Content: </label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown" />
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') // removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    return { title, body, tag, tags }
  },
}
</script>

<style></style>
