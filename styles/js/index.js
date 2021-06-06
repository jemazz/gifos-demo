const api_key = "ttHCNKtdglTZhTPQlaGTrHAHe08GlSmI";
let iconSearch2 = document.createElement('img');
let ctnSearch = document.getElementById('ctnSearch');
let ctnSearchBar = document.getElementById('ctnSearchBar');
iconSearch2.classList.add('iconSearch');
iconSearch2.setAttribute('id', 'ico');
let ico = document.getElementById('ico');
let darkLight = document.getElementById("darkLight");
let iconSearch = document.getElementById("iconSearch");
let logo = document.getElementById("logo");
let cruz = document.getElementById("close");
let burger = document.getElementById("burger");
let gralFavorites = document.getElementById("gralFavorites");
let trending = document.getElementById('trending');
let ctnGral = document.getElementById('ctnGral');
let favorites = document.getElementById('favorites');
let menuBurger = document.getElementById('menuBurger');
let close = document.getElementById('close');
let checkBurger = document.getElementById('checkBurger');
let gralMisGifos = document.getElementById('gralMisGifos');
let btnVerMasFavGif = document.getElementById('btnVerMasFavGif');
let ctnSeparador = document.getElementById('ctnSeparador');
let crearGifo = document.getElementById('crearGifo');
//para crear el template de search gifos (palabra)
var gifosCont = document.querySelector('.gifosCont');
var gifosContID = document.getElementById('gifosCont');
let btnVerMasGifos = document.getElementById('btnVerMasGifos');


$template = document.getElementById('templateGif').content;
$fragment = document.createDocumentFragment();

$templateFav = document.getElementById('templateGifFav').content;
$fragmentFav = document.createDocumentFragment();

var gifCreados = document.querySelector('.gifCreados');
var gifCreadosID = document.getElementById('gifCreadosID');


$templateGifosCreados = document.getElementById('templateGifosCreados').content;
$fragmentGifosCreados = document.createDocumentFragment();

let gifos = document.getElementById('gifos');
let line;
let input;
let ctnGrifos = document.getElementById('ctnGrifos');
let ctnLeftRight = document.getElementById('ctnLeftRight');
let trendingGifos = document.getElementById('trendingGifos');
buttonSliderLeft = document.createElement('img');
buttonSliderLeft.setAttribute('src', "assets/button-slider-left.svg");
buttonSliderLeft.setAttribute('id', 'buttonSliderLeft');
ctnLeftRight.appendChild(buttonSliderLeft);
buttonSliderRight = document.createElement('img');
buttonSliderRight.setAttribute('src', "assets/Button-Slider-right.svg")
buttonSliderRight.setAttribute('id', 'buttonSliderRight');
ctnLeftRight.appendChild(buttonSliderRight);

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

let paso1 = document.getElementById('paso1');
let paso2 = document.getElementById('paso2');
let btnGrabar = document.getElementById('btnGrabar');

//scroll trending Gifos derecha
var marcaRight = 0;
let varbuttonSliderRight = document.getElementById('buttonSliderRight');
let btnComenzar = document.getElementById('btnComenzar');

let uls = document.getElementsByTagName("ul");
let ctnSugeridas;
let elemento;
let arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");

let gifoOk;
let flagComenzar = false;

var gifFav = document.querySelector('.gifFav');
var gifFavID = document.getElementById('gifFav');


var media = matchMedia('(min-width: 1440px)');

changeSize = mql => {
    if (mql.matches == true) {
        console.log('si')
    }
}
media.addEventListener("change", changeSize);
changeSize(media);

varbuttonSliderRight.addEventListener('click', () => {
    if (marcaRight == 0) {
        searchTrendingGifos();
        var leng = data.data.length;
        var actualizar = data.data[0];
        var borro = data.data.shift();
        data.data.push(borro);
        marcaRight = 1;
        for (let index = 0; index < 2; index++) {
            agregarCtnTrendingGifos(data.data[index]);
        }
    } else if ((marcaRight == 1) && (data.data.length != 1)) {
        var actualizar = data.data[0];
        var borro = data.data.shift();
        data.data.push(borro);
        long = data.data.length;
        for (let index = 0; index < 2; index++) {
            agregarCtnTrendingGifos(data.data[index]);
        }
    }

})

//scroll slider trending Gifos Left // el de abajo no esta hecho
var marcaLeft = 0;
let varbuttonSliderLeft = document.getElementById('buttonSliderLeft');
varbuttonSliderLeft.addEventListener('click', () => {
    var t;

    if (marcaLeft == 0) {
        var leng = data.data.length;
        var lengNueva = (data.data.length) - 1;
        var leng = data.data.length;
        var ultElement = data.data.pop();
        data.data.unshift(ultElement);


        marcaLeft = 1;
        for (let index = 49; index > 0; index--) {
            agregarCtnTrendingGifos(data.data[index]);

        }

    } else if ((marcaLeft == 1) && (data.data.length != 1)) {
        var ultElement = data.data.pop();
        data.data.unshift(ultElement);
        var actualizar = data.data[0];
        var borro = data.data.pop();
        data.data.unshift(ultElement);
        for (let index = 49; index > 0; index--) {
            agregarCtnTrendingGifos(data.data[index]);
        }
    } else if ((marcaLeft == 1) && (data.data.length == 1)) {
        var lengI = data.data.index;
        return;
    }

})

varbuttonSliderLeft.addEventListener('mouseover', () => {
    varbuttonSliderLeft.setAttribute = ('src', 'assets/button-slider-left-hover.svg');

})
varbuttonSliderRight.addEventListener('mouseover', () => {
    varbuttonSliderRight.setAttribute = ('src', 'assets/Button-Slider-right-hover.svg');

})


let iFace = document.getElementById('iFace');
iFace.addEventListener('mouseover', () => {
    iFace.setAttribute('src', "assets/icon_facebook_hover.svg");
})
iFace.addEventListener('mouseout', () => {
    iFace.setAttribute('src', "assets/icon_facebook.svg");
})

let iTwi = document.getElementById('iTwi');
iTwi.addEventListener('mouseover', () => {
    iTwi.setAttribute('src', "assets/icon-twitter-hover.svg");
})
iTwi.addEventListener('mouseout', () => {
    iTwi.setAttribute('src', "assets/icon-twitter.svg");
})

let iInst = document.getElementById('iInst');
iInst.addEventListener('mouseover', () => {
    iInst.setAttribute('src', "assets/icon_instagram-hover.svg");
})
iInst.addEventListener('mouseout', () => {
    iInst.setAttribute('src', "assets/icon_instagram.svg");
})


var tema = 'dark';
darkLight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switch (tema) {
        case ("dark"):
            darkLight.innerHTML = "Modo Diurno";
            nuevoDiv = document.createElement('div');
            nuevoDiv.classList.add('borderMenu');
            darkLight.appendChild(nuevoDiv);
            tema = 'light';
            if   (iconSearch2.src === "http://127.0.0.1:5500/assets/icon-search.svg") {
               
                iconSearch2.setAttribute('src', "assets/icon-search-mod-noc.svg");
             }
         
           if  (iconSearch.src === "http://127.0.0.1:5500/assets/close.svg") {
               iconSearch.setAttribute('src', "assets/close-modo-noct.svg"); 
            } else {
                iconSearch.setAttribute('src', "assets/icon-search-mod-noc.svg"); 
            }
            
            logo.setAttribute('src', "assets/logo-mobile-modo-noct.svg");
            burger.setAttribute('src', "assets/burger-modo-noct.svg");
            cruz.setAttribute('src', "assets/close-modo-noct.svg");
            crearGifo.setAttribute('src', "assets/CTA-crear-gifo-modo-noc.svg");
            varbuttonSliderRight.setAttribute('src', "assets/button-slider-right-md-noct.svg");
            varbuttonSliderLeft.setAttribute('src', "assets/button-slider-left-md-noct.svg");
            break;
        
        case ("light"):
            darkLight.innerHTML = 'Modo Nocturno';
            nuevoDiv = document.createElement('div');
            nuevoDiv.classList.add('borderMenu');
            darkLight.appendChild(nuevoDiv);
            tema = 'dark';
            if   (iconSearch2.src !== "http://127.0.0.1:5500/assets/icon-search-modo-noct.svg") { 
                iconSearch2.setAttribute('src', "assets/icon-search.svg");
             }
         
           if  (iconSearch.src === "http://127.0.0.1:5500/assets/close-modo-noct.svg") {
               iconSearch.setAttribute('src', "assets/close.svg"); 
            } else {
                iconSearch.setAttribute('src', "http://127.0.0.1:5500/assets/icon-search.svg"); 
            }
            
            logo.setAttribute('src', "assets/logo-mobile.svg");
            cruz.setAttribute('src', "assets/close.svg");
            burger.setAttribute('src', "assets/burger.svg");
            crearGifo.setAttribute('src', "assets/button-crear-gifo.svg");
            varbuttonSliderRight.setAttribute('src', "assets/Button-Slider-right.svg");
            varbuttonSliderLeft.setAttribute('src', "button-slider-left.svg");
            break;
    }

})


titletrendingGifos = document.getElementById('titletrendingGifos');
pTGifos = document.getElementById('pTGifos');

crearGifo.addEventListener('click', () => {
    gifosCont.innerHTML = "";
    gifosCreadosCont.innerHTML = "";
    video.style.display = "none";


    btnVerMasGifos.style.display = "none";
    btnVerMasFavGif.style.display = "none";


    gifSinCont.style.display = "none";
    if (check) {
        check.style.display = "none";
    }

    if (gifoOk) {
        gifoOk.style.display = "none";
    }


    document.getElementById('favorites').classList.remove('clickStyleFavDesk');
    document.getElementById('gifos').classList.remove('clickStyleFavDesk');
    crearGifo.setAttribute('src', "assets/CTA-crear-gifo-hover.svg");
    gralFavorites.style.display = "none";
    ctnGral.style.display = "none";
    trending.style.display = "none";
    trendingGifos.style.display = "none";
    gralMisGifos.style.display = "none";

    ctnGralCrearGifo.style.display = "flex";
    ctnSeparador.style.display = "flex";
    btnComenzar.style.display = "initial";
    paso0.style.display = "contents";
    paso1.style.display = "none";
    p3.style.background = 'white';
    p3.style.color = '#572EE5';

    p2.style.background = 'white';
    p1.style.background = 'white';



    clickFlag = true;
})


var ctnGralCrearGifo = document.getElementById('ctnGralCrearGifo');
var camara = document.createElement('img');
var luz = document.createElement('img');
var cinta1 = document.createElement('img');
var cinta2 = document.createElement('img');
luz.setAttribute('id', 'luz');
cinta1.setAttribute('id', 'cinta1');
cinta2.setAttribute('id', 'cinta2');
camara.setAttribute('id', 'camara');
camara.setAttribute('src', "assets/element-camara.svg");
luz.setAttribute('src', 'assets/element-luz-camara.svg');
cinta1.setAttribute('src', 'assets/element_cinta1.svg');
cinta2.setAttribute('src', 'assets/element_cinta2.svg');
var ctnCentralCrearGifo = document.getElementById('ctnCentralCrearGifo');

var cinta = document.createElement('img');
cinta.setAttribute('src', "assets/pelicula.svg");
cinta.setAttribute('id', 'cinta');
ctnGralCamara.appendChild(camara);
ctnGralCamara.appendChild(luz);
ctnGralCamara.appendChild(cinta1);
ctnGralCamara.appendChild(cinta2);
ctnGralCrearGifo.appendChild(cinta);


let searchBar = document.getElementById('searchBar');
let gifCtn = document.getElementById('gifCtn');



searchBar.addEventListener('keyup', () => {
    if (event.which !== 13 || event.keyCode != 13) {
        if (searchBar.value == "") {
            ocultarSugeridas();
            headerSearch.innerHTML = "";
            gifosCont.innerHTML = "";
            btnVerMasFavGif.style.display = "none";
            iconSearch2.style.opacity = '0';

            if (tema === 'dark') {
                iconSearch.setAttribute('src', "assets/icon-search.svg");
            } else if (tema === 'light') {
                iconSearch.setAttribute('src', "assets/icon-search-modo-noct.svg");
            }
        } else {
            sugerir(searchBar.value)
        }

    } else {
        if (searchBar.value=="") {
            return;
        }
        resetSearch();
        buscar(searchBar.value);
        ocultarSugeridas();
    }


})


async function sugerir(palabra) {
    let url = "https://api.giphy.com/v1/tags/related/" + palabra + "?api_key=ttHCNKtdglTZhTPQlaGTrHAHe08GlSmI";
    const resp = await fetch(url);
    data = await resp.json();

    if (data.data.length !== 0) {
        ctnSugeridas = document.createElement('ul');
        ctnSugeridas.setAttribute('id', 'ctnSugeridas');
        ctnSugeridas.innerHTML = searchBar.value;
        ctnSugeridas.style.fontFamily = '$font-family-search-compartir';
        ctnSugeridas.style.fontSize = '$font-size-m';
        ctnSugeridas.style.color = '$colour-black';
        let line = document.createElement('div');

        ctnSugeridas.appendChild(line);
        ctnSearch.appendChild(ctnSugeridas);

        for (let i = 1; i < 4; ++i) {

            const element = data.data[i].name;
            elemento = document.createElement('li');
            elemento.setAttribute('id', 'elemento')
            elemento.innerHTML = element;
            ctnSugeridas.appendChild(elemento);
            ctnSearch.appendChild(ctnSugeridas);
            iconSearch.style.zIndex = '5003';
        }


        //Seleccionar palabra sugerida

        ctnSugeridas.addEventListener('click', (e) => {
            if (e.target && e.target.nodeName == "LI") {
                searchBar.value = e.target.innerHTML;
                buscar(searchBar.value);
            }
            ocultarSugeridas();
        })
    }
}


function ocultarSugeridas() {
    for (let index = 0; index < uls.length; index++) {
        const element = uls[index];
        element.style.display = "none";

    }

}

let vacio=false;

async function buscar(palabra) {

    let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + palabra;
    const resp = await fetch(url);
    data = await resp.json();
    if (data.data.length === 0) {
        resetSearch();
        ctnSearchBar.appendChild(iconSearch2);
        mostrarSinResultado(palabra);

    } else {
        resetSearch();
        ctnSearchBar.appendChild(iconSearch2);
        let headerSearch = document.getElementById("headerSearch");
        input = document.createElement('span');
        line = document.createElement('div');
        input.classList.add('input');
        line.classList.add('line');
        input.textContent = palabra;
        headerSearch.appendChild(line);
        headerSearch.appendChild(input);
        gifosContID.style.display = "grid";
        btnVerMasFavGif.style.display = "initial";


        let imgGifs

        for (let index = 0; index < 12; index++) {
            agregarCtn(data.data[index]);

        }

        gifosCont.appendChild($fragment);

    }
}


btnVerMasFavGif.addEventListener('click', () => {
    btnVerMasSearch(searchBar.value);

})
var clickVerMas = 0;
var i;
var x;

async function btnVerMasSearch(palabra) {
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + palabra;
    const resp = await fetch(url);
    const data = await resp.json();

    gifosContID.style.display = "grid";
    if (clickVerMas < 5) {
        clickVerMas++;
    }

    switch (clickVerMas) {
        case (1):
            i = 12;
            x = 23;
            break;
        case (2):
            i = 24;
            x = 35;
            break;
        case (3):
            i = 36;
            x = 47;
            break;
        case (4):
            i = 48;
            x = 49;
            btnVerMasFavGif.style.display = "none";
            break;
    }

    for (let index = i; index <= x; index++) {
        agregarCtn(data.data[index]);
    }

    gifosCont.appendChild($fragment);
}

function resetSearch() {

    gifosCont.style.display = "none";
    headerSearch.innerHTML = "";
    gifosCont.innerHTML = "";
    const media = matchMedia('(min-width: 1440px)');
    changeSize = mql => {
        mql.matches && searchBar.value != ""
            ? iconSearch2.style.opacity = 1 : iconSearch2.style.opacity = 0
    }
    media.addEventListener("change", changeSize);
    changeSize(media);;
    iconSearch2.style.left = '21px';
    iconSearch2.style.width = '20px';
    menuBurger.setAttribute.display = "contents";

    if (tema === 'dark') {
        iconSearch.setAttribute('src', "assets/close.svg");
        iconSearch2.setAttribute('src', "assets/icon-search.svg");
    } else if (tema === 'light') {
        iconSearch.setAttribute('src', "assets/close-modo-noct.svg");
        iconSearch2.setAttribute('src', "assets/icon-search-modo-noct.svg");
    }

}

iconSearch.addEventListener('click', () => {
    if (searchBar.value == "") {
        return;
    }
    if ((iconSearch.src == "http://127.0.0.1:5500/assets/close.svg") || (iconSearch.src == "http://127.0.0.1:5500/assets/close-modo-noct.svg")) {
        if (tema === "dark") {
            iconSearch.src = "assets/icon-search.svg";
        }
        if (tema === "light") {
            iconSearch.src = "assets/icon-search-modo-noct.svg";
        }
        (document.getElementById('ico')).style.opacity = 0;
        searchBar.value = "";
        gifCtn.style.display = "none";
        headerSearch.innerHTML = "";
        gifCtn.innerHTML = "";
        ctnSugeridas.innerHTML = "";
        for (let index = 0; index < uls.length; index++) {
            const element = uls[index];
            element.style.display = "none";

        }

        (document.getElementById('ico')).style.opacity = 0;
        btnVerMasFavGif.style.display = "none";
        gifCtn.innerHTML = ""
        gifosCont.innerHTML = "";
        return
    }

    if ((iconSearch.src == "http://127.0.0.1:5500/assets/icon-search.svg") || (iconSearch.src == "http://127.0.0.1:5500/assets/icon-search-modo-noct.svg")) {
        buscar(searchBar.value);
        ocultarSugeridas();

        if (tema === "dark") {
            iconSearch.src = "assets/close.svg";
        }
        if (tema === "light") {
            iconSearch.src = "assets/close-modo-noct.svg";
        }
        (document.getElementById('ico')).style.opacity = 1;
    }
   
});


let ctnIconSearchGifos;
let pelicula;
let pelicula1;
let ctnImgGifos;
let ctnImgGifosFav;
let nroImg = 0;
let nroPeli = 0;
let gif;
let nroGif = 0;
let nroImgFav = 0;
let nroPeliFav = 0;
let nroGifFav = 0;
let nroGifEl = 0;
let nroImgCreados = 0;
let nroPeliCreados = 0;
let nroGifCreados = 0;



//agrega los gifos del resultado de busqueda
function agregarCtn(gify) {
    $template.querySelector('img').setAttribute('src', gify.images.downsized.url);

    const media = matchMedia('(min-width: 1440px)');

    changeSize = mql => {
        if (mql.matches == true) {
            ctnIconSearchGifos = $template.querySelector('div');
            ctnIconSearchGifos.style.display = "none";
            pelicula = $template.querySelector('.pelicula');
            let $clone = document.importNode($template, true);
            let nroImgLocal = nroImg++;
            let nroPeliLocal = nroPeli++;
            let nroGifLocal = nroGif++;
            let nroGifElLocal = nroGifEl++;

            pelicula = $clone.querySelector(".pelicula");
            ctnImgGifos = $clone.querySelector(".ctnImg");
            ctnImgGifos
                .querySelector(".imgGif")
                .setAttribute('id', 'gif_' + nroGifLocal);

            ctnImgGifos
                .querySelector(".ctnIconSearchGifos")
                .setAttribute('id', 'img_' + nroImgLocal);
            ctnImgGifos
                .querySelector(".pelicula")
                .setAttribute('id', 'peli_' + nroPeliLocal);

            ctnImgGifos.addEventListener('mouseover', () => {
                let iconSearchGifos = document.getElementById('img_' + nroImgLocal);
                iconSearchGifos.style.display = "flex";


                let pel = document.getElementById('peli_' + nroPeliLocal);
                pel.style.display = "flex";

            })

            ctnImgGifos.addEventListener('mouseout', () => {
                let iconSearchGifos = document.getElementById('img_' + nroImgLocal);
                let pel = document.getElementById('peli_' + nroPeliLocal);
                iconSearchGifos.style.display = "none";
                pel.style.display = "none";
            })

            let icnFav = $clone.getElementById('icnFav');

            icnFav.addEventListener('click', () => {
                icnFav.setAttribute('src', "assets/icon-fav-active.svg");
                icnFav.style.background = 'white';
                icnFav.style.padding = '7px';
                icnFav.style.opacity = '100%';
                let imgUrlFav = document.getElementById('gif_' + nroGifLocal).getAttribute("src");
                arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");
                arrayFav.push(imgUrlFav);
                localStorage.setItem('arrayFav', JSON.stringify(arrayFav));
                verFav = JSON.parse(localStorage.getItem('arrayFav'));
            })

            let icnDescargar = $clone.getElementById('icnDescargar');
            icnDescargar.addEventListener('click', () => {
                var imgURL = gify.images.downsized.url;


                icnDescargar.setAttribute('src', "assets/icon-download-hover.svg");

                desc(imgURL);

                async function desc(imgURL) {
                    let a = document.createElement('a');
                    let response = await fetch(imgURL);
                    let file = await response.blob();
                    a.download = 'myGif';
                    a.href = window.URL.createObjectURL(file);
                    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                    a.click();
                };

            })

            let icnAmpliar = $clone.getElementById('icnAmpliar');
            let ctnAmpG = document.getElementById('ctnAmpG');

            ctnAmpG.style.display = "none";

            let closeAmpl;
            icnAmpliar.addEventListener('click', () => {
                icnAmpliar.setAttribute('src', "assets/icon-max-hover.svg");
                ctnAmpG.style.display = "block";
                ctnAmpG.style.height = "385px";

                ctnAmpG.style.marginTop = "0px";

                let imgAmp = gify.images.downsized.url;

                let ampliar = document.createElement('img');
                ampliar.classList.add('ampliar');
                ampliar.setAttribute('src', imgAmp);
                ctnAmpG.appendChild(ampliar);
                closeAmpl = document.createElement('img');
                closeAmpl.classList.add('closeAmpl');
                closeAmpl.setAttribute('src', "assets/close.svg");
                ctnAmpG.appendChild(closeAmpl);
                gifosCont.style.display = "none";
                btnVerMasFavGif.style.display = "none";
                closeAmpl.addEventListener('click', () => {
                    icnAmpliar.setAttribute('src', "assets/icon-max-normal.svg");
                    ctnAmpG.innerHTML = "";
                    ctnAmpG.style.display = "none";
                    gifosCont.style.display = "grid";
                    btnVerMasFavGif.style.display = "initial";
                })
            })


            $fragment.appendChild($clone);

        } else {
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        }
    }
    media.addEventListener("change", changeSize);
    changeSize(media);

}

function mostrarSinResultado(texto) {
    let input = document.createElement('span');
    let imgSinRes = document.createElement('img');
    let infosinRes = document.createElement('span');
    line = document.createElement('div');
    infosinRes.classList.add('infosinRes')
    imgSinRes.classList.add('imgSinRes');
    input.classList.add('input');
    line.classList.add('line');
    input.textContent = texto;
    infosinRes.textContent = "Intenta con otra búsqueda.";
    imgSinRes.setAttribute('src', "assets/icon-busqueda-sin-resultado.svg");
    gifCtn.appendChild(line);
    gifCtn.appendChild(input);
    gifCtn.appendChild(imgSinRes);
    gifCtn.appendChild(infosinRes);

}

checkBurger.addEventListener('click', () => {
    let statusCheck = document.getElementById('checkBurger').checked;
    switch (statusCheck) {
        case (true):
            menuBurger.style.display = "contents";
            burger.style.opacity = 0;
            close.style.opacity = 1;
            if ((gralFavorites.style.display == "contents")) {
                gralFavorites.style.display = "none";
                ctnGral.style.display = "contents";
                trending.style.display = "contents";
            } else if ((gralMisGifos.style.display == "contents")) {
                gralMisGifos.style.display = "none";
                gifosCreadosCont.style.display = "none";
                ctnGral.style.display = "contents";
                trending.style.display = "contents";
            }
            break;
        case (false):
            menuBurger.style.display = "none";
            burger.style.opacity = 1;
            close.style.opacity = 0;
    }
})
let verFav;

favorites.addEventListener('click', () => {
    gifFav.innerHTML = "";
    gifCtn.style.display = "none";
    gifosCreadosCont.style.display = "none";
    headerSearch.innerHTML = "";
    btnVerMasFavGif.style.display = "none";
    gifSinCont.style.display = "none";

    let arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");
    const media = matchMedia('(min-width: 1440px)');

    changeSize = mql => {
        if (mql.matches == true) {
            if (!arrayFav.length) {
                favSinCont.style.display = "flex";
            }
        }
        if (arrayFav.length) {
            favSinCont.style.display = "none";
            for (let index = 0; index < arrayFav.length; index++) {
                const element = arrayFav[index];
                agregarGifFav(element);
            }
            gifFav.appendChild($fragmentFav);
        }
    }
    media.addEventListener("change", changeSize);
    changeSize(media);

    headerSearch.innerHTML = "";
    gifosCont.innerHTML = "";
    searchBar.value = "";

    let visibilityFav = (document.getElementById('gralFavorites').style.display);

    changeSize = mql => {
        if (mql.matches == true) {
            switch (visibilityFav) {
                case (""):
                    menuBurger.style.display = "contents";
                    document.getElementById('favorites').classList.add('clickStyleFavDesk');
                    gralFavorites.style.display = "contents";
                    trendingGifos.style.display = "flex";
                    ctnGral.style.display = "none";
                    trending.style.display = "none";
                    document.getElementById('gifos').classList.remove('clickStyleFavDesk');
                    gralMisGifos.style.display = "";
                    ctnGralCrearGifo.style.display = "none";
                    ctnSeparador.style.display = "none";
                    crearGifo.setAttribute('src', "assets/button-crear-gifo.svg");
                    gifFav.style.display = "grid";
                    ctnAmpG.innerHTML = "";
                    ctnAmpG.style.display = "none";
                    ctnAmpCreados.innerHTML = "";
                    ctnAmpCreados.style.display = "none";
                    break;
                case ("none"):
                    menuBurger.style.display = "contents";
                    document.getElementById('favorites').classList.add('clickStyleFavDesk');
                    gralFavorites.style.display = "contents";
                    crearGifo.setAttribute('src', "assets/button-crear-gifo.svg");
                    trendingGifos.style.display = "flex";
                    ctnGral.style.display = "none";
                    trending.style.display = "none";
                    document.getElementById('gifos').classList.remove('clickStyleFavDesk');
                    gralMisGifos.style.display = "";
                    ctnGralCrearGifo.style.display = "none";
                    ctnSeparador.style.display = "none";
                    ctnAmpCreados.innerHTML = "";
                    ctnAmpCreados.style.display = "none";

                    break;
                case ("contents"):
                    menuBurger.style.display = "contents";
                    iconSearch.src = "assets/icon-search.svg";
                    if (document.getElementById('ico')) {
                        (document.getElementById('ico')).style.opacity = 0;
                    }

                    document.getElementById('favorites').classList.remove('clickStyleFavDesk');
                    gralFavorites.style.display = "none";
                    gralMisGifos.style.display = "";
                    ctnGral.style.display = "contents";
                    trending.style.display = "contents";
                    gifCtn.innerHTML = "";
                    gifosCont.style.display = "";
                    trendingGifos.style.display = "flex";
                    ctnGralCrearGifo.style.display = "none";
                    ctnSeparador.style.display = "none";
                    gifosCreadosCont.style.display = "none";
                    btnVerMasFavGif.style.display = "none";
                    ctnAmpG.innerHTML = "";
                    ctnAmpG.style.display = "none";

                    break;
            }
        } else {
            menuBurger.style.display = "none";
            checkBurger.checked = false;
            burger.style.opacity = 1;
            close.style.opacity = 0;
            gralFavorites.style.display = "contents";
            ctnGral.style.display = "none";
            trending.style.display = "none";
            gralMisGifos.style.display = "";
            ctnGralCrearGifo.style.display = "none";
            trendingGifos.style.display = "inherit";
            favSinCont.style.display = "none";

        }

    }

    media.addEventListener("change", changeSize);
    changeSize(media);

})
let favActive;

function agregarCtnFav(element) {
    $templateFav.querySelector('img').setAttribute('src', element);
    const media = matchMedia('(min-width: 1440px)');

    changeSize = mql => {
        if (mql.matches == true) {
            let ctnIconSearchGifosFav = $templateFav.querySelector(".ctnIconSearchGifosFav");
            ctnIconSearchGifosFav.style.display = "none";

            pelicula1 = $templateFav.querySelector('.peliculaFav');

            let $clone1 = document.importNode($templateFav, true);
            let nroImgFavLocal = nroImgFav++;
            let nroPeliFavLocal = nroPeliFav++;
            let nroGifFavLocal = nroGifFav++;
            pelicula1 = $clone1.querySelector('.peliculaFav');
            ctnImgGifosFav = $clone1.querySelector(".ctnImgFav");
            ctnImgGifosFav
                .querySelector(".imgGifFav")
                .setAttribute('id', 'gif_' + nroGifFavLocal);

            ctnImgGifosFav
                .querySelector(".ctnIconSearchGifosFav")
                .setAttribute('id', 'img_' + nroImgFavLocal);
            ctnImgGifosFav
                .querySelector(".peliculaFav")
                .setAttribute('id', 'peli_' + nroPeliFavLocal);

            ctnImgGifosFav.addEventListener('mouseover', () => {
                let iconSearchGifosFav = document.getElementById('img_' + nroImgFavLocal);
                iconSearchGifosFav.style.display = "flex";
                icnFav1.setAttribute('src', "assets/icon-fav-active.svg");
                favActive = true;
                icnFav1.style.background = 'white';
                icnFav1.style.padding = '7px';
                ctnIconSearchGifosFav.style.opacity = '70%';
                ctnIconSearchGifosFav.setAttribute.marginRight = "10px";
                ctnIconSearchGifosFav.setAttribute.marginTop = "10px";
                ctnIconSearchGifosFav.setAttribute.height = "32px";
                ctnIconSearchGifosFav.setAttribute.width = "32px";

                let pel = document.getElementById('peli_' + nroPeliFavLocal);
                pel.style.display = "flex";

            })

            ctnImgGifosFav.addEventListener('mouseout', () => {
                let iconSearchGifosFav = document.getElementById('img_' + nroImgFavLocal);
                let pel = document.getElementById('peli_' + nroPeliFavLocal);
                iconSearchGifosFav.style.display = "none";
                pel.style.display = "none";
            })

            function deleteItemFav(array, item) {
                var i = array.indexOf(item);
                if (i != -1) {
                    array.splice(i, 1);
                    localStorage.setItem('arrayFav', JSON.stringify(array));
                    arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");
                }

            }



            let icnFav1 = $clone1.getElementById('icnFav1');

            icnFav1.addEventListener('click', () => {
                if (favActive) {
                    //quitar de favoritos
                    icnFav1.setAttribute('src', "assets/icon-fav.svg");
                    icnFav1.style.padding = '0px';
                    let imgUrlFav = document.getElementById('gif_' + nroGifFavLocal).getAttribute("src");
                    arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");
                    deleteItemFav(arrayFav, imgUrlFav);
                    favActive = false;
                } else {
                    icnFav1.setAttribute('src', "assets/icon-fav-active.svg");
                    icnFav1.style.background = 'white';
                    icnFav1.style.padding = '7px';
                    icnFav1.style.opacity = '100%';
                    favActive = true;
                    let imgUrlFav = document.getElementById('gif_' + nroGifFavLocal).getAttribute("src");
                    arrayFav = JSON.parse(localStorage.getItem('arrayFav') || "[]");
                    arrayFav.push(imgUrlFav);
                    localStorage.setItem('arrayFav', JSON.stringify(arrayFav));
                    verFav = JSON.parse(localStorage.getItem('arrayFav'));
                }



            })

            let icnDescargar1 = $clone1.getElementById('icnDescargar1');
            icnDescargar1.addEventListener('click', () => {
                var imgURL = element;
                icnDescargar1.setAttribute('src', "assets/icon-download-hover.svg");

                desc(imgURL);

                async function desc(imgURL) {
                    let a = document.createElement('a');
                    let response = await fetch(imgURL);
                    let file = await response.blob();
                    a.download = 'myGif';
                    a.href = window.URL.createObjectURL(file);
                    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                    a.click();
                };

            })

            let icnAmpliar1 = $clone1.getElementById('icnAmpliar1');
            let ctnAmp = document.getElementById('ctnAmp');
            ctnAmp.style.display = "none";
            let closeAmpl;
            icnAmpliar1.addEventListener('click', () => {
                icnAmpliar1.setAttribute('src', "assets/icon-max-hover.svg");
                ctnAmp.style.display = "block";
                ctnAmp.style.height = "385px";
                ctnAmp.style.marginTop = "0px";
                let ampliar = document.createElement('img');
                ampliar.classList.add('ampliar');
                ampliar.setAttribute('src', element);
                ctnAmp.appendChild(ampliar);
                closeAmpl = document.createElement('img');
                closeAmpl.classList.add('closeAmpl');
                closeAmpl.setAttribute('src', "assets/close.svg");
                ctnAmp.appendChild(closeAmpl);
                gifFav.style.display = "none";
                btnVerMasFavGif.style.display = "none";
                closeAmpl.addEventListener('click', () => {
                    icnAmpliar1.setAttribute('src', "assets/icon-max-normal.svg");
                    ctnAmp.innerHTML = "";
                    ctnAmp.style.display = "none";
                    gifFav.style.display = "grid";
                })
            })


            $fragmentFav.appendChild($clone1);

        } else {
            gifFav.style.paddingTop = "87px";
            let $clone1 = document.importNode($templateFav, true);
            $fragmentFav.appendChild($clone1);

        }
    }
    media.addEventListener("change", changeSize);
    changeSize(media);

}


gifos.addEventListener('click', () => {
    if (arrayVideos.length) {
        for (let index = 0; index < arrayVideos.length; index++) {
            agregarGifos(index);

        }

    }

    let visibilityGif = (document.getElementById('gralMisGifos').style.display);
    const media = matchMedia('(min-width: 1440px)');
    gifosCont.innerHTML = "";
    gifosCreadosCont.innerHTML = "";
    headerSearch.style.display = "none";
    btnVerMasFavGif.style.display = "none";
    btnVerMasGifos.style.display = "none";
    ctnGralCrearGifo.style.display = "none";
    ctnSeparador.style.display = "none";
    trendingGifos.style.display = "grid";
    searchBar.value = "";
    changeSize = mql => {

        if (mql.matches == true) {
            if (!arrayVideos.length) {
                gifSinCont.style.display = "flex";

            }

            switch (visibilityGif) {
                case (""):
                    gifCtn.style.display = "none";
                    headerSearch.style.display = "none";
                    menuBurger.style.display = "contents";
                    document.getElementById('gifos').classList.add('clickStyleFavDesk');
                    gralMisGifos.style.display = "contents";
                    crearGifo.setAttribute('src', "assets/button-crear-gifo.svg");
                    document.getElementById('favorites').classList.remove('clickStyleFavDesk');
                    gralFavorites.style.display = "none";
                    ctnGral.style.display = "none";
                    trending.style.display = "none";
                    trendingGifos.style.display = "flex";
                    gifosCont.style.display = "contents";
                    gifosContID.style.display = "grid";
                    gifosCreadosCont.style.display = "grid";
                    ctnAmpG.innerHTML = "";
                    ctnAmpG.style.display = "none";

                    break;

                case ("contents"):
                    gifosCont.style.display = "none";
                    menuBurger.style.display = "contents";
                    iconSearch.src = "assets/icon-search.svg";
                    if (document.getElementById('ico')) {
                        (document.getElementById('ico')).style.opacity = 0;
                    }

                    document.getElementById('gifos').classList.remove('clickStyleFavDesk');
                    gralMisGifos.style.display = "";
                    gifSinCont.style.display = "";
                    gifosCont.style.display = "none";
                    ctnGral.style.display = "contents";
                    trending.style.display = "contents";
                    trending.classList.add('.trending');
                    gifosCreadosCont.style.display = "none";
                    ctnAmpCreados.innerHTML = "";
                    ctnAmpCreados.style.display = "none";

                    break;
            }
        } else {

            menuBurger.style.display = "none";
            checkBurger.checked = false;
            gralMisGifos.style.display = "contents";
            gifosCont.style.display = "contents";
            gifosCont.style.paddingTop = "83px";
            gifosContID.style.display = "grid";
            gifosCreadosCont.style.display = "grid";
            ctnGral.style.display = "none";
            trending.style.display = "none";
            gralFavorites.style.display = "none";
            burger.style.opacity = 1;
            close.style.opacity = 0;
        }

    }

    media.addEventListener("change", changeSize);
    changeSize(media);

})


//Agrega en MIS GIFOS los gifos creados y guardados en el localStorage
function agregarGifs(gify) {

    let a = gify.images.downsized.url;
    $templateGifosCreados.querySelector('img').setAttribute('src', gify.images.downsized.url);
    const media = matchMedia('(min-width: 1440px)');
    let ctnIconSearchGifosCreados = $templateGifosCreados.querySelector('div');
    ctnIconSearchGifosCreados.style.display = "none";
    changeSize = mql => {
        if (mql.matches == true) {
            ctnIconSearchGifosCreados.style.display = "none";
            peliculaCreados = $templateGifosCreados.querySelector('.peliculaCreados');
            let $clone2 = document.importNode($templateGifosCreados, true);
            let nroImgLocalCreados = nroImgCreados++;
            let nroPeliLocalCreados = nroPeliCreados++;
            let nroGifLocalCreados = nroGifCreados++;

            peliculaCreados = $clone2.querySelector(".peliculaCreados");
            ctnImgGifosCreados = $clone2.querySelector(".ctnImgGifosCreados");
            ctnImgGifosCreados
                .querySelector(".imgGifosCreados")
                .setAttribute('id', 'gif_' + nroGifLocalCreados);

            ctnImgGifosCreados
                .querySelector(".ctnIconSearchGifosCreados")
                .setAttribute('id', 'img_' + nroImgLocalCreados);
            ctnImgGifosCreados
                .querySelector(".peliculaCreados")
                .setAttribute('id', 'peli_' + nroPeliLocalCreados);

            ctnImgGifosCreados.addEventListener('mouseover', () => {
                let iconSearchGifosCreados = document.getElementById('img_' + nroImgLocalCreados);
                iconSearchGifosCreados.style.display = "flex";
                let pel = document.getElementById('peli_' + nroPeliLocalCreados);
                pel.style.display = "flex";

            })

            ctnImgGifosCreados.addEventListener('mouseout', () => {
                let iconSearchGifosCreados = document.getElementById('img_' + nroImgLocalCreados);
                let pel = document.getElementById('peli_' + nroPeliLocalCreados);
                iconSearchGifosCreados.style.display = "none";
                pel.style.display = "none";
            })

            function deleteItemVid(array, item) {
                var i = array.indexOf(item);
                array.splice(i, 1);
                localStorage.setItem('arrayVideos', JSON.stringify(array));
                arrayVideos = JSON.parse(localStorage.getItem('arrayVideos') || "[]");

            }

            let icnEliminar = $clone2.getElementById('icnEliminar');

            icnEliminar.addEventListener('click', () => {
                icnEliminar.setAttribute('src', "assets/icon-trash-hover.svg");
                icnEliminar.style.background = 'white';
                icnEliminar.style.opacity = '100%';
                let imgUrlVid = document.getElementById('gif_' + nroGifLocalCreados).getAttribute("src");
                arrayVideos = JSON.parse(localStorage.getItem('arrayVideos') || "[]");
                deleteItemVid(arrayVideos, imgUrlVid);
            })


            let icnDescargar2 = $clone2.getElementById('icnDescargar2');
            icnDescargar2.addEventListener('click', () => {
                var imgURL = gify.images.downsized.url;

                icnDescargar2.setAttribute('src', "assets/icon-download-hover.svg");

                desc(imgURL);

                async function desc(imgURL) {
                    let a = document.createElement('a');
                    let response = await fetch(imgURL);
                    let file = await response.blob();
                    a.download = 'myGif';
                    a.href = window.URL.createObjectURL(file);
                    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                    a.click();
                };

            })

            let icnAmpliar2 = $clone2.getElementById('icnAmpliar2');
            let ctnAmpCreados = document.getElementById('ctnAmpCreados');

            ctnAmpCreados.style.display = "none";

            let closeAmpl;
            icnAmpliar2.addEventListener('click', () => {
                icnAmpliar2.setAttribute('src', "assets/icon-max-hover.svg");
                ctnAmpCreados.style.display = "block";
                ctnAmpCreados.style.height = "385px";

                ctnAmpCreados.style.marginTop = "0px";

                let imgAmp = gify.images.downsized.url;

                let ampliar = document.createElement('img');
                ampliar.classList.add('ampliar');
                ampliar.setAttribute('src', imgAmp);
                ctnAmpCreados.appendChild(ampliar);
                closeAmpl = document.createElement('img');
                closeAmpl.classList.add('closeAmpl');
                closeAmpl.setAttribute('src', "assets/close.svg");
                ctnAmpCreados.appendChild(closeAmpl);
                gifosCreadosCont.style.display = "none";
                btnVerMasGifos.style.display = "none";
                closeAmpl.addEventListener('click', () => {
                    icnAmpliar2.setAttribute('src', "assets/icon-max-normal.svg");
                    ctnAmpCreados.innerHTML = "";
                    ctnAmpCreados.style.display = "none";
                    gifosCreadosCont.style.display = "grid";
                    btnVerMasGifos.style.display = "initial";
                })
            })


            $fragmentGifosCreados.appendChild($clone2);

        } else {
            let $clone2 = document.importNode($templateGifosCreados, true);
            $fragmentGifosCreados.appendChild($clone2);
        }
    }
    media.addEventListener("change", changeSize);
    changeSize(media);

}


function agregarGifFav(gify) {
    const media = matchMedia('(min-width: 1440px)');

    changeSize = mql => {
        if (mql.matches == true) {
            agregarCtnFav(gify);

        } else {

            agregarCtnFav(gify);
        }
    }

    media.addEventListener("change", changeSize);
    changeSize(media);

}

searchTrendingGifos();
async function searchTrendingGifos() {
    let url = 'https:/api.giphy.com/v1/gifs/trending?api_key=' + api_key;
    const resp = await fetch(url);
    data = await resp.json();


    for (let i = 0; i < data.data.length; i++) {
        agregarCtnTrendingGifos(data.data[i]);
    }
    var ver22 = data.data.length;

}

var gifosContScroll = document.getElementById('gifosContScroll');

async function agregarGifos(index) {
    if (!arrayVideos.length) {
        return;
    }
    let url = 'https://api.giphy.com/v1/gifs?api_key=' + api_key + '&ids=' + arrayVideos[index];
    const resp = await fetch(url);
    data = await resp.json();
    agregarGifs(data.data[0]);
    gifosCreadosCont.append($fragmentGifosCreados);
}

var imgTrendingG;
function agregarCtnTrendingGifos(trendingG) {

    imgTrendingG = document.createElement('img');
    imgTrendingG.classList.add('imagenesTrending');
    imgTrendingG.setAttribute('src', trendingG.images.downsized.url);
    gifosContScroll.appendChild(imgTrendingG);

}


let one = false;
let two = false;
let stream;

btnComenzar.addEventListener('click', async (e) => {
    if (flagComenzar == false) {
        btnComenzar.style.display = "none";
        paso1.style.display = "contents";
        paso0.style.display = "none";
        p1.style.background = '#572EE5';
        p1.style.color = 'white';

        var p = navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 480, height: 320 }
        });

        p.then(function (mediaStream) {

            document.querySelector('video').srcObject = mediaStream;
            p2.style.background = '#572EE5';
            p2.style.color = 'white';
            p1.style.background = 'white';
            p1.style.color = '#572EE5';
            paso0.style.display = "none";
            paso1.style.display = "none";
            paso2.style.display = "contents";
            document.querySelector('video').style.display = 'block';
            btnGrabar.style.display = "initial";
            video.play();
            two = true;

        });
        p.catch(function (err) {
            console.log(err);
        });

        flagComenzar = true;
        one = true;
    }
})


p1.addEventListener('click', () => {

    if (flagComenzar == true) {
        document.querySelector('video1').style.display = 'none';
        paso1.style.display = "contents";
        paso0.style.display = "none";
        p1.style.background = '#572EE5';
        p1.style.color = 'white';
        p2.style.background = 'white';
        p2.style.color = '#572EE5';
        p3.style.background = 'white';
        p3.style.color = '#572EE5';
        btnGrabar.style.display = "none";
        btnFinalizar.style.display = "none";
        btnSubirGifo.style.display = "none";
        btnComenzar.style.display = "initial";
        flagComenzar = false;
        one = false;
        two = false;
        return

    }
    if (one == true) {
        p1.style.background = 'white';
        p1.style.color = '#572EE5';
        p2.style.background = 'white';
        p2.style.color = '#572EE5';
        btnComenzar.style.display = "initial";
        btnGrabar.style.display = "none";
        flagComenzar = false;
        one = false;

    }
})
p2.addEventListener('click', () => {
    if (flagComenzar == true && one == true && two == false) {
        p2.style.background = '#572EE5';
        p2.style.color = 'white';
        p1.style.background = 'white';
        p1.style.color = '#572EE5';
        paso0.style.display = "none";
        paso1.style.display = "none";
        paso2.style.display = "contents";

        document.querySelector('video1').style.display = 'block';
        btnGrabar.style.display = "initial";
        two = true;

        return
    }


})
let repCaptura = document.getElementById("repetirCaptura");
let btnFinalizar = document.getElementById("btnFinalizar");
let btnSubirGifo = document.getElementById("btnSubirGifo");
let CtnRepetirCaptura = document.getElementById("CtnRepetirCaptura");
let timer = document.getElementById("timer");
let recorder;
btnGrabar.addEventListener('click', () => {

    var p = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 480, height: 320 }
    });



    p.then(function (mediaStream) {

        recorder = RecordRTC(mediaStream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            with: 360,
            hidden: 240,
            onGifRecordingStarted: function () {
                console.log('star');
            }
        })

        recorder.startRecording();
        btnFinalizar.style.display = "initial";
        btnGrabar.style.display = "none";
    })
})

let fil;
let form;
let idGifo;
let videos;
let xx = 0;


btnFinalizar.addEventListener('click', () => {


    recorder.stopRecording();
    video.pause();
    CtnRepetirCaptura.style.display = "flex";
    btnSubirGifo.style.display = "initial";
    btnFinalizar.style.display = "none";
    form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');

})

repCaptura.addEventListener('click', () => {
    video.play();
    recorder.startRecording();

    btnGrabar.style.display = "initial";
    CtnRepetirCaptura.style.display = "none";
    btnSubirGifo.style.display = "none";
})



var arrayVideos = JSON.parse(localStorage.getItem('arrayVideos') || "[]");

let check;
let rectangulo = document.getElementById('rectangulo');



btnSubirGifo.addEventListener('click', () => {
    btnSubirGifo.style.display = "none";
    CtnRepetirCaptura.style.display = "none";
    p3.style.background = '#572EE5';
    p3.style.color = 'white';
    p2.style.background = 'white';
    p2.style.color = '#572EE5';
    gifoOk = document.createElement('div');
    gifoOk.setAttribute('id', 'gifoOk');
    check = document.createElement('img');
    check.setAttribute('id', 'checkGif');
    gifoOk.style.position = 'absolute';
    check.style.position = 'absolute';
    check.setAttribute('src', "assets/check.svg");
    gifoOk.innerHTML = 'GIFO subido con éxito';
    check.style.top = '250px';
    gifoOk.style.top = '277px';

    rectangulo.appendChild(check);
    rectangulo.appendChild(gifoOk);
    subirGifo(fil);
    flagComenzar = false;

})

async function subirGifo(file) {
    return fetch('https://upload.giphy.com/v1/gifs?api_key=' + api_key, {
        method: "POST",
        body: form,
        json: true
    })
        .then(response => response.json())
        .then(data => {
       /*  var */ arrayVideos = JSON.parse(localStorage.getItem('arrayVideos') || "[]");
            arrayVideos.push(data.data.id);
            localStorage.setItem('arrayVideos', JSON.stringify(arrayVideos));
            let a = JSON.parse(localStorage.getItem('arrayVideos'));
        })
}

