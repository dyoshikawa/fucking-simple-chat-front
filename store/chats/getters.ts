import { GetterTree } from 'vuex'
import { ChatsState, Chat } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ChatsState, RootState> = {
  chats(state): Chat[] {
    const { chats } = state
    return chats
  },
}
