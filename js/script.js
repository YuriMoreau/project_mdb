'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const promo = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list");

    

        const deleteAdv = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        };

        deleteAdv(promo);



    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    makeChanges();

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

   

    const addForm = document.querySelector('form.add');
    const addInput = document.querySelector('.adding__input');
    const checkbox = document.querySelector('[type="checkbox"]');
    const btn = document.querySelector('button');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);

        event.target.reset();
    });


    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `
        });
    }

    createMovieList(movieDB.movies, movieList);

    //console.log(movieDB.movies);
});

