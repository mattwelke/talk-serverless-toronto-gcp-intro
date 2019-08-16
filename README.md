# talk-serverless-toronto-gcp-intro

talk-serverless-toronto-gcp-intro

## Setting up dev environment

1. Create a Google Cloud account.
1. [Install gcloud](https://cloud.google.com/sdk/docs/quickstarts) on your machine.
1. Sign into gcloud with `gcloud auth login`.
1. Create a project for your Google Cloud account.
1. Set your active project in gcloud with `gcloud config set project <project_id>`.

## Deploying

Run `gcloud functions deploy <function_name> --runtime nodejs10 --trigger-http` from within the `function` directory.

Use the name of the function exported (e.g. `module.exports.helloworld = ...`) as the name of the function to deploy. gcloud looks for a function exported with this name in an `index.js` file in the current directory.

## Running web app

The "SPA-style" app is in the `page` directory. From in the `page` directory, use something like the NPM package `http-server` to host the page locally. For example:

Installing (if needed):

```
npm install -g http-server
```

Hosting (`-c-1` prevents caching):

```
http-server -c-1
```
