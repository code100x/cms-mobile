import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserStoreModel } from "./UserStore"
import { ToastModel } from "./ToastStore"
import { ToastPreset } from "app/constants"

/** A RootStore model. */
export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserStoreModel, {
    authToken: undefined,
    email: "",
    password: "",
  }),
  // TODO: Check how to remove the default values from here and move it in a separate file maybe
  toastStore: types.optional(ToastModel, {
    message: null,
    preset: ToastPreset.Success,
    showToast: false,
  }),
})
/** The RootStore instance. */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/** The data of a RootStore. */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
