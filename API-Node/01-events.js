// // import events from 'events';
// const { EventEmitter } = require('events');

// class UserService {
//   events = new EventEmitter();
//   register(user) {
//     // TODO write in DB

//     this.events.emit('user.created', user);
//   }
//   login() {

//   }
//   logout() {

//   }
// }

// const userService = new UserService();

// // projet A
// userService.events.on('user.created', (user) => {
//   // TODO send mail
//   console.log('send mail', user);
// });

// // si la requete /users/register est reçu
// userService.register({
//   username: 'romain',
//   password: '1234',
// });


// import events from 'events';
const { EventEmitter } = require('events');

class UserService extends EventEmitter {
  register(user) {
    // TODO write in DB

    // micro-task (callback d'une boucle interne à la boucle d'événement)
    process.nextTick(() => {
      this.emit('user.created', user);
    });
  }
  login() {

  }
  logout() {

  }
}

const userService = new UserService();

const callback = (user) => {
  // TODO send mail
  console.log('send mail', user);
};

// projet A
userService.on('user.created', callback); // enregistre le callback

// userService.once('user.created', callback); // enregistre le callback (1 seul appel)
// userService.off('user.created', callback); // désenregistre le callback

// si la requete /users/register est reçu
userService.register({
  username: 'romain',
  password: '1234',
});
console.log('FIN');


