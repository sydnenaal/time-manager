import { createStore, createEvent } from 'effector'

export interface IUserData {
    login?: string
    email?: string
    fullName?: string
}

export interface IAuth {
    userData: IUserData
    accessToken: string
}

export const $users = createStore<IAuth>({
    userData: {},
    accessToken: null,
})

export const updateAuth = createEvent<IAuth>()

const updateAuthStore = (state: IAuth, data: IAuth): IAuth => data

$users.on(updateAuth, updateAuthStore)
