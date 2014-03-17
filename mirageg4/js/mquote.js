
function ReplaceNumberWithCommas(number) {
    //Seperates the components of the number
    
    
    var n= (Math.round(number * 100) / 100).toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //Combines the two sections
    return n.join(".");
}

ReplaceNumberWithCommas(1136.6696);


function createQuotation() {
    price = $('input[name="dmodel"]:checked').val();
    paymentterms = $('input[name="paymentterms"]:checked').val();
    downpayment = $('input[name="downpayment"]:checked').val();


    cashout = price * (downpayment / 100);


    switch (paymentterms) {
        case 12:
            rate = 4.91;
            break;
        case 18:
            rate = 7.19;
            break;
        case 24:
            rate = 10.47;
            break;
        case 36:
            rate = 16.48;
            break;
        case 48:
            rate = 22.38;
            break;
        case 60:
            rate = 29.51;
            break;
            case 72:
             rate = 38.51;
            break;
        default:
            rate = 38.51;
    }

    fin = (price - cashout) ;// *(rate/100) ;

   

    monthly = (fin / paymentterms) + ((fin / paymentterms)*(rate/100));

    document.getElementById("rprice").textContent = "Php " + ReplaceNumberWithCommas(price);
    document.getElementById("rterms").textContent = paymentterms+" Months";
    document.getElementById("rdown").textContent = downpayment + "%";
    document.getElementById("rcashout").textContent = "Php " + ReplaceNumberWithCommas(cashout);
    document.getElementById("rmonthly").textContent = "Php " + ReplaceNumberWithCommas(monthly);
}