const axios = require('axios');
const fs = require('node:fs');
const crypto = require('node:crypto');

const CODER_BYTE_API_URL = 'https://coderbyte.com/api/challenges/json/age-counting';
const OUTPUT_FILE_PATH = `${__dirname}/output.txt`;
const CHALLENGE_TOKEN = 'bsvkdyui385';

async function writeStream () {
  try {
    const { data: { data } = {} } = await axios.get(CODER_BYTE_API_URL);
    const regex = /key=([^,]+), age=(\d+)/g;
    const match = [...data.matchAll(regex)];
    const keysAge32 = match
      .filter(([_keyAge, _key, age]) => Number(age) === 32)
      .map(([_keyAge, key]) => key);

    console.log(`Exist ${keysAge32.length} items with age 32`);

    const output = `${keysAge32.join('\n')}\n`;
    const writeStream = fs.createWriteStream(OUTPUT_FILE_PATH);
    writeStream.write(output, () => {
      writeStream.end();
    });

    const hash = crypto.createHash('sha1').update(output).digest('hex')
    const hashReversed = hash.split('').reverse().join('');
    const finalOutput = `${hashReversed}:${CHALLENGE_TOKEN.split('').reverse().join('')}`;
    console.log(hash)
    console.log(finalOutput)
  } catch (error) {
    console.error(error);
  }
}

writeStream()
