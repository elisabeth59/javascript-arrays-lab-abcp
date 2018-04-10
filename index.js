const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo")
}
function appendKitten(name) {
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
function prependKitten(name) {
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}
<<<<<<< HEAD
function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}
function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens.shift()
=======
function removeLastKitten(){
  var newKittens = [...kittens]
  newkittens.pop()
>>>>>>> 22dfb7edbbb73b14cd91cd9cc125933e28055250
  return newKittens
}