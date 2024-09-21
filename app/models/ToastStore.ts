import { ToastPreset } from "app/constants"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const ToastModel = types
  .model("Toast")
  .props({
    message: types.maybeNull(types.string),
    preset: types.enumeration([ToastPreset.Error, ToastPreset.Warning, ToastPreset.Success]),
    showToast: types.boolean,
  })
  // .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    popToast(message = "", preset = ToastPreset.Success) {
      self.message = message
      self.preset = preset
      self.showToast = true
    },
    onClose() {
      self.message = null
      self.showToast = false
    },
  }))

export interface ToastStoreType extends Instance<typeof ToastModel> {}
export interface ToastSnapshotOut extends SnapshotOut<typeof ToastModel> {}
export interface ToastSnapshotIn extends SnapshotIn<typeof ToastModel> {}
