import {INotification} from "../types/IUser";

export default () => {
  const useNotifications = () => useState<INotification[]>('user_notifications')
  const useNotificationsLoading = () => useState<boolean>('notifications_loading', () => false)
  const notificationsCount = computed(() => {
    const notifications = useNotifications()
    return notifications.value?.length || 0
  })
  const notificationsLoading = computed(() => {
    const loading = useNotificationsLoading()
    return loading.value
  })
  const setNotifications = (data: INotification[]) => {
    const notifications = useNotifications()
    notifications.value = data
  }
  const clearNotifications = () => {
    const notifications = useNotifications()
    notifications.value = []
  }
  const fetchNotifications = async () => {
    try {
      useNotificationsLoading().value = true
      const {data: notifications_data} = await useFetchAPI<INotification[]>('user/notifications')
      //@ts-ignore
      setNotifications(notifications_data)
    } catch (err) {
      console.error(err)
    } finally {
      useNotificationsLoading().value = false
    }

  }
  return {
    useNotifications,
    setNotifications,
    clearNotifications,
    fetchNotifications,
    notificationsCount,
    notificationsLoading,
  }
}
