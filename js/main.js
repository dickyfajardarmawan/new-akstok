//membuat footer yg dinamis
var h = window.innerHeight;
var h2 = $(document).height();
if (h2 == h) {
    $('#footer').addClass("kelasKaki");
}

// script responsive
var x = window.matchMedia("(max-width: 450px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
function myFunction(x) {
    if (x.matches) {
        // mobile version
        document.getElementById('navbarCari').style.display = 'none';
        document.getElementById('fotoUser').style.display = 'none';
        document.getElementById('namaUser').style.display = 'none';
    } else {
        // desktop version
        document.getElementById('navbarCari').style.display = '';
        document.getElementById('fotoUser').style.display = '';
        document.getElementById('namaUser').style.display = '';
    }
}

function klik(namanya) {
    if (document.getElementById(namanya).style.display == "none") {
        w3_open(namanya);
    } else {
        w3_close(namanya);
    }
}

function w3_open(namanya) {
    document.getElementById(namanya).style.display = "block";
}

function w3_close(namanya) {
    document.getElementById(namanya).style.display = "none";
}