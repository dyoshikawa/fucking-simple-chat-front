export interface Chat {
  name: string
  content: string
  createdAt: Date
}

export interface ChatsState {
  chats: Chat[]
}
