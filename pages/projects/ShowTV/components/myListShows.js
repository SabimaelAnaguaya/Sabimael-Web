const d = document,
    $shows = d.getElementById('shows'),
    $template = d.getElementById('show-template').content,
    $fragment = d.createDocumentFragment()

export default function myListShows(){
  
  fetch('https://api.tvmaze.com/shows')
  .then(res =>res.json())
  .then(json => {

    const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const filteredData = Object.values(json).filter(obj => randomNumbers.includes(obj.id));
    
    filteredData.forEach(el =>{
      
            $template.querySelector('h3').innerHTML = el.name;

            $template.querySelector('div').innerHTML = el.summary ? el.summary : 'No description'

            $template.querySelector('img').src = el.image.medium ? el.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
            $template.querySelector('img').alt = el.name
            $template.querySelector('a').href = el.url ? el.url : '#'
            $template.querySelector('a').target = el.url ? '_blank' : '_self'
            $template.querySelector('a').textContent = el.url ? 'More' : ''

            let clone = d.importNode($template, true);

            $fragment.appendChild(clone)
          })

          $shows.appendChild($fragment) 
  })
}