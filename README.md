# CC Huntin Fool

> Finds Credit Cards based on user preferences

This is an embeddable application that allows users to find Credit Cards based on their credit scores and goals

## Getting Started

Quickest way is to see the latest deployed code in [Codesandbox](https://codesandbox.io/s/github/Kphillycat/cc_huntin_fool) 👉https://codesandbox.io/s/github/Kphillycat/cc_huntin_fool

Locally you can run the application in development mode via the `npm run dev` command and going to the http://localhost:3000 in tue browser.

![demo](./assets/demo.gif)

## Instructions

This application can be easily embedded into any site via an iframe

```
    <iframe src="https://mystifying-easley-1dad66.netlify.app" frameborder="0">
```

## Prerequisites

Node & NPM - https://nodejs.org/en/

## Installing

Install the dependencies

```
npm install
```

## Design & Architecture

This application utilzes Vuex as the application store for the cards from the API. On initial load of the server the application will fetch all the cards, this makes it quicker to then filter the cards based on the user's choices on the client.

We also have componentized some of the isolated parts of the application like the Form and Card. This enables reusability and eases testing.

We chose to use Nuxt for the framework because it was a quick and easy way to take advantage of the best practices and common patterns in VueJS. It also had server side rendering support out of the box without the hassle of setting it up manually.

This application is written in Typescript to give some confidence around the stability and type safety around the code. This can eliminate the need to do a traditional category of unit testing in Javascript around type checking.

## Deployment

Can be deployed to any static site deployment tool (ex: [Netlify](https://www.netlify.com/) )

Build command via `npm run build`

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Built With

- [Nuxt.js](https://nuxtjs.org)
- [Typescript](https://www.typescriptlang.org/)

## Tests

```
$ npm test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- **Keith Williams** - [Kphillycat](https://github.com/Kphillycat)
