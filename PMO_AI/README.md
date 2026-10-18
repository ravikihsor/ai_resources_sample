# Program Management Dashboard

This project demonstrates an agentic AI-enabled Program Delivery Dashboard with a React web app and dummy program data.

## What is included

- `AGENTIC_DASHBOARD_DESIGN.md` — design doc describing the agentic AI architecture and program reporting workflow.
- `package.json` — React / Vite app configuration and scripts.
- `src/` — React application source files.
- `public/` — generated app data and CSV export.
- `schedule.js` — weekly scheduler script using `node-cron`.
- `scripts/generateData.js` — generates `dashboard-data.json` and `program-dashboard-data.csv`.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate the dummy data files:
   ```bash
   npm run generate-data
   ```

3. Run the React development app:
   ```bash
   npm run dev
   ```

4. Open the local Vite URL shown in the console.

## Scheduling

The app includes `schedule.js` to simulate a weekly refresh of dashboard data every Friday at 12:00.

Run:
```bash
node schedule.js
```

This starts a scheduler that writes `dashboard-data.json` with a refreshed timestamp every Friday at noon.

## Files

- `public/program-dashboard-data.csv` — dummy CSV data used by the app.
- `public/dashboard-data.json` — sample JSON dataset loaded by the app.

## Notes

This React app supports drill-down details across four program areas: Risks & Mitigation, Resource Utilization, Timeline & Schedule, and Scope Completion.
