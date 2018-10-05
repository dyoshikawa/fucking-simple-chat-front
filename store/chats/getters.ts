import { GetterTree } from 'vuex'
import { ChatsState, Chat } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ChatsState, RootState> = {
  fullName(state): Chat[] {
    const { list } = state
    return list
  },
}
