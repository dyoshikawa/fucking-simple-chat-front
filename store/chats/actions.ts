import { ActionTree } from 'vuex'
import { ChatsState, Chat } from './types'
import { RootState } from '../types'
import { AxiosResponse } from 'axios'

export const actions: ActionTree<ChatsState, RootState> = {
  async fetchChats({ commit }): Promise<any> {
    const { data } = (await this.$axios.get('', {
      headers: {
        Accept: 'application/json',
      },
    })) as AxiosResponse<any>

    const payload: Chat[] = data.map(d => {
      return {
        name: d.name,
        content: d.content,
        createdAt: d.createdAt,
      }
    })

    commit('setChats', payload)
  },
}
