<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Værker</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Martel:200,300,400,600,700,800,900" rel="stylesheet">
</head>

<body>
    <div class="box none"></div>

    <div class="main_grid">

        <header>
            <?php include "header.html"; ?>
        </header>
        <div id="modal">
            <div id="modal-content">
                <div class="modal_knap">
                    <div class="kryds_modal kryds_modal1">
                        <div class="kryds_modal kryds_modal2"></div>
                    </div>
                </div>
                <img class="modal-billede" src="" alt="">
                <div class="modal_tekst">
                    <h2></h2>
                    <p class="data-size"></p>
                    <!--                <p class="data-material"></p>-->
                    <p class="data-diametri"></p>
                    <p class="data-pris"></p>
                </div>
            </div>
        </div>
        <div class="galleri_container">
            <h1>Værker</h1>

            <div class="menu-item dropdown-btn salg filtrering_aktiv" data-kategori="Ja">
                <p>TIL SALG</p>
                <div class="brushstroke"></div>
            </div>
            <div class="dropdown-container dropdown_salg">
                <div class="sub-item b3_link" data-kategori="Maleri">Malerier</div>
                <div class="sub-item b4_link" data-kategori="Tegning">Tegninger</div>
                <div class="sub-item b1_link" data-kategori="Keramik">Keramik</div>
            </div>

            <div class="menu-item dropdown-btn ikke_salg filtrering_ikke_aktiv" data-kategori="Nej">
                <p>TIDLIGERE</p>
            </div>
            <div class="dropdown-container dropdown_ikke_salg">
                <div class="sub-item b2_link" data-kategori="Maleri">Malerier</div>
                <div class="sub-item" data-kategori="Tegning">Tegninger</div>
                <!--               <div class="sub-item" data-kategori="Keramik">Keramik</div>-->
            </div>
            <div class="data-content"></div>
            <template id="data-template">
                <div class="galleri_content">
                    <img class="image" src="" alt="">
                    <h2></h2>
                    <p class="data-size"></p>
                    <p class="data-material"></p>
                    <p class="data-diametri"></p>
                    <p class="data-pris"></p>
                </div>
            </template>
        </div>

        <footer>
            <?php include "footer.html"; ?>
        </footer>
    </div>

    <script></script>
    <script src="script.js"></script>
    <script src="galleri.js"></script>
</body>

</html>
