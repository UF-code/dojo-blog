<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div></div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts'],
  setup() {
    const { tags } = useTags(props.posts)
  },
}
</script>

<style></style>
