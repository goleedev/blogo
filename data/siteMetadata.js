const siteMetadata = {
  title: 'GO Lee Blog',
  author: 'GO Lee',
  headerTitle: 'GO.',
  description: '지식과 생각을 정리합니다.',
  language: 'ko-KR',
  siteUrl: 'https://www.golee.tech',
  siteRepo: 'https://github.com/goleedev/blogo',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'golee.dev@gmail.com',
  github: 'https://github.com/goleedev',
  linkedin: 'https://www.linkedin.com/in/goleedev',
  locale: 'ko-KR',
  comment: {
    provider: 'utterances',
    utterancesConfig: {
      repo: 'goleedev/blog-comment',
      issueTerm: 'title',
      label: 'Comment 💬',
      theme: 'github-light',
      darkTheme: 'github-dark',
    },
  },
}

module.exports = siteMetadata
