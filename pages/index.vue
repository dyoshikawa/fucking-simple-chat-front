<template>
  <div>
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
        {{ chat.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { Chat } from '~/store/chats/types'

@Component({
  components: {
    Logo,
  },
  async created() {
    console.log('created')
    await this.$store.dispatch('chats/fetchChats')
  },
})
export default class extends Vue {
  get computedChats(): Chat[] {
    return this.$store.getters['chats/chats']
  }

  changePage(page: number) {
    this.$store.dispatch('chats/fetchChats')
  }
}
</script>
