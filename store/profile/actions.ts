import { ActionTree } from 'vuex'
// APIは別の話なので今回は固定値としておきます
// import axios from 'axios'
import { ProfileState, User } from './types'
import { RootState } from '../types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
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
    commit('profileLoaded', payload)
  },
}
