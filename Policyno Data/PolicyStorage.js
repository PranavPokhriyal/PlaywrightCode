const fs = require('fs');
const path = require('path');

const policyFilePath = path.join(__dirname, '../Policyno Data/PolicyNumbers.json');

// Ensure file exists and has valid JSON
function ensurePolicyFile() {
  if (!fs.existsSync(policyFilePath)) {
    fs.writeFileSync(policyFilePath, JSON.stringify({}, null, 2), 'utf-8');
  } else {
    try {
      const content = fs.readFileSync(policyFilePath, 'utf-8');
      JSON.parse(content); // check if JSON is valid
    } catch (err) {
      // If file is invalid, reset to empty object
      fs.writeFileSync(policyFilePath, JSON.stringify({}, null, 2), 'utf-8');
    }
  }
}

// Save policy number under a specific key
function savePolicyNumber(policyKey, policyNumber) {
  ensurePolicyFile();

  const data = JSON.parse(fs.readFileSync(policyFilePath, 'utf-8'));

  // Overwrite the previous policy under this key
  data[policyKey] = {
    policyNumber,
    savedAt: new Date().toISOString()
  };

  fs.writeFileSync(policyFilePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Policy saved: [${policyKey}] ${policyNumber}`);
}

// Get policy number by key
function getPolicyNumber(policyKey) {
  ensurePolicyFile();
  const data = JSON.parse(fs.readFileSync(policyFilePath, 'utf-8'));
  return data[policyKey];
}

module.exports = {
  savePolicyNumber,
  getPolicyNumber
};
