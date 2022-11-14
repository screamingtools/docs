# Input File Structure

[@screaming/twitter](./index.md) receives its parameters via a JSON file. In order to function properly, this JSON file requires specific keys and specific value types, as detailed below:

## Structure

```jsonc
{
  // list of terms that tweets should contain
  "terms": [],

  // list of terms that tweets should NOT contain
  // (default: [])
  "excludedTerms": [],

  // if retweets should be included
  // (default: true)
  "includeRetweets": true or false,

  // the ISO 639-1 language code for the language tweets should be in
  // (default: "eu")
  "lang": "",

  // limits the application to making 1 API request
  // (default: false)
  "debugMode": true or false
}
```

## Example

```jsonc
{
  "terms": ["football", "rugby", "tennis"],
  "excludedTerms": ["soccer"],
  "includeRetweets": true,
  "lang": "en",
  "debugMode": true or false
}
```
