<!DOCTYPE html>
<html lang="da">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Martel:200,300,400,600,700,800,900" rel="stylesheet">
    <style></style>
</head>

<body>
    <div class="box none"></div>
    <div class="main_grid">
        <header>
            <?php include "header.html"; ?>
        </header>

        <div class="kontakt_container">
            <div class="kontakt_billede">
                <img src="img/portraet_kontakt.jpg" alt="billede fra Galleri Brunsvig">
            </div>
            <div class="kontakt_tekst">
                <h1>Kontakt</h1>
                <p><span class="bold">Tlf.:</span><br> <a href="tel:+4553354422">
                        <span class="pink">53 35 44 22</span>
                    </a></p>
                <p><span class="bold">E-mail:</span><br> <a href="mailto:markbrunsvig@gmail.com" target="_top"><span class="pink">markbrunsvig@gmail.com</span></a></p>
                <p><span class="bold">Åbningstider:</span> <br> Onsdag 16-18 <br>Lørdag 11-14</p>
                <p><span class="bold">Adresse:</span> <br>Hillerødgade 169, 2400 København NV</p>
            </div>
            <div class="map">
                <div class="mapouter">
                    <div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=hiller%C3%B8dgade%20169&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                </div>
            </div>
        </div>
        <footer>
            <?php include "footer.html"; ?>
        </footer>
    </div>

    <script></script>
    <script src="script.js"></script>
</body>

</html>
