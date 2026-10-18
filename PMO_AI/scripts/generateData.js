import fs from 'fs';
import path from 'path';
import data from '../src/data.js';

const publicDir = path.resolve(process.cwd(), 'public');
const jsonPath = path.join(publicDir, 'dashboard-data.json');
const csvPath = path.join(publicDir, 'program-dashboard-data.csv');

function writeJson() {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Generated JSON data at ${jsonPath}`);
}

function writeCsv() {
  const rows = [];
  rows.push([
    'group',
    'title',
    'status',
    'description',
    'metric1_label',
    'metric1_value',
    'metric2_label',
    'metric2_value',
    'metric3_label',
    'metric3_value',
  ].join(','));

  data.overviewCards.forEach((card) => {
    rows.push([
      'overview',
      card.title,
      '',
      card.detail,
      '',
      card.value,
      '',
      '',
      '',
      '',
    ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','));
  });

  Object.entries(data.details).forEach(([group, groupData]) => {
    groupData.items.forEach((item) => {
      rows.push([
        group,
        item.title,
        item.status || '',
        item.description,
        item.metrics?.[0]?.label || '',
        item.metrics?.[0]?.value || '',
        item.metrics?.[1]?.label || '',
        item.metrics?.[1]?.value || '',
        item.metrics?.[2]?.label || '',
        item.metrics?.[2]?.value || '',
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','));
    });
  });

  fs.writeFileSync(csvPath, rows.join('\n'), 'utf8');
  console.log(`Generated CSV data at ${csvPath}`);
}

if (process.argv.includes('--csv-only')) {
  writeCsv();
} else if (process.argv.includes('--json-only')) {
  writeJson();
} else {
  writeJson();
  writeCsv();
}
