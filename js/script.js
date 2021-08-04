'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const promo = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]'),
        btn = document.querySelector('button');

    
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

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm){
            if (newFilm.length>21){
                newFilm = newFilm.slice(0,21) + "...";
            }

            if (favorite){
                console.log('Dobavlaem lubimy film!');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        
        event.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films, parent);
            });
        });
    }
    createMovieList(movieDB.movies, movieList);

});

