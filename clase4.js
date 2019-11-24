// Callbacks Jquery Promesas
const API_URL     = 'https://swapi.co/api/'
const PEOPLE_URL  = 'people/:id'

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    const opts    = { crossDomain: true }
    $
      .get(url, opts, function(data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log('Paila socio')
}

async function obtenerPersonajes() {
  var ids        = [1,2,3,4,5,6,7]
  var promesas   = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes);
  } catch (id) {
    onError(id)
  }

}

obtenerPersonajes()
