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

//Metoda ze zmienną i object.create

//OBJECT 1

let object1Place = document.getElementById("forObject1");

let object1 = {
  name: "Obiekt",
  surname: "Pierwszy",
  iDo: "Zwracam sumę liczb parzystych z tablicy",
  getEvenSum(a) {
    return a.filter((e) => e % 2 === 0);
  },
};

object1Place.innerHTML +=
  object1.name + " " + object1.surname + "<br>" + "<br>" + object1.iDo;

//OBJECT 2

let object2Place = document.getElementById("forObject2");

let object2 = {
  name: "Obiekcik",
  surname: "Drugi",
  iDo: "Kasuje swoje imię",
  setDeleteNameProperty(a) {
    delete a.name;
    return a;
  },
};

object2Place.innerHTML +=
  object2.name + " " + object2.surname + "<br>" + "<br>" + object2.iDo;

//OBJECT 3

let object3Place = document.getElementById("forObject3");

const object3 = {
  name: "Obiekcik",
  surname: "Trzeci",
  iDo: "Odwracam słowa i liczby",
  getReverse(a) {
    return String(a).split("").reverse(a).join("");
  },
};

object3Place.innerHTML +=
  object3.name + " " + object3.surname + "<br>" + "<br>" + object3.iDo;

//KLASY

class Solgier {
  constructor(job) {
    this.job = "Żołnierz";
  }
}

//Object 4

class PolishGrot extends Solgier {
  constructor(weapon, name, surname, country) {
    super();
    this.weapon = weapon;
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  shoot() {
    return "Boom Boom";
  }
}

const solgierJan = new PolishGrot("Grot", "Jan", "Paweł", "Polska");

let object4Place = document.getElementById("forObject4");

object4Place.innerHTML +=
  solgierJan.name +
  " " +
  solgierJan.surname +
  "<br>" +
  solgierJan.country +
  "<br>" +
  solgierJan.weapon +
  "<br>" +
  solgierJan.shoot();

//Object 5

class IranAK47 extends Solgier {
  constructor(weapon, name) {
    super();
    this.weapon = weapon;
    this.name = name;
  }
}

let solgierAhmed = new Solgier("żołnierz") && new IranAK47("AK47", "Ahmed");

let object5Place = document.getElementById("forObject5");

object5Place.innerHTML +=
  solgierAhmed.name + "<br>" + solgierAhmed.weapon + "<br>" + solgierAhmed.job;
