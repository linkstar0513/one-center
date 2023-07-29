import { ElectronAPI } from '@electron-toolkit/preload'
import { OneCenterApi } from "./index"

declare global {
  interface Window {
    electron: ElectronAPI
    api: OneCenterApi
  }
}
