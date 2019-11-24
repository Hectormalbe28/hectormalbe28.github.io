//Objetos Constructor
// Clases herencia
class Persona {
  constructor(name, lastname, height) {
    this.name     = name
    this.lastname = lastname
    this.height   = height
    this.edad     = 20
  }

  saludar(fn){
    console.log(`Hola, me llamo ${this.name} ${this.lastname} tengo ${this.edad} años
      y mido ${this.height} soy ${medir(this.height)}`)
    if (fn) {
      fn(this.name, this.lastname)
    }
  }
  soyAlto(){
    return this.height > 1.8
  }

}
class Desarrollador extends Persona {
  constructor(name, lastname, height){
    super(name, lastname, height)
  }
  saludar(fn){
    console.log(`Hola, me llamo ${this.name} ${this.lastname} tengo ${this.edad} años
      y mido ${this.height} soy ${medir(this.height)} y Desarrollador`)
      if (fn) {
        fn(this.name, this.lastname, true)
      }
  }
}

function medir (height) {
  if (height <= 1.8) {
    return 'Bajo'
  }
  else {
    return 'Alto'
  }
}

function responderSaludo(name, lastname, esDev) {
  console.log(`Buen dia ${name} ${lastname}`);
  if (esDev) {
    console.log('No sabia que eras Developer');
  }
}

var hector = new Persona('Hector', 'Crack', 1.72)
var anna = new Desarrollador('Anna', 'Linda', 1.92)
hector.saludar(responderSaludo)
anna.saludar(responderSaludo)
