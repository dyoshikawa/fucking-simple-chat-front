import { ActionTree } from 'vuex'
// APIは別の話なので今回は固定値としておきます
// import axios from 'axios'
import { ChatsState, Chat } from './types'
import { RootState } from '../types'

export const actions: ActionTree<ChatsState, RootState> = {
  fetchChats({ commit }): any {
    // APIは別の話なので今回は固定値としておきます
    // axios({
    //   url: 'https://....'
    // }).then((response) => {
    //   const payload: User = response && response.data
    //   commit('profileLoaded', payload)
    // }, (error) => {
    //   console.log(error)
    //   commit('profileError')
    // })
    const payload = {
      firstName: 'firstNameのデータ',
      lastName: 'lastNameのデータ',
      email: 'sample@example.com',
      phone: '＋819000000000',
    }
    commit('setChats', payload)
  },
}
