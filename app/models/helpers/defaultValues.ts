import { ToastPreset } from "app/constants"

export const userStoreDefaults = {
  authToken: undefined,
  email: "",
  password: "",
  username: "",
}

export const toastStoreDefaults = {
  message: null,
  preset: ToastPreset.Success,
  showToast: false,
}

