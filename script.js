document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".menubutton").addEventListener("click", trykPaaMenubutton);


    function trykPaaMenubutton() {
        console.log("der er trykket på menu");

        document.querySelector("nav").classList.toggle("hidden");
        //skift knappen frem og tilbage mellem kryds
        document.querySelector(".menubutton").classList.toggle("kryds");

        //        document.querySelector("body").classList.toggle("overflow");

        document.querySelector(".box").classList.toggle("none");
        window.onclick = function (event) {
            if (event.target == document.querySelector(".box")) {
                console.log("test");
                trykPaaMenubutton();
            }
        }
    }
}
