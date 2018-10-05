import { MutationTree } from 'vuex'
import { ChatsState, Chat } from './types'

export const mutations: MutationTree<ChatsState> = {
  setChats(state, payload: Chat[]) {
    state.list = payload
  },
}
