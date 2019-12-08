function getPrice() {
    var price = Number(document.getElementById("price").value);
    var comission = Number(document.getElementById("comission").value) / 100;
    var traded = Number (document.getElementById("traded").value);
    
  
    var totalValue = price - (price * comission)
    document.getElementById("total").value = totalValue.toFixed(2);

    var netincome = totalValue - traded
    document.getElementById("netincome").value = netincome.toFixed(2);

    var percent = ((netincome / traded) * 100) 
    document.getElementById("percent").value = percent.toFixed(2);
  }
