import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ChatsState } from './types'
import { RootState } from '../types'

export const state: ChatsState = {
  chats: [],
}

const namespaced: boolean = true

export const chats: Module<ChatsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
