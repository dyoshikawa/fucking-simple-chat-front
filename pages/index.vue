<template>
  <div>
    <b-pagination
      size="md"
      :total-rows="100"
      :per-page="10"
      @change="changePage($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo,
  },
})
export default class extends Vue {
  changePage(page: number) {
    this.$store.dispatch('')
  }
}
</script>

<style>
</style>
