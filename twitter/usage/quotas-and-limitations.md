# Quotas & limitations

We have the following limits/quota to abide by:

1. This tool only scrapes tweets from **the last 7 Days**
2. Scraped tweets are throttled to a limit of **15,000 tweets per 15 minute interval**
3. There's a quota per month (on the free tier),
   so we can only scrape **1,500 tweets per month**

:::TIP
This quota seems to be slow at updating, so you can try to push through scrapes as quickly as possible before it updates

There's no consequence for exceeding the quota, but you will be blocked from further scraping when it is maxed out
:::

## Managaing Quotas & Api

We have a DesignDev twitter developer account; login info stored on [zoho](https://vault.zoho.com).

Log into the [Developer Portal Dashboard](https://developer.twitter.com/en/portal/dashboard) to monitor quota usage and API keys.

From here you can see:

- quota limits
- number of tweets pulled so far this month/period
- date when usage quota will reset
