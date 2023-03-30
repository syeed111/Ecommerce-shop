

/* <h4 id="Total-Products">00</h4> 
<h4 id="Price">00</h4>
<h4 id="Delivery">00</h4>
<h4 id="Shipping">00</h4>
<h4 id="Total-Price">00</h4>
<h4 id="Tax">00</h4>
<h4 id="T.Price-With-Tax">00</h4> */


var tprice=0;
var dcharge=0;

var tprice_with_dc=0;
var tprice_with_tax=0;
var cnt=0;
function addtocart(pr){
  cnt++;
  dcharge-=dcharge;
  document.getElementById('Total-Products').innerHTML=cnt;
   
  //total price
  tprice=tprice+parseInt(pr);
    var ob1=document.getElementById('Price');
    ob1.innerHTML=tprice;

    //delivery charge
    if(tprice<=500)
    dcharge=5;
    else if(tprice<=1000)
    dcharge=2.5;
    else
    dcharge=1;

    tprice_with_dc=tprice+dcharge;
    var ob2=document.getElementById('Delivery');
    ob2.innerHTML=dcharge;
    //shipping charge
   // var ob3=document.getElementById('Shipping');
   // ob3.innerHTML=dcharge;

  //tprice_with_ship
 // tprice_with_ship=tprice+dcharge*2;
 // document.getElementById('Total-Price').innerHTML=tprice_with_ship;
    //Tax
    var taxx=parseFloat(tprice*(.05)) ;
    var ob4=document.getElementById('Tax');
    ob4.innerHTML=taxx;
    //tprice_with_tax
    tprice_with_tax=tprice_with_dc+taxx;
    var ob5=document.getElementById('T.Price-With-Tax');
    ob5.innerHTML=tprice_with_tax;
  

}
function check_out(){
  
  alert("Your total payment is :"+tprice_with_tax);
 tprice=0;
 dcharge=0;
 ship=0;
 tprice_with_ship=0;
 tprice_with_tax=0;
 cnt=0;

}

