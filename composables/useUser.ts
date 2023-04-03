import {IUser} from "../types/IUser";
import useUserNotifications from "./useUserNotifications";
import useUserDocs from "./useUserDocs";

export function useUser() {
  const userState = () => useState<IUser | null>('user')
  const {fetchDocs, clearDocs} = useUserDocs()
  const {fetchNotifications, clearNotifications} = useUserNotifications()
  const setUser = (data: IUser) => {
    const user = userState();
    user.value = data
  }
  const clearUser = () => {
    const user = userState();
    user.value = null
    clearDocs()
    clearNotifications()

  }
  const sendVerifyEmail = (email: string) => {
    return useFetchAPI('user/send-email-verification', {
      method: 'GET',
      query: {email}
    })
  }
  const userVerified = computed(() => {
    return userState().value?.email_confirmed
  })
  const userHasNoEmail = computed(() => {
    return false
  })
  const fetchUserModules = async () => {
    return Promise.all([fetchDocs(), fetchNotifications()])
  }
  const updateUser = async (body: Partial<IUser>) => {
    try {
      const {data: user} = await useFetchAPI('user', {method: 'PATCH', body})
      setUser(user as unknown as IUser)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    userState,
    setUser,
    clearUser,
    sendVerifyEmail,
    userHasNoEmail,
    userVerified,
    fetchUserModules,
  }
}
