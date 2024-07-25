# Back-end Challenge

## English

In the JavaScript file, write a program that simulates complex WebSocket message handling based on different message types and payload structures.

1. Define a function `advancedWebsocketHandler`, which takes an array of message strings. Each message string is a JSON object that represents a WebSocket message with varying structures based on the type:

```javascript
{
 type: 'create' | 'modify' | 'query',
 payload: {
  ... // varies based on the type
 },
}
```

2. Your function should process each message based on its type:

- For create messages, the payload will have itemName and quantity. Return a string **"Created [quantity] of [itemName]"**.
- For modify messages, the payload will have itemId, action (add or subtract), and amount. Return a string **"Item [itemId] quantity [action]ed by [amount]"**.
- For query messages, the payload will have queryType and queryValue. Return a string **"Query of type [queryType] with value [queryValue] processed"**.

3. Return an array of strings representing the processed messages. Finally, console log the array.

Example Input:

```javascript
[
  '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
  '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
  '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}',
];
```

Example Output:

```javascript
[
  "Created 5 of Widget",
  "Item 3 quantity added by 2",
  "Query of type status with value pending processed",
];
```

## Español

En el archivo JavaScript, escriba un programa que simule el manejo de mensajes WebSocket complejos basados en diferentes tipos de mensajes y estructuras de carga útil.

1. Define una función `advancedWebsocketHandler`, que toma un array de cadenas de mensajes. Cada cadena de mensaje es un objeto JSON que representa un mensaje WebSocket con diferentes estructuras basadas en el tipo:

```javascript
{
 type: 'create' | 'modify' | 'query',
 payload: {
  ... // varies based on the type
 },
}
```

2. Su función debe procesar cada mensaje en función de su tipo:

- Para los mensajes de creación, la carga útil tendrá `itemName` y `quantity`. Devuelve la cadena **"Created [quantity] de [itemName]"**.
- Para los mensajes de modificación, la carga útil tendrá itemId, acción (añadir o restar) y cantidad. Devuelve la cadena **"Item [itemId] quantity [action]ed by [amount]"**.
- Para los mensajes de consulta, la carga útil tendrá queryType y queryValue. Devuelve la cadena **"Query of type [queryType] with value [queryValue] processed"**.

3. Devuelve un array de cadenas que representan los mensajes procesados. Por último, registra el array en la consola.

Ejemplo de entrada:

```javascript
[
  '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
  '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
  '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}',
];
```

Ejemplo de salida:

```javascript
[
  "Created 5 of Widget",
  "Item 3 quantity added by 2",
  "Query of type status with value pending processed",
];
```
