// ECMAScript Next
// class Contact {
//   name = "Romain";

//   // hello défini sur l'objet
//   hello = () => {
//     console.log(`Hello ${this.name}`);
//   };

//   helloTimeout() {
//     setTimeout(this.hello, 1000); // timer._onTimeout();
//   }
// }

// ECMAScript 6
class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloTimeout() {
    // En ES6 les arrow function aident à résoudre ce problème
    setTimeout(() => {
      // les pseudo variables ne sont pas créées à l'appel :
      // this, arguments, super, new.target
      // console.log(this);
      this.hello();
    }, 1000); // timer._onTimeout();
  }
}

// ECMAScript 5
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloTimeout() {
//     // ES5
//     setTimeout(this.hello.bind(this), 1000); // timer._onTimeout();
//   }
// }

// ECMAScript 3
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloTimeout() {
//     // closure
//     var that = this;
//     setTimeout(function() {
//       that.hello();
//     }, 1000); // timer._onTimeout();
//   }
// }

const romain = new Contact("Romain");
romain.helloTimeout();
