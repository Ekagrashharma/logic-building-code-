const query={
    page: 2,
    limit: 10,
    search: "react"
}

function queryMaker(query){
    return new URLSearchParams(query).toString()
}
const url =queryMaker(query)
console.log(url)