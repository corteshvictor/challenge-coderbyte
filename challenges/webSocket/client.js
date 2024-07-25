const WebSocket = require('ws');

// Crear un cliente WebSocket
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server');

  // Enviar un mensaje de prueba
  ws.send('{"type":"create","payload":{"itemName":"Widget","quantity":5}}');
  ws.send('{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}');
  ws.send('{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}');
  ws.send('end')
});

ws.on('message', (data) => {
  try {
    const messageServer = JSON.parse(data.toString());
    console.log('Received from server: ', messageServer);
  } catch (e) {
    console.log('Received from server: ', data.toString());
  }
});

ws.on('close', () => {
  console.log('Disconnected from WebSocket server');
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});
