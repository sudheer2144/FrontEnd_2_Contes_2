

let url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

//using async/await for fetching data

//json data object
let responseObj;


// fetchig data using fetch .then 
function getResponseThen(){
        fetch(url)
            .then(response => response.json())
            .then(data => {responseObj=data})
            .then(()=>{convert()});
}


//async and await
async function getResponseAsync(){
    try{
      const response=await fetch(url);
      responseObj=await response.json();
      // console.log(responseObj);
      convert();
    }
    catch(err){
      console.log(err);
    }
}



//Converting data from JSON to table
function convert(){

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