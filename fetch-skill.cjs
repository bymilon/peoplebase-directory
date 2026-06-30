const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/pbakaus/impeccable/main/.agents/skills/impeccable/SKILL.md';
const dir = path.join(process.cwd(), '.agents', 'skills', 'impeccable');

fs.mkdirSync(dir, { recursive: true });

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync(path.join(dir, 'SKILL.md'), data);
    console.log('Successfully downloaded SKILL.md');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
