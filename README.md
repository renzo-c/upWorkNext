# Dynamic Routing example

This is an example taken from the nextjs repository which shows usage of dynamic routing.
It contains the architecture of the low footprint context we will be using in projects.

This example contains two dynamic pages:

1. `pages/post/[id]/index.js`
   - e.g. matches `/post/my-example` (`/post/:id`)
1. `pages/post/[id]/[comment].js`
   - e.g. matches `/post/my-example/a-comment` (`/post/:id/:comment`)

These routes are automatically matched by the server.
You can use `next/link` as displayed in this example to route to these pages client side.

## Steps to complete

1. Create a local state on the home page that will update with the context
2. Create a textbox to change the first name OR last name globally. New changes should now show on about page as well.
3. On first load of the home page, change the last name.


### Download manually

Download the example:

```bash
Clone or Download -> Download Zip
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Build and run it locally
```bash
yarn build
yarn start
#or if you have set up a now account
now dev
```
