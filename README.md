# Next.js Typerite Boilerplate


[![CI](https://github.com/curtistimson/nextjs-typerite-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/curtistimson/nextjs-typerite-boilerplate/actions/workflows/ci.yml) [![codecov](https://codecov.io/gh/curtistimson/nextjs-typerite-boilerplate/branch/main/graph/badge.svg?token=GHHI3NUE8N)](https://codecov.io/gh/curtistimson/nextjs-typerite-boilerplate)

Next.js boilerplate template ported from [StyleShout](https://www.styleshout.com/).

![image](https://user-images.githubusercontent.com/15653985/148108693-546baa8e-2110-45cb-b836-f08358b3bf35.png)


## Demo
https://nextjs-typerite-boilerplate.netlify.app
## Post Front Matter

| Property    | Required | Description                          |
|-------------|----------|--------------------------------------|
| title       | ✅        | Post title                           |
| slug        | ✅        | Url slug (`/post/{slug}`)            |
| date        | ✅        | Post date                            |
| description |          | Post description                     |
| image       |          | Thumbnail image(s) (ex.`/images/foo.png` or `['/images/foo.png', '/images/bar.png']`)                      |
| bannerImage |          | Banner image displayed on post page  |
| tags        |          | Array of tags (ex: `['foo', 'bar']`) |

## Local Development

#### Running locally
```
npm run dev
```

### Production build
```
npm run build
```

### Unit tests
```
npm t
```

### e2e tests
```
npm run cypress
```

## Original Theme Credits
 - [Typerite by StyleShout](https://www.styleshout.com/free-templates/typerite/)

## License
Read More [LICENSE](https://github.com/curtistimson/nextjs-typerite-boilerplate/blob/main/LICENSE)