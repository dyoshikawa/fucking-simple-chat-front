import { MutationTree } from 'vuex'
import { ChatsState, Chat } from './types'

export const mutations: MutationTree<ChatsState> = {
  setChats(state, payload: Chat[]) {
    state.chats = payload
  },

  addChat(state, payload: Chat) {
    state.chats.unshift(payload)
  },
}
