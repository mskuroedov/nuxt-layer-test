export const getMailServiceDomain = (email: string) => {
  const domain = email.split('@')[1]
  switch (domain) {
    case 'gmail.com':
      return {
        url: 'https://mail.google.com/',
        domain: 'gmail.com'
      }
    case 'yandex.ru':
      return {
        url: 'https://mail.yandex.ru/',
        domain: 'yandex.ru'
      }
    case 'mail.ru':
    case 'list.ru':
    case 'inbox.ru':
    case 'bk.ru':
      return {
        url: 'https://e.mail.ru/',
        domain: 'mail.ru'
      }
    case 'icloud.com':
    case 'mac.com':
    case 'me.com':
      return {
        url: 'https://www.icloud.com/mail/',
        domain: 'icloud.com'
      }
    default:
      return {
        url: `https://${domain}/`,
        domain: domain
      }
  }
}
