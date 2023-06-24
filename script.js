

let url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

let responseObj;

////////fetching PI not working 429 error...sometimes working in cmd prompt

//fetchig data using fetch .then 
// function getResponseThen(){
//         fetch(url,{mode:"no-cors"})
//             .then(response => response.json())
//             .then(data => {responseObj=data})
//             .then(()=>{console.log(responseObj)});
// }

// getResponseThen();


//async and await
// async function getResponseAsync(){
//     const response=await fetch(url,{mode:"no-cors"});
//     responseObj=await response.json();
//     //console.log(responseObj);
// }



responseObj = [
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 30633,
    "market_cap": 594361886415,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 643029679575,
    "total_volume": 24164734267,
    "high_24h": 31257,
    "low_24h": 30013,
    "price_change_24h": 572.34,
    "price_change_percentage_24h": 1.90393,
    "market_cap_change_24h": 10834757799,
    "market_cap_change_percentage_24h": 1.85677,
    "circulating_supply": 19410612,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -55.65621,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 45051.91858,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:46.733Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1888.88,
    "market_cap": 226989119329,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 226989119329,
    "total_volume": 9020873444,
    "high_24h": 1927.17,
    "low_24h": 1869.61,
    "price_change_24h": 3.47,
    "price_change_percentage_24h": 0.18405,
    "market_cap_change_24h": 824323523,
    "market_cap_change_percentage_24h": 0.36448,
    "circulating_supply": 120193579.04426,
    "total_supply": 120193579.04426,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -61.29613,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 435966.46138,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 81.44389031124457,
      "currency": "btc",
      "percentage": 8144.389031124458
    },
    "last_updated": "2023-06-24T10:05:42.546Z"
  },
  {
    "id": "tether",
    "symbol": "usdt",
    "name": "Tether",
    "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    "current_price": 1,
    "market_cap": 83184446436,
    "market_cap_rank": 3,
    "fully_diluted_valuation": 83184446436,
    "total_volume": 27828251097,
    "high_24h": 1.004,
    "low_24h": 0.992937,
    "price_change_24h": 0.00211371,
    "price_change_percentage_24h": 0.21179,
    "market_cap_change_24h": 136239071,
    "market_cap_change_percentage_24h": 0.16405,
    "circulating_supply": 83202018338.0169,
    "total_supply": 83202018338.0169,
    "max_supply": null,
    "ath": 1.32,
    "ath_change_percentage": -24.43562,
    "ath_date": "2018-07-24T00:00:00.000Z",
    "atl": 0.572521,
    "atl_change_percentage": 74.62919,
    "atl_date": "2015-03-02T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:00.270Z"
  },
  {
    "id": "binancecoin",
    "symbol": "bnb",
    "name": "BNB",
    "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    "current_price": 244.78,
    "market_cap": 38139105466,
    "market_cap_rank": 4,
    "fully_diluted_valuation": 48941718268,
    "total_volume": 686867648,
    "high_24h": 248.81,
    "low_24h": 241.54,
    "price_change_24h": 1.52,
    "price_change_percentage_24h": 0.62283,
    "market_cap_change_24h": 218880819,
    "market_cap_change_percentage_24h": 0.57721,
    "circulating_supply": 155855196,
    "total_supply": 157900174,
    "max_supply": 200000000,
    "ath": 686.31,
    "ath_change_percentage": -64.34429,
    "ath_date": "2021-05-10T07:24:17.097Z",
    "atl": 0.0398177,
    "atl_change_percentage": 614469.6188,
    "atl_date": "2017-10-19T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:46.111Z"
  },
  {
    "id": "usd-coin",
    "symbol": "usdc",
    "name": "USD Coin",
    "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
    "current_price": 0.999717,
    "market_cap": 28432590559,
    "market_cap_rank": 5,
    "fully_diluted_valuation": 28432590559,
    "total_volume": 5131613609,
    "high_24h": 1.003,
    "low_24h": 0.993232,
    "price_change_24h": 0.0020576,
    "price_change_percentage_24h": 0.20624,
    "market_cap_change_24h": 35058245,
    "market_cap_change_percentage_24h": 0.12346,
    "circulating_supply": 28452893874.5619,
    "total_supply": 28452893874.5619,
    "max_supply": null,
    "ath": 1.17,
    "ath_change_percentage": -14.76309,
    "ath_date": "2019-05-08T00:40:28.300Z",
    "atl": 0.877647,
    "atl_change_percentage": 13.89305,
    "atl_date": "2023-03-11T08:02:13.981Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:47.056Z"
  },
  {
    "id": "ripple",
    "symbol": "xrp",
    "name": "XRP",
    "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    "current_price": 0.491458,
    "market_cap": 25670655693,
    "market_cap_rank": 6,
    "fully_diluted_valuation": 49126408311,
    "total_volume": 775871736,
    "high_24h": 0.502315,
    "low_24h": 0.485595,
    "price_change_24h": -0.0009686674076963,
    "price_change_percentage_24h": -0.19671,
    "market_cap_change_24h": 17894371,
    "market_cap_change_percentage_24h": 0.06976,
    "circulating_supply": 52254289650,
    "total_supply": 99988655562,
    "max_supply": 100000000000,
    "ath": 3.4,
    "ath_change_percentage": -85.54652,
    "ath_date": "2018-01-07T00:00:00.000Z",
    "atl": 0.00268621,
    "atl_change_percentage": 18185.7934,
    "atl_date": "2014-05-22T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:49.784Z"
  },
  {
    "id": "staked-ether",
    "symbol": "steth",
    "name": "Lido Staked Ether",
    "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
    "current_price": 1887.77,
    "market_cap": 13948134809,
    "market_cap_rank": 7,
    "fully_diluted_valuation": 13948134809,
    "total_volume": 9223509,
    "high_24h": 1923.54,
    "low_24h": 1862.46,
    "price_change_24h": 8.51,
    "price_change_percentage_24h": 0.45259,
    "market_cap_change_24h": 88161358,
    "market_cap_change_percentage_24h": 0.63609,
    "circulating_supply": 7389003.10872114,
    "total_supply": 7389003.10872114,
    "max_supply": 7389003.10872114,
    "ath": 4829.57,
    "ath_change_percentage": -60.91394,
    "ath_date": "2021-11-10T14:40:47.256Z",
    "atl": 482.9,
    "atl_change_percentage": 290.90987,
    "atl_date": "2020-12-22T04:08:21.854Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:50.315Z"
  },
  {
    "id": "cardano",
    "symbol": "ada",
    "name": "Cardano",
    "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    "current_price": 0.295404,
    "market_cap": 10345940161,
    "market_cap_rank": 8,
    "fully_diluted_valuation": 13284834656,
    "total_volume": 217548323,
    "high_24h": 0.301999,
    "low_24h": 0.287469,
    "price_change_24h": 0.00087071,
    "price_change_percentage_24h": 0.29562,
    "market_cap_change_24h": 17108887,
    "market_cap_change_percentage_24h": 0.16564,
    "circulating_supply": 35045020830.3234,
    "total_supply": 45000000000,
    "max_supply": 45000000000,
    "ath": 3.09,
    "ath_change_percentage": -90.43909,
    "ath_date": "2021-09-02T06:00:10.474Z",
    "atl": 0.01925275,
    "atl_change_percentage": 1432.95967,
    "atl_date": "2020-03-13T02:22:55.044Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:48.903Z"
  },
  {
    "id": "dogecoin",
    "symbol": "doge",
    "name": "Dogecoin",
    "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    "current_price": 0.067798,
    "market_cap": 9484652965,
    "market_cap_rank": 9,
    "fully_diluted_valuation": 9484634660,
    "total_volume": 395539341,
    "high_24h": 0.06962,
    "low_24h": 0.065557,
    "price_change_24h": 0.00161839,
    "price_change_percentage_24h": 2.44544,
    "market_cap_change_24h": 213330867,
    "market_cap_change_percentage_24h": 2.30098,
    "circulating_supply": 139897526383.705,
    "total_supply": 139897256383.705,
    "max_supply": null,
    "ath": 0.731578,
    "ath_change_percentage": -90.73508,
    "ath_date": "2021-05-08T05:08:23.458Z",
    "atl": 0.0000869,
    "atl_change_percentage": 77894.48801,
    "atl_date": "2015-05-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:47.728Z"
  },
  {
    "id": "solana",
    "symbol": "sol",
    "name": "Solana",
    "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    "current_price": 17.26,
    "market_cap": 6900672547,
    "market_cap_rank": 10,
    "fully_diluted_valuation": 9507760052,
    "total_volume": 362044313,
    "high_24h": 17.52,
    "low_24h": 16.25,
    "price_change_24h": 0.565722,
    "price_change_percentage_24h": 3.38925,
    "market_cap_change_24h": 224114271,
    "market_cap_change_percentage_24h": 3.35673,
    "circulating_supply": 399788713.810163,
    "total_supply": 550829667.179597,
    "max_supply": null,
    "ath": 259.96,
    "ath_change_percentage": -93.36023,
    "ath_date": "2021-11-06T21:54:35.825Z",
    "atl": 0.500801,
    "atl_change_percentage": 3346.61586,
    "atl_date": "2020-05-11T19:35:23.449Z",
    "roi": null,
    "last_updated": "2023-06-24T10:05:43.668Z"
  }
]

//Converting data from JSON to table
function convert(){

    // fetching data with async/await
    // getResponseAsync();

    let tableContainer=document.getElementById("tableContainer");

    let table=document.createElement("table");

    table.id="table";

    responseObj.forEach(element => {
        addToTable(element,table,tableContainer);
    });
}


//function to add data into a table
function addToTable(element,table,tableContainer){

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");

//first row first column
    let imgCont=document.createElement("div");
    imgCont.className="imgCont";

    let image=document.createElement("div");
    image.className="image";
    let img=document.createElement("img");
    img.src=element["image"];
    img.style.width="30px";
    image.appendChild(img);

    let imgText=document.createElement("div");
    imgText.className="imgText";
    let name=element["name"];
    imgText.innerHTML=name;

    imgCont.appendChild(image);
    imgCont.appendChild(imgText);

    td1.appendChild(imgCont);////////////first row first column
    

    let symbol=element["symbol"];

    let currentPrice=element["current_price"];

    let fullyDilutedValuation=element["fully_diluted_valuation"];

    let priceChange24H=element["price_change_percentage_24h"];

    let marketCap=element["market_cap"];

    td2.innerText=symbol;
    td2.className="symbol";

    td3.innerText="$"+currentPrice;

    td4.innerText="$"+fullyDilutedValuation;

    if(priceChange24H>0){
        td5.style.color="green";
    }
    else if(priceChange24H<0){
        td5.style.color="red";
    }

    td5.innerText=priceChange24H+"%";

    td6.innerText="Mkt Cap : $"+marketCap;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    table.appendChild(tr);

    tableContainer.appendChild(table);
}

//Sorting function to sort the table based on percentage
function sortByPercentage(){
    responseObj.sort((a,b)=>a["price_change_percentage_24h"]-b["price_change_percentage_24h"]);
    let table=document.getElementById("table");
    table.remove();
    convert();
}

//Sorting function to sort the table based on Market Cap
function sortMrktCap(){
    responseObj.sort((a,b)=>a["market_cap"]-b["market_cap"]);
    let table=document.getElementById("table");
    table.remove();
    convert();
}

//Search function to search for values
function search(){

    let input=document.getElementById("searcher").value.toLowerCase();

    let textNamesInRows=document.getElementsByClassName("imgText");

    let textInSymbols=document.getElementsByClassName("symbol");

    let tableRows=document.getElementById("table").rows;

    let lenn=textNamesInRows.length;

    for(let i=0;i<lenn;i++){
        let rowNameText=textNamesInRows[i].innerText.toLowerCase();
        let rowSymbolText=textInSymbols[i].innerText.toLowerCase();
        if(rowNameText.indexOf(input)>-1 || rowSymbolText.indexOf(input)>-1){
            tableRows[i].style.display="";
        }
        else{
            tableRows[i].style.display="none";
        }
    }
}