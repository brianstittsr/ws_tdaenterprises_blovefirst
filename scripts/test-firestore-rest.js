/**
 * Test Firestore REST API write access with project API key.
 * Run: node scripts/test-firestore-rest.js
 */

const https = require('https');

const projectId = 'treymayneanderson-tda';
const apiKey = 'AIzaSyBwTF2JYjlwmGruI1PswcapPVms9TINMpk';

function makeRequest(method, path, body) {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents${path}?key=${apiKey}`;
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method, headers: { 'Content-Type': 'application/json' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const parsed = JSON.parse(data);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(parsed);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${JSON.stringify(parsed)}`));
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function test() {
  try {
    const result = await makeRequest('POST', '/platformSettings', {
      fields: {
        siteName: { stringValue: 'SVP Platform' },
        seedTest: { booleanValue: true },
        createdAt: { timestampValue: new Date().toISOString() },
      }
    });
    console.log('Success:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Failed:', error.message);
  }
}

test();
