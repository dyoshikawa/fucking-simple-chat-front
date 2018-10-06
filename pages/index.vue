<template>
  <div>
    <h1>Fucking Simple Chat</h1>
    <ul>
      <li>Nuxt.js</li>
      <li>express</li>
      <li>socket.io</li>
      <li>sequelize</li>
    </ul>

    <div
      class="mb-3"  
    >
      <b-form-group
        label="Name"
      >
        <b-input
          v-model="name"
        />
      </b-form-group>

      <b-form-group
        label="Message"
      >
        <b-input
          v-model="content"
        />
      </b-form-group>

      <b-button
        @click="send"
        variant="primary"
      >
        Send
      </b-button>
    </div>

    <b-card
      v-for="chat in computedChats"
      :key="chat.id"
      :title="chat.name"
      :sub-title="chat.createdAt"
      class="mb-2"
    >
      {{ chat.content }}
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { Chat } from '~/store/chats/types'
import io from 'socket.io-client'

const socket = io('http://localhost:8080')

@Component
export default class extends Vue {
  name: string = ''
  content: string = ''

  async created() {
    await this.$store.dispatch('chats/fetchChats')
    socket.on('chat message', chat => {
      this.$store.commit('chats/addChat', chat)
    })
  }

  get computedChats(): Chat[] {
    return this.$store.getters['chats/chats']
  }

  send() {
    socket.emit('message', { name: this.name, content: this.content })
    this.content = ''
  }
}
</script>
