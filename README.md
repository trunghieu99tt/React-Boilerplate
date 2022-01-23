## Overview

A simple, ready to go react boilerplate

## Scripts

In the project directory, you can run:

### Install

```bash
$ npm install

or

$ yarn
```

### Run

```bash
$ npm run start

or

$ yarn start

```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Test

```bash
$ npm run test

or

$ yarn test

```

Launches the test runner in the interactive watch mode.\

### Build

```bash
$ npm run build

or

$ yarn build

```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Generate components

```bash
$ npm run generate [ComponentName]

or

$ yarn generate [ComponentName]

```

Generate component in `src` folder using cli

## Docker

You can run the app in the development mode with Docker.

```bash
$ docker build -t [Put_whatever_name_you_want_here] .

$ docker run --rm  -p 3000:80 [Put_whatever_name_you_want_here]
```

## Architecture

- [Project Structure](./docs/project-structure.md)
