self.addEventListener('push', event => {
  let message = { title: 'Quadro reminder', body: 'You have something planned.' }
  try { message = { ...message, ...event.data.json() } } catch {}
  event.waitUntil(self.registration.showNotification(message.title, {
    body: message.body,
    icon: '/quadro/icon-192.png',
    badge: '/quadro/icon-192.png',
    tag: message.taskId ? `quadro-${message.taskId}` : 'quadro-reminder',
    data: { url: '/quadro/' },
  }))
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windows => {
    const existing = windows.find(client => new URL(client.url).pathname.startsWith('/quadro/'))
    return existing ? existing.focus() : clients.openWindow('/quadro/')
  }))
})
