const fetch = require('node-fetch') ;

module.exports = {
    /**
     * Fetch Google sheet Data by SQL
     * @param {Object} objData
     * @param {String} objData.gid Google sheet tab id
     * @param {String} objData.type fetch type: json, html
     * @param {String} objData.query SQL statement
     * @param {String} objData.key Google sheet key
     */
    querySheetData : function(objData)
    {
        var params = {
            gid : objData.gid,
            tqx : 'out:' + objData.type,
            tq : encodeURIComponent(objData.query)
        } ;

        var queryString = Object.keys(params).map((key) => {
            return key + '=' + params[key]
        }).join('&') ;

        var url = `https://docs.google.com/spreadsheets/u/0/d/${objData.key}/gviz/tq?${queryString}` ;

        return queryData(url) ;
    }
}

function queryData(url)
{
    return fetch(url)
    .then(res => res.text())
    .then(resp => {
        let jsonResult = resp.match(/\{.*\}/)[0] ;

        try
        {
            return queryParse(JSON.parse(jsonResult)) ;
        }
        catch(e)
        {
            console.log('Response is not json.') ;
            return jsonResult ;
        }
    }) ;
}

function queryParse(data)
{
    var rows = data.table.rows ;

    var title = data.table.cols.map(col => {
        return (col.label !== '') ? col.label.trim() : col.id ;
    }) ;

    var result = [] ;

    rows.forEach(function(row){
        let temp = {} ;
        row.c.forEach(function(value, index){
            if (value === null) return ;
            temp[title[index]] = (value.hasOwnProperty('f')) ? value.f : value.v ;
        }) ;
        result.push(temp) ;
    })

    return result ;
}