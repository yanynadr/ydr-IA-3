//acá ingresar tu api key después del =
const NEWS_API=`https://newsapi.org/v2/everything?q=AI&apiKey=03c51cc3aeb84de9b2450836525aec6b`;

const noticia = document.querySelector('#noticias');
const title = document.querySelector('#title');
const author = document.querySelector('#author');



   
    const res = fetch(
        NEWS_API)
        .then((response) => {
        if (response.ok) {
            response.json().then((results) => {
                console.log(results);
                console.log(results.articles );
                //en este caso le pedi la noticia nro 4 al array de articles
                console.log(results.articles[3].title );
                console.log(results.articles[3].content );
                console.log(results.articles[3].author );
                title.innerHTML=(results.articles[3].title );
                noticia.innerHTML+=(results.articles[3].content );
                author.innerHTML+=(results.articles[3].author );
            });
        }
    });

