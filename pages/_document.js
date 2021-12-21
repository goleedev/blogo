import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/public/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/public/static/favicons/site.webmanifest" />
          <link rel="alternate" type="application/rss+xml" href="/public/feed.xml" />
          <script
            async
            data-ad-client="ca-pub-8380443717444276"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </Head>
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
