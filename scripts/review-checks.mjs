import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
let failed = false;

function fail(message) {
  console.error(`FAIL: ${message}`);
  failed = true;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

function checkFileExists(filePath) {
  if (!fs.existsSync(path.join(root, filePath))) {
    fail(`Missing required file: ${filePath}`);
    return;
  }
  pass(`Found required file: ${filePath}`);
}

function checkJavaScriptSyntax(filePath) {
  try {
    const source = fs.readFileSync(path.join(root, filePath), 'utf8');
    new vm.Script(source, { filename: filePath });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    fail(`JavaScript syntax error in ${filePath}\n${message}`);
    return;
  }

  pass(`Valid JavaScript syntax: ${filePath}`);
}

function checkHtmlAssetLinks(fileName) {
  const absoluteFile = path.join(root, fileName);
  const content = fs.readFileSync(absoluteFile, 'utf8');
  const regex = /\b(?:href|src)="([^"]+)"/g;
  const broken = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    const rawRef = match[1];
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(rawRef)) {
      continue;
    }

    const cleanedRef = rawRef.split('?')[0];
    const resolved = path.resolve(path.dirname(absoluteFile), cleanedRef);
    if (!fs.existsSync(resolved)) {
      broken.push(rawRef);
    }
  }

  if (broken.length > 0) {
    fail(`Broken local link(s) in ${fileName}: ${broken.join(', ')}`);
    return;
  }

  pass(`All local links resolve in ${fileName}`);
}

const requiredFiles = [
  'assets/css/input.css',
  'assets/css/output.css',
  'assets/js/main.js',
  'index.html',
];

const htmlFiles = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
  .map((entry) => entry.name)
  .sort();

if (htmlFiles.length === 0) {
  fail('No HTML files found in project root.');
}

for (const filePath of requiredFiles) {
  checkFileExists(filePath);
}

checkJavaScriptSyntax('assets/js/main.js');

for (const fileName of htmlFiles) {
  checkHtmlAssetLinks(fileName);
}

if (failed) {
  console.error('\nReview failed. Please fix the errors above.');
  process.exit(1);
}

console.log('\nReview passed.');
