# Outputs

## Command Line Outputs

scraping is run in `batches`.

After each batch has run, the command line will output the number of retrieved tweets in that `batch` (max 110), then a tallied total in brackets.
<br>
**Ordinarily, the total is what you would be interested in.**

Once the scrape is concluded, the command line will output
<br>
`[🐸/twitter-scraper]: Search completed.`
<br>
`[🐸/twitter-scraper]: Terminating.`

:::warning
If console outputs `[🐸/tscrape]: Error 404 - No tweets found.` the [quota](https://sf-designdev-packages.github.io/twitter/usage/quotas-and-limitations.html) has likely been maxed out
:::

## File Outputs

All the scraped tweets will be out put in a JSON file, named `tweets-[id].json`
<br>E.g tweets-1686668275417.json

Each tweet object will contain:

1. The date/time of the tweet
2. Tweet edit history ids
3. The tweet id,
4. the content/text of the tweet

**E.g**

```javascript
{
"created_at": "2023-06-13T14:54:16.000Z",
"edit_history_tweet_ids": ["1668632887586062342"],
"id": "1668632887586062342",
"text": "@nyxiesnook @bloggernation @LifestyleBlogzz I'm returning all comments on my latest post: https://t.co/CYSxiGzbtb 🧡"
}
```
