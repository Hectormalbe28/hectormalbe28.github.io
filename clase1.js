// Variables
var nombre, apellido, nombreCompleto
var edad
var nombreMayusculas
var apellidoMinisculas
var primeraLetra
var cantidadLetras

// Asignación
nombre              = 'Hector'
apellido            = 'Crack'
edad                = 21

// Variables inicializadas
var peso        = 60
var sandwich    = 2
var precioVino  = 5.7
var total       = 0
var totalStr    = ''
var totalInt    = 0

// Metodos
nombreMayusculas    = nombre.toUpperCase()
apellidoMinisculas  = apellido.toLowerCase()
primeraLetra        = nombre.charAt(0)
cantidadLetras      = nombre.length

// Concatenación
nombreCompleto =  `${nombreMayusculas} ${apellido.toUpperCase()}`

// Substrings
var str   = nombre.charAt(1)  + nombre.charAt(2)
var str1  = nombre.substr(1,2)

// Última letra
var ultimaLetra = nombre.charAt(cantidadLetras-1)

// Acumular variable = variable + 1
edad        +=  1
peso        -=  5
peso        +=  sandwich
precioVino  *=  5

// Redondear
total     = Math.round(precioVino)
totalStr  = total.toFixed(2)

// Cambio tipo de variable
totalInt  = parseFloat(totalStr)

// Funciones
function imprimirEdad(name, age) {
  console.log(`${name} tiene ${age} años`)
}

function imprimirNombreMayusculas(namePerson) {
  // var nombre = namePerson.nombre
  var { nombre } = namePerson
  console.log(nombre.toUpperCase());
}

function imprimirSaludo(namePerson) {
  var { nombre } = namePerson
  var { edad   } = namePerson
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

function cumpleanos(namePerson) {
    namePerson.edad += 1
}

function imprimirProfesion(namePerson) {
  console.log(`${namePerson.nombre}`)

  if(namePerson.ingeniero) {
    console.log('Ingeniero')
  }
  else {
    console.log('No es Ingeniero')
  }
  if(namePerson.cantante) {
    console.log('Cantante')
  }
  else {
    console.log('No es Cantante')
  }
  if(namePerson.deportista) {
    console.log('Deportista')
  }
  else {
    console.log('No es Deportista')
  }
  if(namePerson.medico) {
    console.log('Medico')
  }
  else {
    console.log('No es Medico')
  }
}

function imprimirSiEsMayorDeEdad(namePerson) {
  if(esMayorDeEdad(namePerson)) {
    console.log(`${namePerson.nombre} es mayor de edad.`)
  }
  else {
    console.log(`${namePerson.nombre} es menor de edad.`)
  }
}

// Variable constante
const MAYORIA_DE_EDAD = 18
const SUMAR_PESO      = 2
const RESTAR_PESO     = 2
const DIAS_ANO        = 365

// función anónima
// const = esMayorDeEdad function (namePerson) {
//  return namePerson.edad >= MAYORIA_DE_EDAD
//}

// Arrow function
const esMayorDeEdad = ({ edad }) =>
  edad >= MAYORIA_DE_EDAD

const engordar = persona =>
  persona.peso += SUMAR_PESO

const adelgazar = persona =>
  persona.peso -= RESTAR_PESO

const comeMucho = () =>
  Math.random() < 0.3

const haceDeporte = () =>
  Math.random() < 0.5

const llueve = () =>
  Math.random() < 0.25

// Condicional if
function permitirAcceso(namePerson) {
  if(!esMayorDeEdad(namePerson)){
    console.log('Acceso denegado')
  }
  else {
    console.log('Acceso permitido')
  }
}

// Objetos key: valor
var persona = {
  nombre:     'Hector',
  apelido:    'Crack',
  edad:       21,
  peso:       60,
  ingeniero:  true,
  cantante:   false,
  deportista: true,
  medico:     false,

}

var persona1 = {
  nombre:   'Carlos',
  apelido:  'Fake',
  edad:     13
}

var persona2 = {
  ...persona1
}

// llamar funcion
imprimirEdad(nombre, edad)
imprimirNombreMayusculas(persona)
imprimirNombreMayusculas(persona1)
imprimirSaludo(persona)
imprimirSaludo(persona1)
cumpleanos(persona1)
imprimirProfesion(persona)
imprimirSiEsMayorDeEdad(persona)
imprimirSiEsMayorDeEdad(persona1)
imprimirSiEsMayorDeEdad(persona2)

// Comparaciones
var x = 4, y = '4'
// x == y  True,  no importa tipo de variable
// x === y False, importa valor y tipo de variable

// Imprimir
console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}Kg`)

// Ciclo for
//for (var i = 0; i <= DIAS_ANO; i++) {
  //var random = Math.random()

  //if (random < 0.25) {
    //engordar(persona)
  //}
  //else if (random < 0.5) {
    //adelgazar(persona)
  //}
//}

var dias = 0
const PESO_META = persona.peso - 3

// Ciclo for
while (persona.peso > PESO_META){
  // debugger Para ver consola
  if (comeMucho()) {
    engordar(persona)
  }
  else if (haceDeporte()) {
    adelgazar(persona)
  }
  dias += 1
}

var contador = 0

// Ciclo do while
do {
  contador++
} while (!llueve())


console.log(`Al final del año ${persona.nombre} pesa ${persona.peso}Kg`)
console.log('Tengo ' + dias)
console.log('fui ' + contador);
