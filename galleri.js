document.addEventListener("DOMContentLoaded", getJSON);

let kategoriFilter = "Ja";
let kategoriFilterSub;
//let kategoriFilter2;
//let kategoriFilterSub2;
let myArt;
let dest = document.querySelector(".data-content");
let modal = document.querySelector("#modal");
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;
let selected;
//let b1_link = document.querySelector(".b1_link");
//let b2_link = document.querySelector(".b2_link");
//let b3_link = document.querySelector(".b3_link");
//let b4_link = document.querySelector(".b4_link");

////Laver søgning i URL'en
//let urlPrams2 = new URLSearchParams(window.location.search);
////Henter værdien "id" fra URL'en hvis den er tilstede
//let url_filter = urlPrams2.get("filter");
//console.log(url_filter);
//
//let url_subfilter = urlPrams2.get("subfilter");
//console.log(url_subfilter);
//
//let url_link = urlPrams2.get("link");
//console.log(url_link);


//Hent wordpress data og konverter til JSON

async function getJSON() {

    let myJSON = await fetch("https://www.lowson.dk/kea/2Sem/02_sem_eksamen_GR_17/wordpress//wp-json/wp/v2/vaerker?per_page=100");
    myArt = await myJSON.json();

    visSide();
}

function visSide() {
    //    if (url_filter == null) {
    //        kategoriFilter = "Ja";
    //    }

    document.querySelector(".dropdown_salg").classList.add("active");
    if (window.innerWidth >= 1050) {
        document.querySelector(".ikke_salg").classList.add("position2");
    }

    document.querySelector(".salg").addEventListener("click", () => {
        document.querySelector(".dropdown_ikke_salg").classList.remove("active");
        document.querySelector(".dropdown_ikke_salg").classList.remove("filtrering_aktiv");

        document.querySelector(".ikke_salg").classList.remove("filtrering_aktiv");

        document.querySelector(".ikke_salg").classList.remove("pink");
        document.querySelector(".dropdown_salg").classList.toggle("active");
        document.querySelector(".salg").classList.toggle("pink");

        document.querySelector(".salg").classList.add("filtrering_aktiv");

        if (window.innerWidth >= 1050) {
            //                        document.querySelector(".ikke_salg").classList.add("position2");
            document.querySelector(".ikke_salg").classList.toggle("position2");
        }

    });

    document.querySelector(".ikke_salg").addEventListener("click", () => {
        document.querySelector(".salg").classList.remove("pink");

        document.querySelector(".dropdown_salg").classList.remove("active");
        document.querySelector(".salg").classList.remove("filtrering_aktiv");
        document.querySelector(".dropdown_ikke_salg").classList.toggle("active");
        document.querySelector(".ikke_salg").classList.toggle("pink");
        document.querySelector(".ikke_salg").classList.add("filtrering_aktiv");

        if (window.innerWidth >= 1050) {
            document.querySelector(".ikke_salg").classList.remove("position2");
        }
    });

    //filter på top niveau
    document.querySelectorAll(".menu-item").forEach(knap => {
        knap.addEventListener("click", filtrering);
    });


    function filtrering() {
        //        kategoriFilter2 = null;
        //        kategoriFilterSub2 = null;
        //        url_filter = null;
        //        url_subfilter = null;

        document.querySelectorAll(".sub-item").forEach(punkt => {
            punkt.classList.remove("pink");
        })
        dest.textContent = "";
        kategoriFilter = this.getAttribute("data-kategori");
        console.log("kategoriFilter");
        showArt();
    }
    //filter på under niveau
    document.querySelectorAll(".sub-item").forEach(knap => {
        knap.addEventListener("click", subfiltrering);
    });


    function subfiltrering() {
        document.querySelectorAll(".sub-item").forEach(punkt => {
            punkt.classList.remove("pink");
        })
        //        kategoriFilter2 = null;
        //        kategoriFilterSub2 = null;
        //        url_filter = null;
        //        url_subfilter = null;
        //        kategoriFilter = "Ja";
        selected = event.target;
        selected.classList.add("pink");
        console.log("subfiltrering?");
        dest.textContent = "";
        kategoriFilterSub = this.getAttribute("data-kategori");
        console.log(kategoriFilterSub);
        showArtSub();
    }


    //
    //    function fraForsiden() {
    //        kategoriFilter2 = url_filter;
    //        kategoriFilterSub2 = url_subfilter;
    //
    //        if (kategoriFilter2 == "Nej") {
    //            document.querySelector(".salg").classList.remove("filtrering_aktiv");
    //            document.querySelector(".ikke_salg").classList.add("filtrering_aktiv");
    //            document.querySelector(".dropdown_salg").classList.remove("active");
    //            document.querySelector(".dropdown_ikke_salg").classList.add("active");
    //            document.querySelector(".ikke_salg").classList.remove("position2");
    //        }
    //
    //        if (url_link == "b1_link") {
    //            b1_link.classList.add("pink");
    //        }
    //        if (url_link == "b2_link") {
    //            b2_link.classList.add("pink");
    //        }
    //        if (url_link == "b3_link") {
    //            b3_link.classList.add("pink");
    //        }
    //
    //        if (url_link == "b4_link") {
    //            b4_link.classList.add("pink");
    //        }
    //
    //        showArtSub();
    //    }


    //kør en foreach loop igennem og find defineret data og indsæt i template
    function showArt() {
        //        if (url_filter != null && url_subfilter != null) {
        //            fraForsiden();
        //        }
        //        dest.textContent = "";

        window.scrollTo(0, 0);
        let myTemplate = document.querySelector("#data-template");
        myArt.forEach(artwork => {

            if (artwork.acf.er_vaerket_til_salg == kategoriFilter) {
                console.log(kategoriFilter);
                let klon = myTemplate.cloneNode(true).content;
                klon.querySelector("img").src = artwork.acf.billede_af_vaerk;
                klon.querySelector("img").alt = artwork.type + " " + artwork.acf.kategori + " " + artwork.acf.vaerkets_navn;
                klon.querySelector("img").addEventListener("click", () => {
                    visModal(artwork);
                });
                if (artwork.acf.vaerkets_navn != "") {
                    klon.querySelector("h2").innerHTML = artwork.acf.vaerkets_navn;
                } else {
                    klon.querySelector("h2").innerHTML = '"Unavngivet værk"';
                }

                if (artwork.acf.bredde != "" || artwork.acf.hojde != "") {
                    klon.querySelector(".data-size").innerHTML = artwork.acf.bredde + " x " + artwork.acf.hojde + " cm  ";
                }

                if (artwork.acf.bredde != "" && artwork.acf.materiale != "") {
                    klon.querySelector(".data-size").innerHTML = artwork.acf.bredde + " x " + artwork.acf.hojde + " cm  " + " -  " + artwork.acf.materiale;
                }
                //                        klon.querySelector(".data-material").innerHTML = artwork.acf.materiale;
                if (artwork.acf.diameter != "") {
                    klon.querySelector(".data-diametri").innerHTML = "Diameter: " + artwork.acf.diameter + " cm";
                }
                if (artwork.acf.pris != "") {
                    klon.querySelector(".data-pris").innerHTML = "Pris: " + artwork.acf.pris + " kr.";
                }
                dest.appendChild(klon);
            }
        })
    }

    function showArtSub() {
        console.log("show art sub");
        console.log(kategoriFilter);
        console.log(kategoriFilterSub);
        dest.textContent = "";
        window.scrollTo(0, 0);
        let myTemplate = document.querySelector("#data-template");
        myArt.forEach(artwork => {
            //            console.log(kategoriFilterSub2);
            //            console.log(kategoriFilter2);
            if (artwork.acf.er_vaerket_til_salg == kategoriFilter && kategoriFilterSub == artwork.acf.kategori) {
                //                console.log(artwork.acf.er_vaerket_til_salg + "test1");
                //            console.log(artwork.acf.kategori);
                let klon = myTemplate.cloneNode(true).content;
                klon.querySelector("img").src = artwork.acf.billede_af_vaerk;
                klon.querySelector("img").alt = artwork.type + " " + artwork.acf.kategori + " " + artwork.acf.vaerkets_navn;
                klon.querySelector("img").addEventListener("click", () => {
                    visModal(artwork);
                });
                if (artwork.acf.vaerkets_navn != "") {
                    klon.querySelector("h2").innerHTML = artwork.acf.vaerkets_navn;
                } else {
                    klon.querySelector("h2").innerHTML = '"Unavngivet værk"';
                }

                if (artwork.acf.bredde != "" || artwork.acf.hojde != "") {
                    klon.querySelector(".data-size").innerHTML = artwork.acf.bredde + " x " + artwork.acf.hojde + " cm  ";
                }

                if (artwork.acf.bredde != "" && artwork.acf.materiale != "") {
                    klon.querySelector(".data-size").innerHTML = artwork.acf.bredde + " x " + artwork.acf.hojde + " cm  " + " -  " + artwork.acf.materiale;
                }

                //                         klon.querySelector(".data-material").innerHTML = artwork.acf.materiale;
                if (artwork.acf.diameter != "") {
                    klon.querySelector(".data-diametri").innerHTML = "Diameter: " + artwork.acf.diameter + " cm";
                }
                if (artwork.acf.pris != "") {
                    klon.querySelector(".data-pris").innerHTML = "Pris: " + artwork.acf.pris + " kr.";
                }
                dest.appendChild(klon);
            }
            //            if (artwork.acf.er_vaerket_til_salg == kategoriFilter2 && kategoriFilterSub2 == artwork.acf.kategori) {
            //                //                console.log(artwork.acf.er_vaerket_til_salg + "test2");
            //                //            console.log(artwork.acf.kategori);
            //                console.log("test");
            //                let klon = myTemplate.cloneNode(true).content;
            //                klon.querySelector("img").src = artwork.acf.billede_af_vaerk;
            //                klon.querySelector("img").alt = artwork.type + " " + artwork.acf.kategori + " " + artwork.acf.vaerkets_navn;
            //                klon.querySelector("img").addEventListener("click", () => {
            //                    visModal(artwork);
            //                });
            //                if (artwork.acf.vaerkets_navn != "") {
            //                    klon.querySelector("h2").innerHTML = artwork.acf.vaerkets_navn;
            //                } else {
            //                    klon.querySelector("h2").innerHTML = '"Unavngivet værk"';
            //                }
            //
            //                if (artwork.acf.bredde != "" || artwork.acf.hojde != "") {
            //                    klon.querySelector(".data-size").innerHTML = artwork.acf.bredde + " x " + artwork.acf.hojde + " cm  " + " -  " + artwork.acf.materiale;
            //                }
            //                //                         klon.querySelector(".data-material").innerHTML = artwork.acf.materiale;
            //                if (artwork.acf.diameter != "") {
            //                    klon.querySelector(".data-diametri").innerHTML = "Diameter: " + artwork.acf.diameter + " cm";
            //                }
            //                if (artwork.acf.pris != "") {
            //                    klon.querySelector(".data-pris").innerHTML = "Pris: " + artwork.acf.pris + " kr.";
            //                }
            //                dest.appendChild(klon);
            //
            //                document.querySelectorAll(".sub-item").forEach(knap => {
            //                    knap.addEventListener("click", subfiltrering);
            //                });
            //            }
        })
    }

    //    function rydOp() {
    //        console.log("rydop");
    //        url_filter2 = null;
    //        url_subfilter2 = null;
    //        kategoriFilter = "Ja";
    //
    //        dest.textContent = "";
    //
    //        document.querySelectorAll(".sub-item").forEach(knap => {
    //            knap.addEventListener("click", subfiltrering);
    //        });
    //
    //        //                showArtSub();
    //    }

    function visModal(art) {
        modal.classList.add("show");
        modal.querySelector("img").src = art.acf.billede_af_vaerk;
        modal.querySelector("img").alt = art.type + " " + art.acf.kategori + " " + art.acf.vaerkets_navn;
        modal.querySelector("h2").innerHTML = art.acf.vaerkets_navn;
        if (art.acf.bredde != "" || art.acf.hojde != "") {
            modal.querySelector(".data-size").innerHTML = art.acf.bredde + " x " + art.acf.hojde + " cm";
        }

        if (art.acf.bredde != "" && art.acf.materiale != "") {
            modal.querySelector(".data-size").innerHTML = art.acf.bredde + " x " + art.acf.hojde + " cm - " + art.acf.materiale;
        }


        //                    modal.querySelector(".data-material").innerHTML = art.acf.materiale;
        if (art.acf.diameter != "") {
            modal.querySelector(".data-diametri").innerHTML = "Diameter: " + art.acf.diameter + " cm";
        }

        if (art.acf.pris != "") {
            modal.querySelector(".data-pris").innerHTML = "Pris: " + art.acf.pris + " kr.";
        }
        //              modal.querySelector(".data-material").innerHTML = art.acf.materiale;
        modal.querySelector(".modal_knap").addEventListener("click", hideModal);

        window.onclick = function (event) {
            if (event.target == modal) {
                hideModal();
            }

        }
    }

    function hideModal() {
        modal.classList.remove("show");
    }
    showArt();
}




//dropdown filtrerings menu

//Løber variablen dropdown igennem og afventer at der klikkes på elementet
//   for (i = 0; i < dropdown.length; i++) { // dropdown[i].addEventListener("click", function() { // //der køres en foreach løkke igennem som nulstiller klassen .dropdown-container og dermed sikre at klassen "active" ikke er tilstede // document.querySelectorAll(".dropdown-container").forEach(e=> {
// e.classList.remove("active");
// });
// //variable til søskende elementet af det aktive element
// let dropdownContent = this.nextElementSibling;
// //tilføjer klassen "active" til variablen dropdownContent
// dropdownContent.classList.add("active");
//
// // document.querySelector(".menu-item").addEventListener("click", () => {
// // document.querySelector(".dropdown-container").classList.toggle("active");
// // })
//
// });
// }
