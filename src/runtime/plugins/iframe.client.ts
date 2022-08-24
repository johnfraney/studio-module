import { defineNuxtPlugin, useRouter } from '#imports'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const trustedOrigins = ['http://localhost:3000', 'https://dev-studio.nuxt.com', 'https://studio.nuxt.com']

  window.addEventListener('message', (e) => {
    if (!trustedOrigins.includes(e.origin)) {
      return
    }
    if (e.origin === window.location.origin) {
      return
    }

    if (typeof e.data !== 'string') { return }
    const [action, ...args] = e.data.split(':')

    if (action === 'push') {
      const path = args[0]

      try {
        const resolvedRoute = router.resolve(path)
        if (resolvedRoute) {
          router.push(path)
        }
      } catch (e) {}
    }
  }, false)

  // Ensure window have a parent
  if (window.self !== window.parent) {
    router?.afterEach((to: any) => {
      window.parent?.postMessage(`push_${to.path}`, '*')
    })
  }
})
