# Unofficial Google Sheet API

- [Motivation](#motivation)
- [Example](#example)
- [Result](#result)
- [Issue](#issue)

## Motivation

To Fetch Google Sheet Data quickly.

## Example

```js
const sheetAPI = require('google-sheet-query') ;

sheetAPI.querySheetData({
    gid : 0,
    type : 'json',
    key : '1km2vXc7AEPSPeiICyWjqd4vQA6qMOfEl8RODrNjSNEI',
    query : 'SELECT *'
}).then(res => console.table(res)) ;

```

## Result

```
┌─────────┬──────────┬───────────┬──────────┐
│ (index) │    A     │     B     │    C     │
├─────────┼──────────┼───────────┼──────────┤
│    0    │  'User'  │ 'Country' │ 'Gender' │
│    1    │ 'Panda'  │ 'Taiwan'  │  'Male'  │
│    2    │ 'Timmy'  │ 'Taiwan'  │  'Male'  │
│    3    │ 'Miles'  │ 'America' │  'Male'  │
│    4    │ 'Ariana' │ 'America' │ 'Female' │
└─────────┴──────────┴───────────┴──────────┘
```

## Issue

* There is bug when using it without `where` 