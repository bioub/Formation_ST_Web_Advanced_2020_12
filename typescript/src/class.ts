// class Contact {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   hello(): string {
//     return `Hello ${this.name}`;
//   }
// }

class Contact {
  constructor(private name: string) {}

  hello(): string {
    return `Hello ${this.name}`;
  }
}