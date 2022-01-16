# Next.js Typerite Boilerplate


[![CI](https://github.com/curtiscde/nextjs-typerite-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/curtiscde/nextjs-typerite-boilerplate/actions/workflows/ci.yml) [![codecov](https://codecov.io/gh/curtiscde/nextjs-typerite-boilerplate/branch/main/graph/badge.svg?token=GHHI3NUE8N)](https://codecov.io/gh/curtiscde/nextjs-typerite-boilerplate) [![Netlify Status](https://api.netlify.com/api/v1/badges/6dcb608c-3143-4cce-8da0-6f345ee210f0/deploy-status)](https://app.netlify.com/sites/nextjs-typerite-boilerplate/deploys)

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
| tags        |          | Array of tags (ex: `['foo', 'bar']`) |
| image       |          | Thumbnail image(s) (ex.`/images/foo.png` or `['/images/foo.png', '/images/bar.png']`)                      |
| bannerImage |          | Banner image(s) displayed on post page (ex.`/images/foo.png` or `['/images/foo.png', '/images/bar.png']`)   |
| audio        |          | Audio embed URL for displaying audio on post page |
| video        |          | Video embed URL for displaying video on post list and page |

### Examples

 - [Image & Banner Image](https://github.com/curtiscde/nextjs-typerite-boilerplate/blob/main/posts/01-just-a-standard-format-post.md)
 - [Image Carousel](https://github.com/curtiscde/nextjs-typerite-boilerplate/blob/main/posts/12-the-best-tropical-leaves-images.md)
 - [Audio](https://github.com/curtiscde/nextjs-typerite-boilerplate/blob/main/posts/07-what-your-music-preference-says-about-you-and-your-personality.md)
 - [Video](https://github.com/curtiscde/nextjs-typerite-boilerplate/blob/main/posts/09-no-sugar-oatmeal-cookies.md)

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
Read More [LICENSE](https://github.com/curtiscde/nextjs-typerite-boilerplate/blob/main/LICENSE)