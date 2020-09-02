import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

type PublicRuntimeConfig = {
  localeSubpaths: Record<string, string>
  testValue1: string
  testValue2: string
}

type ServerRuntimeConfig = {
  localeSubpaths: Record<string, string>
  testServerValue1: string
  testServerValue2: string
}

export function publicConfig(): PublicRuntimeConfig {
  return publicRuntimeConfig
}

export function serverConfig(): ServerRuntimeConfig {
  return serverRuntimeConfig
}
