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

class dataEquipment extends Solgier {
  constructor(weapon, name, surname, country) {
    super();
    this.weapon = weapon;
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  shootPL() {
    return "Boom Boom";
  }
  shootTer() {
    return "Ra-ta-ta-ta-ta";
  }
}

//Object 4

const solgierJan = new dataEquipment("Grot", "Jan", "Paweł", "Polska");

let object4Place = document.getElementById("forObject4");

object4Place.innerHTML +=
  solgierJan.job +
  "<br>" +
  solgierJan.name +
  " " +
  solgierJan.surname +
  "<br>" +
  solgierJan.country +
  "<br>" +
  solgierJan.weapon +
  "<br>" +
  solgierJan.shootPL();

//Object 5

let solgierAhmed =
  new Solgier("żołnierz") && new dataEquipment("AK47", "Ahmed", "Ali", "Iraq");

let object5Place = document.getElementById("forObject5");

object5Place.innerHTML +=
  solgierAhmed.job +
  "<br>" +
  solgierAhmed.name +
  " " +
  solgierAhmed.surname +
  "<br>" +
  solgierAhmed.country +
  "<br>" +
  solgierAhmed.weapon +
  "<br>" +
  solgierAhmed.shootTer();

//Object 6

let solgierBob =
  new Solgier("żołnierz") && new dataEquipment("M4", "Bob", "Smith", "USA");

let object6Place = document.getElementById("forObject6");

solgierBob.shootTRRR = "TRRR";

object6Place.innerHTML +=
  solgierBob.job +
  "<br>" +
  solgierBob.name +
  " " +
  solgierBob.surname +
  "<br>" +
  solgierBob.country +
  "<br>" +
  solgierBob.weapon;

let bobShootsPlace = document.getElementById("TRR");

bobShootsPlace.innerHTML += solgierBob.shootTRRR;

//CLOSING screen BobShoot
let bobWindowClose = document.getElementById("BobShootWindow");

bobWindowClose.addEventListener("click", function () {
  bobWindowClose.classList.toggle("show");
});

//OPENING screen Bobshoot
let bobShoots = document.getElementById("BobShoot");
let bobWindow = document.getElementById("BobShootWindow");

bobShoots.addEventListener("click", function () {
  bobWindow.classList.toggle("show");
});

// --------------------                         RESPONSIVE MENU ACTIONS

//OPENING MENU

const burgerIcon = document.getElementById("burger-div");
const mobileNav = document.getElementById("header-ul");

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("show");
});

//CLOSING MENU
let mobileNavClose = document.getElementById("header-ul");

bobWindowClose.addEventListener("click", function () {
  mobileNavClose.classList.toggle("show");
});

/* BURGER X ICON */

const dropBurger = document.querySelector(".burger-icon");
const droP = document.getElementById("header-ul");

dropBurger.addEventListener("click", function () {
  droP.classList.toggle("show");
});

/* OPENING BACKGROUND WHEN MENU OPEN */

const responsiveMenuBackgroundBurger = document.getElementById("burger-div");
const responsiveBackground = document.getElementById(
  "responsive-menu-background"
);

responsiveMenuBackgroundBurger.addEventListener("click", function () {
  responsiveBackground.classList.toggle("show");
});

//CLOSING BACKGROUND WHEN MENU OPEN
const responsiveBackgroundClose = document.getElementById(
  "responsive-menu-background"
);

const responsiveBackgroundBurgerIconClosing =
  document.querySelector(".burger-icon");
responsiveBackgroundBurgerIconClosing.addEventListener("click", function () {
  responsiveBackgroundClose.classList.toggle("show");
});

/* GO TO TOP BUTTON */
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
