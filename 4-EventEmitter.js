const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age)=>{
    console.log(`data received ${name} and age is ${age}`);
});
customEmitter.on('response', ()=>{
    console.log(`some other logic `);
});

customEmitter.emit('response', 'Evan', 7)