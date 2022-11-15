# Input File Structure

[@screaming/twitter-scraper](../index.md) receives its parameters via a JSON file. In order to function properly, this JSON file requires specific keys and specific value types, as detailed below:

## Structure

```jsonc
{
  // twitter API bearer token
  "token": "",

  // list of terms that tweets should contain
  "terms": [],

  // list of terms that tweets should NOT contain
  // (default: [])
  "excludedTerms": [],

  // if retweets should be included
  // (default: true)
  "includeRetweets": true or false,

  // the ISO 639-1 language code for the language tweets should be in
  // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // (default: "en")
  "lang": "",

  // limits the application to making 1 API request
  // (default: false)
  "debugMode": true or false
}
```

## Disjuctive / Conjunctive Terms

By default, each item in the `terms` array will be searched **disjuctively** (i.e. tweets including `term 1` OR `term 2` OR `term 3`).

To search for tweets including conjunctive terms (i.e. tweets including `term 1` AND `term 2`), simply put them in the same string, separated by a space (e.g. `"term1 term2"`).

## Example

```jsonc
{
  "token": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGH",
  "terms": ["football", "rugby", "tennis", "water polo"],
  "excludedTerms": ["soccer"],
  "includeRetweets": true,
  "lang": "en",
  "debugMode": false
}
```
