# next-store

A proof of concept using a NextJS seed ready to be deployed with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/okbel/next-store)

### Features

- Lazy Image Loading x2
- CSS Purged
- Green on Lighthouse

![Image of Lighthouse](https://res.cloudinary.com/vercel/image/upload/v1592422143/lighthouse_agjpn1.png)

### Tech Stack

- Nextjs
- PurgeCSS
- TailwindCSS
- PostCSS
  - Allows nesting and imports.

## Up and Running

- Develop running `npm run dev` - [http://localhost:3000](http://localhost:3000)

- Build `npm run build`

- Deploy `vercel --prod`

## Demo

[https://next-store-pi.vercel.app](https://next-store-pi.vercel.app)

## Data Fetching

Using SWR:

```js
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

## Examples and Resources

- NextJS with Prismic [https://github.com/vercel/next.js/tree/canary/examples/cms-prismic](https://github.com/vercel/next.js/tree/canary/examples/cms-prismic)
- Data fetching with [SWR](https://swr.now.sh/)
- [Nextjs Documentation](https://nextjs.org/docs/getting-started)
- Incremental Static Generation [https://static-tweet.now.sh/](https://static-tweet.now.sh/)
