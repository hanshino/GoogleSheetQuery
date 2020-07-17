const sheetAPI = require('./index') ;

// sheet : https://docs.google.com/spreadsheets/d/1km2vXc7AEPSPeiICyWjqd4vQA6qMOfEl8RODrNjSNEI/edit#gid=0

sheetAPI.querySheetData({
    gid : 0,
    type : 'json',
    key : '1km2vXc7AEPSPeiICyWjqd4vQA6qMOfEl8RODrNjSNEI',
    query : 'SELECT * LABEL A "User", B "Country", C "Gender"'
}).then(res => console.table(res)) ;

sheetAPI.querySheetData({
    gid : 0,
    type : 'json',
    key : '1km2vXc7AEPSPeiICyWjqd4vQA6qMOfEl8RODrNjSNEI',
    query : 'SELECT * WHERE A = "Panda" LABEL A "User", B "Country", C "Gender"'
}).then(res => console.table(res)) ;