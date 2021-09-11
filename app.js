const imageApi = 'https://image.tmdb.org/t/p/w500';
const api = 'https://api.themoviedb.org/3/';
const key = 'e7323ffc75e19baad754c2484c351a0a'

 const peliculas = (url_popular = '') => {
 

    fetch(
      api + url_popular +
        new URLSearchParams({
            api_key: key,
            language: 'es-ES',
            
        })
    ) .then((response) => {
      if (response.status !== 200) {
        console.log(`Error: ${response.statusText} Codigo: ${response.status}`);
        return;
      }
      // no hay problemas, podemos ver el contenido
    
        response.json().then((data) => {

         if(data.genres) console.log(data.genres.map(o => o.name));
          //console.log(data.genres);
         if(data.results) imprimirHTML(data.results);
                       
        });
    });

  
};




function imprimirHTML(peliculas) {
    let html = "";
    let html_comedia = "";

    console.log(peliculas);
    peliculas.forEach((obj) => {
      
        
    html += `
        <li>
            Nombre: ${obj.title}
            <br/>
            <aside>Fecha de lanzamiento: ${obj.release_date}</aside>
            <img src="${imageApi}${obj.poster_path}" width="100" height="120">
        </li>
        `;
  });
  const contenedorApp = document.querySelector("#app");
  contenedorApp.innerHTML = html;
}

peliculas("movie/popular?");
peliculas("genre/movie/list?");



