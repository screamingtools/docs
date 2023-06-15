# @screaming/twitter-scraper

## Introduction

**@screaming/twitter-scraper** is a command-line tool for scraping twitter for tweets matching search criteria.

:::warning
This tool is the result of constant hounding from Tom and Ellie who are too lazy to manually scroll through thousands of tweets. As such, features have been mashed on where appropriate.

It is far from complete and can only retrieve tweets up until **7 days before the time of running**.
:::

[View source code.](https://github.com/sf-designdev-packages/twitter-scraper)

## Installation

Install **globally** with your favourite package manager:

```sh
# yarn
yarn global add @screaming/twitter-scraper

# pnpm
pnpm add --global @screaming/twitter-scraper

# npm
npm install --global @screaming/twitter-scraper
```

Scrape tweets:

```sh
twitter-scraper input_file.json
```
