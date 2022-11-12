//---  Obiekty i klasy 1. Dlaczego "łapie" plik dopiero na końcu body a nie z head po "id" a po prostu document.write łapie z heada

//--- Sposób 1 wyświetlenia w divie "poka"

document.getElementById("poka").innerHTML =
  "Na tej stronie testuję: <br> - tailwind <br> - obiekty <br> - klasy <br> - metody <br> - połączenie pliku html z plikiem .js";

//--- Sposób 2

//let testowa = document.getElementById("poka");

//testowa.innerHTML += "dupa";

// ---------------------------------------------------

//--- Wypisanie tekstu nie w kontretnym divie
//document.write("dupa");

//--- Info po odświeżeniu strony
//alert("jestem");

// -------------------------------------------------- WŁAŚCIWY DOKUMENT

//OBJECT 1

let object1Place = document.getElementById("forObject1");

let object1 = {
  name: "Obiekcik",
  surname: "Pierwszy",
  iDo: "Zwracam sumę liczb parzystych z tablicy",
  getEvenSum(a) {
    return a.filter((e) => e % 2 === 0);
  },
};

object1Place.innerHTML += object1.name;
