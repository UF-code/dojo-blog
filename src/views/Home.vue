<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: 'wellcome to the blog',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nostrum fugiat non officiis commodi hic? Pariatur adipisci culpa quibusdam nostrum, blanditiis a quas accusantium deleniti, vel facilis ipsum nemo modi laboriosam cupiditate impedit qui temporibus odit ipsam debitis nisi? Natus perspiciatis ad molestiae optio nihil modi cupiditate, quam perferendis ipsum consequuntur est amet neque officiis, maiores omnis facilis. Fuga facilis nulla fugit unde consectetur recusandae repellat beatae voluptas dignissimos aspernatur sint nisi reprehenderit pariatur mollitia repudiandae neque cumque, ullam harum. Laboriosam, quod ipsum quam natus recusandae vero nihil enim ab, laudantium quasi illo et explicabo non amet? Placeat, et illo!',
        id: 1,
      },
      {
        title: 'top 5 CSS tips',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nostrum fugiat non officiis commodi hic? Pariatur adipisci culpa quibusdam nostrum, blanditiis a quas accusantium deleniti, vel facilis ipsum nemo modi laboriosam cupiditate impedit qui temporibus odit ipsam debitis nisi? Natus perspiciatis ad molestiae optio nihil modi cupiditate, quam perferendis ipsum consequuntur est amet neque officiis, maiores omnis facilis. Fuga facilis nulla fugit unde consectetur recusandae repellat beatae voluptas dignissimos aspernatur sint nisi reprehenderit pariatur mollitia repudiandae neque cumque, ullam harum. Laboriosam, quod ipsum quam natus recusandae vero nihil enim ab, laudantium quasi illo et explicabo non amet? Placeat, et illo!',
        id: 2,
      },
    ])

    return { posts }
  },
}
</script>

<style></style>
