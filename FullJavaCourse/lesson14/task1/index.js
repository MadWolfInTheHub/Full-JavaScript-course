`use strict`

let message = 'Just learn it'

export const sendMessage = (name) => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
}

export const setMessage = (text) => {
    message = text;
}

sendMessage('Ann');
setMessage('God job');
sendMessage('Ann');