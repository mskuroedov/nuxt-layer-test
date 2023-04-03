type useFetchType = typeof useFetch
export const useFetchAPI: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()
  const {useToken} = useAuth()

  options.baseURL = config.public.API_BASE_URL
  options.server = false
  if (useToken().value) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${useToken().value}`
      }
    }
  }
  //
  return useFetch(path, options)
}
