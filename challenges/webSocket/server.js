const WebSocket = require('ws');

// solution 1
function advancedWebsocketHandler (messages) {
  const handlers = {
    'create': (payload) => `Created ${payload.quantity} of ${payload.itemName}`,
    'modify': (payload) => `Item ${payload.itemId} quantity ${payload.action}ed by ${payload.amount}`,
    'query': (payload) => `Query of type ${payload.queryType} with value ${payload.queryValue} processed`,
    'default': () => 'Unknown message type'
  };

  const results = [];

  for (const message of messages) {
    const parsedMessage = JSON.parse(message);
    const handler = handlers[parsedMessage.type] || handlers['default'];
    results.push(handler(parsedMessage.payload));
  }

  return results;
}

/* Verificar en consola que esta funcionando correctamente */

// const messages = [
//   '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
//   '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
//   '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}'
// ];

// console.log({ 'solution 1': advancedWebsocketHandler(messages) })

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  const clientMessages = [];

  ws.on('message', message => {
    const messageStr = message.toString();

    if (messageStr === 'end') {
      const processedMessages = advancedWebsocketHandler(clientMessages);
      ws.send(JSON.stringify(processedMessages));
      clientMessages.length = 0;
    } else {
      clientMessages.push(messageStr);
    }

  });

  ws.send('Connection established. Ready to receive messages.');
});

console.log('WebSocket server is running on ws://localhost:8080');



// solution 2
function advancedWebsocketHandler2 (messages) {
  const results = [];

  for (const message of messages) {
    const { type, payload } = JSON.parse(message);

    switch (type) {
      case 'create': {
        const { itemName, quantity } = payload;
        results.push(`Created ${quantity} of ${itemName}`);
        break;
      }

      case 'modify': {
        const { itemId, action, amount } = payload;
        results.push(`Item ${itemId} quantity ${action}ed by ${amount}`);
        break;
      }


      case 'query': {
        const { queryType, queryValue } = payload;
        results.push(`Query of type ${queryType} with value ${queryValue} processed`);
        break;
      }

      default: {
        results.push('Unknown message type');
        break;
      }
    }
  }

  return results;
}

// const messages2 = [
//   '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
//   '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
//   '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}'
// ];

// console.log({ 'solution 2': advancedWebsocketHandler2(messages2) })

// Solution 3
function advancedWebsocketHandler3 (messages) {
  return messages.map(message => {
    try {
      const parsedMessage = JSON.parse(message);
      const { type, payload } = parsedMessage;

      switch (type) {
        case 'create':
          const { itemName, quantity } = payload;
          return `Created ${quantity} of ${itemName}`;

        case 'modify':
          const { itemId, action, amount } = payload;
          return `Item ${itemId} quantity ${action}ed by ${amount}`;

        case 'query':
          const { queryType, queryValue } = payload;
          return `Query of type ${queryType} with value ${queryValue} processed`;

        default:
          return `Unknown message type: ${type}`;
      }
    } catch (error) {
      return `Failed to process message: ${message}`;
    }
  });
}
