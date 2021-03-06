document.addEventListener("DOMContentLoaded", sidenVises);

//Laver søgning i URL'en
let urlPrams = new URLSearchParams(window.location.search);
//Henter værdien "id" fra URL'en hvis den er tilstede
let id = urlPrams.get("id");
//console.log(id);


function sidenVises() {
    //    console.log("siden vises");
    document.querySelector(".menubutton").addEventListener("click", trykPaaMenubutton);

    if (window.innerWidth >= 1100) {
        document.querySelector("nav").classList.remove("hidden");
    }

    if (id == null) {
        //        console.log("null virker");
        document.querySelector(".menupunkt_forside a").classList.add("menu_aktiv");
    }
    if (id == 1) {
        //        console.log("1 virker");
        document.querySelector(".menupunkt_forside a").classList.add("menu_aktiv");
    }
    if (id == 2) {
        //        console.log("2 virker");
        document.querySelector(".menupunkt_galleri a").classList.add("menu_aktiv");
    }
    if (id == 3) {
        //        console.log("3 virker");
        document.querySelector(".menupunkt_kunstneren a").classList.add("menu_aktiv");
    }

    if (id == 4) {
        //        console.log("4 virker");
        document.querySelector(".menupunkt_kontakt a").classList.add("menu_aktiv");
    }


    function trykPaaMenubutton() {
        //        console.log("der er trykket på menu");

        document.querySelector("nav").classList.toggle("hidden");
        //skift knappen frem og tilbage mellem kryds
        document.querySelector(".menubutton").classList.toggle("kryds");


        if (id == null) {
            document.querySelector(".index_container").classList.toggle("kanIkkeKlikke");
        }
        if (id == 1) {
            document.querySelector(".index_container").classList.toggle("kanIkkeKlikke");
        }
        if (id == 2) {
            document.querySelector(".galleri_container").classList.toggle("kanIkkeKlikke");
        }
        if (id == 3) {

            document.querySelector(".kunstneren_container").classList.toggle("kanIkkeKlikke");
        }

        if (id == 4) {

            document.querySelector(".kontakt_container").classList.toggle("kanIkkeKlikke");
        }


        document.querySelector(".box").classList.toggle("none");
        window.onclick = function (event) {
            if (event.target == document.querySelector(".box")) {
                //                console.log("test");
                trykPaaMenubutton();
            }
        }
    }
}
