import myListShows from "./myListShows.js";

const d = document,
    $shows = d.getElementById('shows'),
    $template = d.getElementById('show-template').content,
    $fragment = d.createDocumentFragment()
export default function searchShows(){
      
d.addEventListener("keypress", async e =>{
  if(e.target.matches('#search')) {
    //console.log(e.key, e.keyCode)
    if(e.key === 'Enter'){
      //console.log(e.key)

      try {
        $shows.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="Cargando">`
        console.log(e.target.value.toLowerCase())

        let query = e.target.value.toLowerCase(),
            api = `https://api.tvmaze.com/search/shows?q=${query}`,
            res = await fetch(api),
            json = await res.json();

            //console.log(api, res, json)

        if(!res.ok) throw {status: res.status, statusText: res.statusText}

        if(json.length === 0 ){
          let $div = d.createElement('div')
          $div.className = 'no-found'
          $div.innerHTML = `<p>No existen resultados de shows con el criterio de busqueda <b>${query.toUpperCase()}</b></p>`
          $shows.innerHTML = '';
          $shows.insertAdjacentElement('beforebegin', $div) 
          setTimeout(()=>{
            d.querySelector('.no-found').remove()
          },5000)
          
          myListShows()
        }else{
          json.forEach(el =>{
            $shows.innerHTML = ''

            $template.querySelector('h3').innerHTML = el.show.name;

            $template.querySelector('div').innerHTML = el.show.summary ? el.show.summary : 'No description'

            $template.querySelector('img').src = el.show.image.medium ? el.show.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
            $template.querySelector('img').alt = el.show.name
            $template.querySelector('a').href = el.show.url ? el.show.url : '#'
            $template.querySelector('a').target = el.show.url ? '_blank' : '_self'
            $template.querySelector('a').textContent = el.show.url ? 'More' : ''

            let clone = d.importNode($template, true);

            $fragment.appendChild(clone)
          })

          $shows.appendChild($fragment)
        }



      } catch (err) {
        console.error(err)
        let message = err.statusText || 'Ocurrio un error'
        $shows.innerHTML = `<p>Error ${err.status}: ${err.statusText}</p>`
      }
    }
  }
})
}