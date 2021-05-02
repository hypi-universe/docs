# Hypi Documentation

See [https://docs.hypi.app/docs](https://docs.hypi.app/docs)

## Building

`npm run build`

## Search

The search is powered by Algolia. A Github action executes the following command after a push to master

`docker run -it -e APPLICATION_ID=OR6SSGNSLB -e API_KEY=<API KEY HERE> -e "CONFIG=$(cat algolia.json | jq -r tostring)" algolia/docsearch-scraper`
