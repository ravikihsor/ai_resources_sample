import cron from 'node-cron';
import fs from 'fs';
import path from 'path';

const reportPath = path.resolve(process.cwd(), 'dashboard-data.json');

function generateWeeklyReport() {
  const report = {
    lastRun: new Date().toISOString(),
    status: 'Weekly dashboard data refreshed',
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Weekly report generated:', reportPath);
}

const task = cron.schedule('0 12 * * FRI', () => {
  console.log('Running scheduled weekly dashboard refresh');
  generateWeeklyReport();
});

task.start();
console.log('Scheduler started: runs every Friday at 12:00');
