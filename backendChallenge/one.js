const https = require('node:https');
const fs = require('node:fs/promises');
const crypto = require('node:crypto');

const CODER_BYTE_API_URL = 'https://coderbyte.com/api/challenges/json/age-counting';
const OUTPUT_FILE_PATH = `${__dirname}/output.txt`;
const CHALLENGE_TOKEN = 'bsvkdyui385';

https.get(CODER_BYTE_API_URL, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // const parsedData = JSON.parse(`{"data": "key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}`);
    const parsedData = JSON.parse(data);
    const { data: dataStr } = parsedData;
    const regex = /key=([^,]+), age=(\d+)/g;
    let match;
    const keysAge32 = [];

    while ((match = regex.exec(dataStr)) !== null) {
      const key = match[1];
      const age = Number(match[2]);

      if (age === 32) keysAge32.push(key);
    }

    console.log(`Exist ${keysAge32.length} items with age 32`);

    const output = `${keysAge32.join('\n')}\n`;
    fs.writeFile(OUTPUT_FILE_PATH, output).then().catch((err) => console.error(err));

    const hash = crypto.createHash('sha1').update(output).digest('hex')
    console.log("🚀 ~ res.on ~ hash:", hash)

    const finalOutput = `${hash}:${CHALLENGE_TOKEN.split('').reverse().join('')}`;
    console.log("🚀 ~ res.on ~ finalOutput:", finalOutput)
  });
});
