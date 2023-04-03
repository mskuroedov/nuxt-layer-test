import {IUser} from "../types/IUser";

export const useAuth = () => {
  const AUTH_STORE_KEY = 'storedToken'
  const CONFIG = useRuntimeConfig()
  const useToken = () => useState<string | null>('auth_token', () => localStorage.getItem(AUTH_STORE_KEY))
  const setToken = (newToken: string | null) => {
    const authToken = useToken()
    authToken.value = newToken
    if (newToken) {
      localStorage.setItem(AUTH_STORE_KEY, newToken)
    } else {
      localStorage.removeItem(AUTH_STORE_KEY)
    }
  }
  const authLoading = () => useState('auth_loading', () => true)
  const setIsAuthLoading = (value: boolean) => {
    const loading = authLoading()
    loading.value = value
  }

  const {clearUser, setUser, fetchUserModules, userVerified} = useUser();
  const createUser = async () => {
    try {
      const {data: user} = await useFetchAPI('user', {
        method: 'POST',
        headers: {
          'X-TOKEN': CONFIG.public.APP_NEW_USER_TOKEN,
        }
      })
      if (user.value) {
        setToken((user.value as unknown as IUser).auth_key)
        setUser((user.value as unknown as IUser))
      }
    } catch (err) {
      console.error(err)
    }
  }
  const fetchUser = async () => {
    try {
      const {data: user} = await useFetchAPI<IUser>('user')

      setUser(user as unknown as IUser)
      if (userVerified.value) {
        await fetchUserModules()
      }
    } catch (err) {
      console.log(err)
    }
  }
  const logout = async () => {
    try {
      await useFetchAPI('user/logout', {method: 'GET'})
      clearUser()
      setToken(null)
      initAuth()
      // window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }
  const initAuth = async () => {
    setIsAuthLoading(true)
    try {
      const token = useToken();
      if (token.value) {
        await fetchUser()
      } else {
        await createUser()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsAuthLoading(false)
    }
  }

  return {
    useToken,
    authLoading,
    initAuth,
    logout
  }
}
