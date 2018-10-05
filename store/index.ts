import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '~/store/types'
import { profile } from './profile/index'
import { chats } from './chats/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    profile,
    chats,
  },
  state: {
    version: '1.0.0', // a simple property
  },
}

const createStore = () => {
  return new Vuex.Store<RootState>(store)
}

export default createStore
