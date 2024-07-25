# Back-end Challenge

## English

In the JavaScript file, write a program to perform a GET request on the route [https://coderbyte.com/api/challenges/json/age-counting](https://coderbyte.com/api/challenges/json/age-counting) which contains a data key and the value is a string which contains items in the format: `key=STRING`, `age=INTEGER`. Your goal is to count how many items exist that have an age equal to `32`. Then you should create a write stream to a file called `output.txt` and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

Example Input
`{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}`

File Contents (output.txt)
IAfpK
9snd2

Example Output
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

Example Output with ChallengeToken
684b30e9a8e5e22c4b2d3915e25ae0817c87aac7:583iuydkvsb

Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

Your ChallengeToken: `bsvkdyui385`

## Español

En el archivo JavaScript, escriba un programa para realizar una petición GET en la ruta [https://coderbyte.com/api/challenges/json/age-counting](https://coderbyte.com/api/challenges/json/age-counting) que contiene una clave de datos y el valor es una cadena que contiene elementos con el formato: `key=STRING`, `age=INTEGER`. Tu objetivo es contar cuántos ítems existen que tengan una edad igual a `32`. A continuación, debe crear un flujo de escritura a un archivo llamado `output.txt` y el contenido debe ser los valores clave (del json) cada uno en una línea separada en el orden en que aparecieron en el archivo json (el archivo debe terminar con un carácter de nueva línea en su propia línea). Por último, se mostrará el hash SHA1 del archivo.

Ejemplo Entrada
`{"data": "key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}`

Contenido del fichero (output.txt)
IAfpK
9snd2

Ejemplo de salida
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

Ejemplo de salida con ChallengeToken
684b30e9a8e5e22c4b2d3915e25ae0817c87aac7:583iuydkvsb

Una vez que tu función esté funcionando, toma la cadena de salida final y combínala con tu ChallengeToken, ambas en orden inverso y separadas por dos puntos.

Su ChallengeToken: `bsvkdyui385`
