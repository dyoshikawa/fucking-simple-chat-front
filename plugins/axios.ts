import { AxiosRequestConfig } from 'axios'
import { apiUrl } from '~/config'

export default function({ $axios, redirect }) {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.url = apiUrl
    config.headers = {
      Accept: 'application/json',
    }
  })
}
