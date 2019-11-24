// mensaje usuario se guarda
var  signo = prompt('¿Cuál es tú signo?')

// Condicional Switch
switch (signo) {
  case 'acuario':
    console.log('paja numero 1');
    break;
  case 'sagitario':
    console.log('paja numero 2');
    break;
  case 'geminis':
  case 'géminis':
    console.log('paja numero 3');
    break;
  default:
    console.log('escriba bien lk');
}

// Arreglos

var felipe = {
  nombre: 'Felipe',
  apellido: 'Salamanca',
  altura: 1.72,
  cantidadDeLibros: 3
}
var alan = {
  nombre: 'Alan',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 473
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.82,
  cantidadDeLibros: 103
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 4
}
var paula = {
  nombre: 'Paula',
  apellido: 'Barrios',
  altura: 1.65,
  cantidadDeLibros: 11
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.59,
  cantidadDeLibros: 13
}

var personas = [felipe, alan, martin, dario, paula, vicky]

for(var i=0; i < personas.length; i++)
{
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} m`)
}

// Filtrar arreglos

const esAlta = (persona) => {
  return persona.altura > 1.8
}

var personasAltas = personas.filter(esAlta)

for(var i=0; i < personasAltas.length; i++)
{
  var persona = personasAltas[i]
  console.log(`${persona.nombre} mide ${persona.altura} m`)
}

// Transformar arrays
const pasarAlturaACm = persona => {
  return {
    ...persona,
    altura: persona.altura *= 100
  }
}

var personasCm = personas.map(pasarAlturaACm)

for(var i=0; i < personasCm.length; i++)
{
  var persona = personasCm[i]
  console.log(`${persona.nombre} mide ${persona.altura} cm`)
}

// Reducir array
const reducer = (acum, persona) => {
  return acum + personas.cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)
var acum = 0

for(var i=0; i < personas.length; i++)
{
  acum = acum + personas[i].cantidadDeLibros
}

console.log(`Hay ${acum} libros`);
