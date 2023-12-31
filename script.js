//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}


const animal = new Animal("unknown species");
console.log(animal.species);  // Output: unknown species
animal.makeSound();           // Output: The animal makes a sound.

const cat = new Cat("Felis catus");
console.log(cat.species);     // Output: Felis catus
cat.makeSound();              // Output: The Felis catus makes a sound.
cat.purr();                   // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log(dog.species);     // Output: Canis lupus familiaris
dog.makeSound();              // Output: The Canis lupus familiaris makes a sound.
dog.bark();                   // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
