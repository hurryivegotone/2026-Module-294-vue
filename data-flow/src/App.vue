<script setup>
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import Post from './components/Post.vue'

const posts = ref([
  { id: 1, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 8 },
  { id: 2, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 0 },
  { id: 3, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: -4 },
  { id: 4, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 0 },
  { id: 5, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: -8 },
  { id: 6, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 4 },
  { id: 7, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 6 },
  { id: 8, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 3 },
  { id: 9, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 15 },
])

function voteUp(post){
  post.votes++
}

function voteDown(post){
  post.votes--
}

function downloadPosts() {
  const dataStr = JSON.stringify(posts.value, null, 2)
  const blob = new Blob([dataStr], { type: 'application/json' })

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'posts.json'
  a.click()

  URL.revokeObjectURL(url)
}

</script>

<template>

<button @click="downloadPosts()">
  Save State
</button>

  <div class="container">
    <Post v-for="item in posts"
      :key="item.id"
      :text="item.text"
      :title="item.title"
      :user="item.user"
      :votes="item.votes" 
      @increase="voteUp(item)" 
      @decrease="voteDown(item)" 
      />
  </div>

</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  background: #f0f0f0;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  border: 1px solid #fafafa;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  background: #fff;
  border-radius: 4px;
  position: relative;
}
</style>