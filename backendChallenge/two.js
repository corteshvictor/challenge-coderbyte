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

const messages = [
  '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
  '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
  '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}',
  '{"type":"unknown","payload":{}}'
];

console.log({ 'solution 1': advancedWebsocketHandler(messages) })

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

const messages2 = [
  '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
  '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
  '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}',
  '{"type":"unknown","payload":{}}'
];

console.log({ 'solution 2': advancedWebsocketHandler2(messages) })
