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
