/****************Exercice 1 : Énoncé Simple If/Else Instructions**********/
    
                var X=18;
                var Y=20;
                if(!(X <=Y)==true){
                    alert("information vrai: "+
                    +X+ " est superieur a: "+ Y);
                }
                else {
                    alert("information faux: "+
                    +X+ " est inferieur a: "+ Y);
                }

/****************************Exercice 2 : Chihuahua Instructions*************************/

//1*) 
let newDog="Chihuahua";
//2*)


//3*)
var maj = newDog.toUpperCase(); /*majuscule*/
var min = newDog.toLowerCase();/*minuscule*/
lert(maj);
alert(min);

//4*)
if(!(newDog="Chihuahua")==true){
                    alert("J’adore les chihuahuas, c’est ma race de chien préférée");
                }
                else {
                    alert("e m’en fiche, je préfère les chats ");
                }

/****************************** Exercice 3 : Pair Ou Impair*******************************************/
//1*)

var X=prompt("saisir un nombre",'tapez votre nombre ici');
                if(x==0){
                    alert("x est un nombre pair ");
                        }

               else if (!(X%2=0)==true) {
                    alert("x est un nombre pair ");
                      } 

                else if (X==1) {
                    alert("x est un nombre impair ");
                            }

               else if(!(X%3=0)==true) {
                    alert("x est un nombre impair ");
                }
                else{ alert("la valeursaisie n'est pas correcte");}


/*****************************Exercice 4 : Discussion De Groupe******************/
 let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
 //*
 if(users.length==0){
    alert("personne n’est en ligne");
 }

else if(users.length==1){
     for(var i=1; i<users.length; i++){
     alert(users(i));
            }
 }

else if(users.length==2){
     for(var i=1; i<users.length; i++){
     alert(users(i));
            }
 }

else (users.length>2){
     for(var i=0; i<2; i++){
     alert(users(i)+"and+" +users.length-2+ " more are online");
            }
 }
