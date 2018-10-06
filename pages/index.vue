<template>
  <div>
    <b-button @click="click">chat</b-button>

    <b-pagination
      size="md"
      :total-rows="100"
      :per-page="10"
      @change="changePage($event)"
    />

    <ul>
      <li
        v-for="chat in computedChats"
        :key="chat.id"
      >
        {{ chat.createdAt }} 
        {{ chat.name }}
        {{ chat.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { Chat } from '~/store/chats/types'
import io from 'socket.io-client'

const socket = io('http://localhost:8080')

@Component({
  components: {
    Logo,
  },
  async created() {
    console.log('created')
    await this.$store.dispatch('chats/fetchChats')
    socket.on('chat message', chat => {
      console.log(chat)
      this.$store.commit('chats/addChat', chat)
    })
  },
})
export default class extends Vue {
  get computedChats(): Chat[] {
    return this.$store.getters['chats/chats']
  }

  changePage(page: number) {
    this.$store.dispatch('chats/fetchChats')
  }

  click() {
    socket.emit('message', { name: 'name', content: 'content' })
  }
}
</script>
