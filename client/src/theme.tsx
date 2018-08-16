import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { loadTheme, createTheme } from 'office-ui-fabric-react/lib/Styling'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

// todo reconcile these two
export const fabricTheme = {
  themePrimary: '#217346',
  themeLighterAlt: '#f2f9f5',
  themeLighter: '#cee9da',
  themeLight: '#a8d5bc',
  themeTertiary: '#62ab83',
  themeSecondary: '#318456',
  themeDarkAlt: '#1e673f',
  themeDark: '#195735',
  themeDarker: '#134027',
  neutralLighterAlt: '#f8f8f8',
  neutralLighter: '#f4f4f4',
  neutralLight: '#eaeaea',
  neutralQuaternaryAlt: '#dadada',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c8c8',
  neutralTertiary: '#c2c2c2',
  neutralSecondary: '#858585',
  neutralPrimaryAlt: '#4b4b4b',
  neutralPrimary: '#333',
  neutralDark: '#272727',
  black: '#1d1d1d',
  white: '#fff',
  primaryBackground: '#fff',
  primaryText: '#333',
  bodyBackground: '#fff',
  bodyText: '#333',
  disabledBackground: '#f4f4f4',
  disabledText: '#c8c8c8',
}

export const headerTheme = createTheme({
  palette: {
    themePrimary: '#ffffff',
    themeLighterAlt: '#767676',
    themeLighter: '#a6a6a6',
    themeLight: '#c8c8c8',
    themeTertiary: '#d0d0d0',
    themeSecondary: '#dadada',
    themeDarkAlt: '#eaeaea',
    themeDark: '#f4f4f4',
    themeDarker: '#f8f8f8',
    neutralLighterAlt: '#27794c',
    neutralLighter: '#217346' /*'#2c7e51',*/,
    neutralLight: '#35875a',
    neutralQuaternaryAlt: '#3b8d60', // active context menu color for button
    neutralQuaternary: '#409165',
    neutralTertiaryAlt: '#58a47a',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: 'white',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#515151', // '#217346',
  },
})

const theme = {
  accent: '#217346',
  // darkAccent: '#103822',
  darkAccent: '#0D4027',
  bg: '#1e1e1e',
  fg: '#eeeeee',
}

export default theme

export const StyledComponentsThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const setupFabricTheme = () => {
  loadTheme({ palette: fabricTheme })
  initializeIcons()
}