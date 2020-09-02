import axios, {
  Method,
  AxiosResponse,
  AxiosRequestConfig,
  CancelToken,
} from 'axios'
import {
  call,
  cancelled,
  CallEffect,
  CancelledEffect,
} from 'redux-saga/effects'
import _ from 'lodash'

type ApiRequestConfig =
  | [string]
  | [string, { params?: any; data?: any; method: Method }]

function makeAxiosConfig(
  apiConfig: ApiRequestConfig,
  cancelToken: CancelToken
): AxiosRequestConfig {
  return {
    url: apiConfig[0],
    cancelToken,
    ..._.defaults(apiConfig[1], { method: 'GET' }),
  }
}

/**
 * Helper saga to provide cancellable Api calls using standard client
 * @param options request options
 * @example yield call(apicall, ['http://localhost:3000/api/test-endpoint', { method: 'GET' }])
 */
export function* apicall(
  options: ApiRequestConfig
): Generator<CallEffect<AxiosResponse<unknown>> | CancelledEffect> {
  const ct = axios.CancelToken.source()
  const axiosConfig = makeAxiosConfig(options, ct.token)

  try {
    return yield call(api, axiosConfig)
  } finally {
    if (yield cancelled()) {
      // eslint-disable-next-line no-console
      console.info(
        `Cancelling request: ${axiosConfig.method} ${axiosConfig.url}`
      )
      ct.cancel()
    }
  }
}

export async function api<T>(
  options: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  // TODO: add shared stuff like authorization
  return await axios.request<T>(options)
}
