//Federico Sabato - Desafio 9
//Comienzo de Scripts

const multiply= (x,y) => {return (x*y)}
const cryptos= []; //Creo el Array de las crypto

//-----------------------------------------------
//Name: Nombre
//Acr: Acronimo
//Price: Precio de Mercado
//State: Estado -> 1: En Alza
//                 2: En Baja
class crypto{
    constructor(name,acr,price,state){
        this.name=name;
        this.acronym=acr;
        this.price= price;
        this.state=state;
    }
}
//-----------------------------------------------
//-----------------------------------------------
//Creo los objetos
let btc = new crypto("Bitcoin","$BTC",54128.93,1);
let eth = new crypto("Ethereum","$ETH",4140.45,2);
let ada = new crypto("Cardano","$ADA",1.63,2);
let sol = new crypto("Solana","$SOL",197.81,1);
let shiba = new crypto("Shiba INU","$SHIBA",0.00004,2);
let alpha = new crypto("Alpha Finance Lab","$ALPHA",0.6873,1);
let cake = new crypto("PancakeSwap","$CAKE",12.60,1);
let doge = new crypto("Dogecoin","$DOGE",0.1274,2);
let link = new crypto("Chainlink","$LINK",19.34,1);
let zen = new crypto("Horizen","$ZEN",67.86,2);
//-----------------------------------------------
//-----------------------------------------------
//Obtengo los valores para el HTML
document.getElementById("title1").innerHTML=btc.name; 
document.getElementById("price1").innerHTML=btc.price;
document.getElementById("title2").innerHTML=eth.name;
document.getElementById("price2").innerHTML=eth.price;
document.getElementById("title3").innerHTML=ada.name;
document.getElementById("price3").innerHTML=ada.price;
document.getElementById("title4").innerHTML=sol.name;
document.getElementById("price4").innerHTML=sol.price;
document.getElementById("title5").innerHTML=shiba.name;
document.getElementById("price5").innerHTML=shiba.price;
document.getElementById("title6").innerHTML=alpha.name;
document.getElementById("price6").innerHTML=alpha.price;
document.getElementById("title7").innerHTML=cake.name;
document.getElementById("price7").innerHTML=cake.price;
document.getElementById("title8").innerHTML=doge.name;
document.getElementById("price8").innerHTML=doge.price;
document.getElementById("title9").innerHTML=link.name;
document.getElementById("price9").innerHTML=link.price;
document.getElementById("title10").innerHTML=zen.name;
document.getElementById("price10").innerHTML=zen.price;
//-----------------------------------------------
//-----------------------------------------------
//Agrego todas las crypto a un Array 
cryptos.push(btc);
cryptos.push(eth);
cryptos.push(ada);
cryptos.push(sol);
cryptos.push(shiba);
cryptos.push(alpha);
cryptos.push(cake);
cryptos.push(doge);
cryptos.push(link);
cryptos.push(zen);
//-----------------------------------------------
//-----------------------------------------------
//Muestro en consola el Array
console.log(cryptos);
//-----------------------------------------------
//-----------------------------------------------
//Creo las constantes para mostrar que cryptos estan en baja o en alza
const downMarket = cryptos.filter(crypto => crypto.state === 2);
const upMarket = cryptos.filter(crypto => crypto.state === 1);
//Muesto en consola las crypto en baja
console.log(downMarket);

alert("¡Bienvendido a CRYPTO P2P MARKET!");

let choice = prompt("¿Que criptomoneda desea comprar?\nElija por número (1 al 5)\nPrecios en $USDT\n1 - $BTC: $54128.93\n2 - $ETH: $4140.45\n3 - $ADA: $1.63\n4 - $SOL: $197.81\n5 - $SHIBA: $0.00004");
let pay;
let quantity;

switch((choice)){
    case "1":
        quantity = prompt("¿Cuantos $BTC desea comprar?\nPrecio: $54128.93");
        pay = multiply(54128.93,quantity);
        alert("Usted pagará $"+pay);
        break;
    case "2":
        quantity = prompt("¿Cuantos $ETH desea comprar?\nPrecio: $4140.45");
        pay = multiply(4140.45,quantity);
        alert("Usted pagará $"+pay );
        break
    case "3":
        quantity = prompt("¿Cuantos $ADA desea comprar?\nPrecio: $1.63");
        pay = multiply(1.63,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "4":
        quantity = prompt("¿Cuantos $SOL desea comprar?\nPrecio: $197.81");
        pay = multiply(197.81,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "5":
        quantity = prompt("¿Cuantos $SHIBA desea comprar?\nPrecio: $0.00004");
        pay = multiply(0.00004,quantity);
        alert("Usted pagará $"+pay );
        break;
}

let sellBtn1 = document.getElementById("sellButton1");
let sellBtn2 = document.getElementById("sellButton2");
let sellBtn3 = document.getElementById("sellButton3");
let sellBtn4 = document.getElementById("sellButton4");
let sellBtn5 = document.getElementById("sellButton5");
let sellBtn6 = document.getElementById("sellButton6");
let sellBtn7 = document.getElementById("sellButton7");
let sellBtn8 = document.getElementById("sellButton8");
let sellBtn9 = document.getElementById("sellButton9");
let sellBtn10 = document.getElementById("sellButton10");

let buyBtn1 = document.getElementById("buyButton1");
let buyBtn2 = document.getElementById("buyButton2");
let buyBtn3 = document.getElementById("buyButton3");
let buyBtn4 = document.getElementById("buyButton4");
let buyBtn5 = document.getElementById("buyButton5");
let buyBtn6 = document.getElementById("buyButton6");
let buyBtn7 = document.getElementById("buyButton7");
let buyBtn8 = document.getElementById("buyButton8");
let buyBtn9 = document.getElementById("buyButton9");
let buyBtn10 = document.getElementById("buyButton10");

sellBtn1.onclick =() => {alert("Usted quiere vender " + btc.name)}
sellBtn2.onclick =() => {alert("Usted quiere vender " + eth.name)}
sellBtn3.onclick =() => {alert("Usted quiere vender " + ada.name)}
sellBtn4.onclick =() => {alert("Usted quiere vender " + sol.name)}
sellBtn5.onclick =() => {alert("Usted quiere vender " + shiba.name)}
sellBtn6.onclick =() => {alert("Usted quiere vender " + alpha.name)}
sellBtn7.onclick =() => {alert("Usted quiere vender " + cake.name)}
sellBtn8.onclick =() => {alert("Usted quiere vender " + doge.name)}
sellBtn9.onclick =() => {alert("Usted quiere vender " + link.name)}
sellBtn10.onclick =() => {alert("Usted quiere vender " + zen.name)}

buyBtn1.onclick =() => {alert("Usted quiere comprar " + btc.name)}
buyBtn2.onclick =() => {alert("Usted quiere comprar " + eth.name)}
buyBtn3.onclick =() => {alert("Usted quiere comprar " + ada.name)}
buyBtn4.onclick =() => {alert("Usted quiere comprar " + sol.name)}
buyBtn5.onclick =() => {alert("Usted quiere comprar " + shiba.name)}
buyBtn6.onclick =() => {alert("Usted quiere comprar " + alpha.name)}
buyBtn7.onclick =() => {alert("Usted quiere comprar " + cake.name)}
buyBtn8.onclick =() => {alert("Usted quiere comprar " + doge.name)}
buyBtn9.onclick =() => {alert("Usted quiere comprar " + link.name)}
buyBtn10.onclick =() => {alert("Usted quiere comprar " + zen.name)}