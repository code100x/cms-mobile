import { RequestTransform } from "apisauce"
import { api } from "app/services/api"
import { loadString, remove, saveString } from "app/utils/storage"

import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"

export const UserStoreModel = types
  .model("UserStoreModel")
  .props({
    authToken: types.maybe(types.string),
    email: types.string,
    password: types.string,
    username: types.string,
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationEmail() {
      if (store.email.length === 0) return "can't be blank"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.email))
        return "please enter a valid email address"
      return ""
    },
    get validationPassword() {
      if (store.password.length === 0) return "can't be blank"
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },

    setEmail(value: string) {
      store.email = value.replace(/ /g, "")
    },

    setPassword(value: string) {
      store.password = value
    },

    setUsername(value: string) {
      store.username = value
    },

    login: flow(function* () {
      try {
        const { email, password } = store

        if (__DEV__) {
          store.authToken = "token"
          saveString("token", "token")
          return
        }

        api.apisauce.addRequestTransform((request: Parameters<RequestTransform>[0]) => {
          if (request.url?.includes("/signin")) {
            request.headers = request.headers ?? {}
            // # TODO: Setup react-native-config
            request.headers["Auth-Key"] = process.env.LOGIN_AUTH_SECRET || "abcd"
          }
        })

        const payload = { email, password }

        const response = yield api.post("/signin", payload)

        if (response.ok) {
          const token = response.data?.data?.token
          const username = response.data?.data?.name
          // TODO: Do we need a check here for the token?
          store.authToken = token
          store.username = username
          saveString("token", token)
          saveString("username", username)
        } else {
          throw new Error(response.data)
        }
      } catch (err) {
        console.error("Failed to login", err)
      }
    }),

    logout() {
      remove("token")
      store.authToken = undefined
      store.email = ""
      store.password = ""
    },
  }))
  .actions((self) => ({
    // TODO: This will cause the login screen to be visible on app load, fix this by moving it to the root navigator and add a loader
    async afterCreate() {
      const token = await loadString("token")
      const username = await loadString("username")
      if (token && username) {
        self.setAuthToken(token)
        self.setUsername(username)
      }
    },
  }))

export interface UserStore extends Instance<typeof UserStoreModel> {}
export interface UserStoreSnapshot extends SnapshotOut<typeof UserStoreModel> {}
