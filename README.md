# simple-sample-gcp-app

small sample publishing plain simple node app at google appengine

## how to run this

```bash
npm install
npm run dev
```

service will say hello at port 3000


## how to deploy at GCP

- make account at [google cloud](https://console.cloud.google.com/)
- install [gcp SDK](https://cloud.google.com/sdk/docs/install)

run the following command:

```bash
gcloud login
gcloud init
gcloud app deploy
```

## caveats

- must have an `app.yaml` file 
- the `scripts` session in your `package.json` MUST have an `start` script
- connection strings not automatically injected into appengine's env. **heroku and openshift laughing **
- no civilized way to set env variables / secretes into the app, even via web console

## leads

- https://stackoverflow.com/a/60898951/420096
- https://www.npmjs.com/package/dotenv-flow

