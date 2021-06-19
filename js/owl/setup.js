function playCarrousel() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
}

const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=03c289251eafe042b3a223b60229cb92&language=pt-BR";
fetch(url)
    .then(resp => resp.json())
    .then(ret => {
        var divs = document.getElementsByClassName("c");
        var j = 0;
        for (var i = 10; i < 30; i++) {
            //divs[i]
            element = ret.results[j];
            let imagem = document.createElement("img");
            imagem.src =
                "https://image.tmdb.org/t/p/w600_and_h900_face" + element.poster_path;
            imagem.classList.add("box-filme");
            imagem.alt = "Banner do filme " + element.title;

            let info = document.createElement("div");
            //info.setAttribute("style","display:none;")
            info.setAttribute("class", "overlay");

            let name = document.createElement("p");
            name.innerHTML = element.title;




            let button = document.createElement("button");
            let t = document.createElement("i");

            t.setAttribute("class", "fas fa-info-circle");
            button.setAttribute("onclick", "irPagina(" + element.id + ",'filme')");
            button.setAttribute("class", "botao");
            button.appendChild(t);
            button.innerHTML = button.innerHTML + "Mais informações";

            let div = document.createElement("div");

            div.appendChild(name);
            div.appendChild(button);


            info.appendChild(div);

            divs[i].appendChild(imagem);
            divs[i].appendChild(info);

            j++;
        }
        j = 10;
        for (var i = 0; i < 10; i++) {
            element = ret.results[j];
            let imagem = document.createElement("img");
            imagem.src =
                "https://image.tmdb.org/t/p/w600_and_h900_face" + element.poster_path;
            imagem.classList.add("box-filme");
            imagem.alt = "Banner do filme " + element.title;

            let info = document.createElement("div");
            //info.setAttribute("style","display:none;")
            info.setAttribute("class", "overlay");

            let name = document.createElement("p");
            name.innerHTML = element.title;




            let button = document.createElement("button");
            button.setAttribute("class", "botao");

            let t = document.createElement("i");
            t.setAttribute("class", "fas fa-info-circle");

            button.setAttribute("onclick", "irPagina(" + element.id + ",'filme')");
            button.appendChild(t);
            button.innerHTML = button.innerHTML + "Mais informações";
            let div = document.createElement("div");

            div.appendChild(name);
            div.appendChild(button);


            info.appendChild(div);

            divs[i].appendChild(imagem);
            divs[i].appendChild(info);

            j++;
        }
        j = 0;
        for (var i = 30; i < 40; i++) {
            element = ret.results[j];
            let imagem = document.createElement("img");
            imagem.src =
                "https://image.tmdb.org/t/p/w600_and_h900_face" + element.poster_path;
            imagem.classList.add("box-filme");
            imagem.alt = "Banner do filme " + element.title;

            let info = document.createElement("div");
            //info.setAttribute("style","display:none;")
            info.setAttribute("class", "overlay");

            let name = document.createElement("p");
            name.innerHTML = element.title;

            let button = document.createElement("button");
            button.setAttribute("class", "botao");

            let t = document.createElement("i");
            t.setAttribute("class", "fas fa-info-circle");

            button.setAttribute("onclick", "irPagina(" + element.id + ",'filme')");
            button.appendChild(t);
            button.innerHTML = button.innerHTML + "Mais informações";

            let div = document.createElement("div");

            div.appendChild(name);
            div.appendChild(button);

            info.appendChild(div);

            divs[i].appendChild(imagem);
            divs[i].appendChild(info);

            j++;
        }
    });

playCarrousel();

function irPagina(id,tipo){
    window.location = "filmesSeries.html?"+id+"-"+tipo;
}

