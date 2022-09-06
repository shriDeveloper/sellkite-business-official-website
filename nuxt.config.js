import theme from '@jsilva-pt/nuxt-content-theme-blog'
import { footerLinks } from './blog.settings'

const baseUrl = 'https://shrideveloper.github.io'

const publicRuntimeConfig = {
  baseUrl: 'https://shrideveloper.github.io',

  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',

  githubOwner: 'shrideveloper',
  githubRepository: 'sellkite-official',
  githubMainBranch: 'master',

  footerLinks,
}

export default theme({
  feedOptions: {
    title: 'Unlimited Digital Downloads For Shopify',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: 'Unlimited Digital Downloads For Shopify',
    },
    meta: {
      author: 'shriDeveloper',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US'),
      },
    },
  },
})
