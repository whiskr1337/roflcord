/*
 * Roflcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export const enum IpcEvents {
    OPEN_QUICKCSS = "RoflcordOpenQuickCss",
    GET_QUICK_CSS = "RoflcordGetQuickCss",
    SET_QUICK_CSS = "RoflcordSetQuickCss",
    QUICK_CSS_UPDATE = "RoflcordQuickCssUpdate",

    GET_SETTINGS = "RoflcordGetSettings",
    SET_SETTINGS = "RoflcordSetSettings",

    GET_THEMES_LIST = "RoflcordGetThemesList",
    GET_THEME_DATA = "RoflcordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "RoflcordGetThemeSystemValues",
    UPLOAD_THEME = "RoflcordUploadTheme",
    DELETE_THEME = "RoflcordDeleteTheme",
    THEME_UPDATE = "RoflcordThemeUpdate",

    OPEN_EXTERNAL = "RoflcordOpenExternal",
    OPEN_THEMES_FOLDER = "RoflcordOpenThemesFolder",
    OPEN_SETTINGS_FOLDER = "RoflcordOpenSettingsFolder",

    GET_UPDATES = "RoflcordGetUpdates",
    GET_REPO = "RoflcordGetRepo",
    UPDATE = "RoflcordUpdate",
    BUILD = "RoflcordBuild",

    OPEN_MONACO_EDITOR = "RoflcordOpenMonacoEditor",

    GET_PLUGIN_IPC_METHOD_MAP = "RoflcordGetPluginIpcMethodMap",

    OPEN_IN_APP__RESOLVE_REDIRECT = "RoflcordOIAResolveRedirect",
    VOICE_MESSAGES_READ_RECORDING = "RoflcordVMReadRecording",

    CSP_IS_DOMAIN_ALLOWED = "RoflcordCspIsDomainAllowed",
    CSP_REMOVE_OVERRIDE = "RoflcordCspRemoveOverride",
    CSP_REQUEST_ADD_OVERRIDE = "RoflcordCspRequestAddOverride",
}
