/**************************exercice 1 : Votre Nourriture*****************************/
    
    var dejeuner='legume simple';
    var diner='tot au sauce gombo';
            alert("je déjeune du: "+dejeuner+" et les soir je mange du : "+diner);

/****************************Exercice 2 : Série Instructions*************************/

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory","the 100"];
var nombreSeries=4;
var myWatchedSeriesSentenceblack="les serie tel que: "+myWatchedSeries(0)+", "+mmyWatchedSeries(1)+","+ amyWatchedSeries(2);

        alert("j'ai regarder "+ nombreSeries +":"+myWatchedSeriesSentenceblack);


/******************************Partie II*******************************************/
//1*)

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory","the 100"];
let serie = "the big bang theory"
var indexb = items.indexOf(serie);
if (~indexb) {
    myWatchedSeries[indexb] = "amis";
}
console.log(myWatchedSeries);

//2*)
myWatchedSeries[myWatchedSeries.length]="game of trone";

//3*)
seriep='the gool';
myWatchedSeries.unshift(seriep);


//4*)
let serie = "black mirror"
        myWatchedSeries  = myWatchedSeries.filter(item => item !== serie)

//5*)
var objet=myWatchedSeries(1);
var inde=objet.charAt(3);
console.log(inde);


//6*)
console.log(myWatchedSeries);



/*****************************Exercice 3 : Le Convertisseur De Température******************/
 var temperature_degere=28;
 var fahrenheit=temperature_degere*1,8 + 32;
 console.log(fahrenheit);