import { app, shell, BrowserWindow, ipcMain } from 'electron'
import fs from 'node:fs'

export function installTheme() {
    console.log(fs);
}
export function registerHostEnv() {
    ipcMain.handle("installTheme", installTheme)
}
  