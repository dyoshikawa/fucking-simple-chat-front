import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ChatsState } from './types'
import { RootState } from '../types'

export const state: ChatsState = {
  list: [],
}

const namespaced: boolean = true

export const profile: Module<ChatsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
