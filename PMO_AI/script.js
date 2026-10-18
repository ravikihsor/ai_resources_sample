const programData = {
  executiveSummary: `The program remains in a stable delivery posture, with overall health rated as green. Project Alpha and Project Gamma are on track for their next quarterly milestones, while Project Beta requires a targeted mitigation plan for API integration risk. Resource utilization is balanced, and financial performance remains within a 3% variance to forecast.`,
  summaryCards: [
    { title: 'Program Health', value: 'Green', delta: 'Stable from last month' },
    { title: 'Schedule Status', value: 'On Track', delta: 'Forecast date aligned with plan' },
    { title: 'Scope Completion', value: '68%', delta: '+5% month-over-month' },
    { title: 'Budget Variance', value: '-2.3%', delta: 'Within tolerance' },
    { title: 'Resource Utilization', value: '84%', delta: 'Capacity optimized' },
    { title: 'Top Risks Active', value: '3', delta: '1 high, 2 medium' },
  ],
  scheduleTrend: {
    labels: ['Apr', 'May', 'Jun', 'Jul'],
    planned: [100, 120, 140, 160],
    forecast: [100, 118, 142, 162],
  },
  scopeCompletion: {
    labels: ['Completed', 'Remaining', 'Change Requests'],
    values: [68, 24, 8],
  },
  financialPerformance: {
    labels: ['Committed', 'Spent', 'Forecast'],
    values: [12.5, 12.2, 12.8],
  },
  resourceUtilization: {
    labels: ['Engineering', 'Product', 'Design', 'QA', 'Ops'],
    values: [86, 82, 75, 84, 80],
  },
  risks: [
    {
      title: 'API integration delay',
      severity: 'High',
      status: 'Mitigation in execution',
      description: 'External partner API readiness is slipping by 2 weeks. Dedicated integration pods and daily gating reviews are in place.',
    },
    {
      title: 'QA regression backlog',
      severity: 'Medium',
      status: 'Working with test leads',
      description: 'Regression coverage remains below target for the core platform. Additional automation run capacity is scheduled next week.',
    },
    {
      title: 'Resource ramp-up risk',
      severity: 'Medium',
      status: 'Onboarding pipeline active',
      description: 'Two critical engineering hires are onboarding in August to support the release cadence.',
    },
  ],
  nextMonthActions: [
    'Finalize Project Beta API gating review and approve targeted backlog scope adjustments.',
    'Complete milestone validation for Project Alpha feature readiness and secure stakeholder sign-off.',
    'Increase regression automation coverage by 15% for core workflows.',
    'Continue weekly risk review with the integration team and escalate any slip to the SVP.',
    'Confirm budget reserve allocation for cross-team contingency and capacity smoothing.',
  ],
};

function renderSummaryCards() {
  const container = document.getElementById('summaryCards');
  programData.summaryCards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.value}</p>
      <div class="delta">${card.delta}</div>
    `;
    container.appendChild(cardEl);
  });
}

function renderExecutiveSummary() {
  document.getElementById('executiveSummary').textContent = programData.executiveSummary;
}

function renderRiskCards() {
  const container = document.getElementById('riskGrid');
  programData.risks.forEach(risk => {
    const riskEl = document.createElement('div');
    riskEl.className = 'risk-card';
    riskEl.innerHTML = `
      <div class="risk-pill">${risk.severity}</div>
      <h4>${risk.title}</h4>
      <p>${risk.description}</p>
      <div class="delta">Status: ${risk.status}</div>
    `;
    container.appendChild(riskEl);
  });
}

function renderNextActions() {
  const list = document.getElementById('nextMonthActions');
  programData.nextMonthActions.forEach(action => {
    const li = document.createElement('li');
    li.textContent = action;
    list.appendChild(li);
  });
}

function renderCharts() {
  const scheduleCtx = document.getElementById('scheduleChart').getContext('2d');
  new Chart(scheduleCtx, {
    type: 'line',
    data: {
      labels: programData.scheduleTrend.labels,
      datasets: [
        {
          label: 'Planned completion',
          data: programData.scheduleTrend.planned,
          borderColor: '#7fbfff',
          backgroundColor: 'rgba(127, 191, 255, 0.16)',
          tension: 0.35,
          fill: true,
          pointRadius: 4,
        },
        {
          label: 'Forecast completion',
          data: programData.scheduleTrend.forecast,
          borderColor: '#ffb86c',
          backgroundColor: 'rgba(255, 184, 108, 0.16)',
          tension: 0.35,
          fill: true,
          pointRadius: 4,
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { color: '#c3d4ff' } } },
      scales: {
        x: { ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
        y: { ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
      },
    },
  });

  const scopeCtx = document.getElementById('scopeChart').getContext('2d');
  new Chart(scopeCtx, {
    type: 'doughnut',
    data: {
      labels: programData.scopeCompletion.labels,
      datasets: [{
        data: programData.scopeCompletion.values,
        backgroundColor: ['#64d8b4', '#5f81ff', '#ff6f91'],
      }],
    },
    options: {
      plugins: {
        legend: { labels: { color: '#c3d4ff' } },
      },
    },
  });

  const financeCtx = document.getElementById('financialChart').getContext('2d');
  new Chart(financeCtx, {
    type: 'bar',
    data: {
      labels: programData.financialPerformance.labels,
      datasets: [{
        label: 'USD millions',
        data: programData.financialPerformance.values,
        backgroundColor: ['#7f9fff', '#a4d4ff', '#6be2ac'],
        borderRadius: 10,
      }],
    },
    options: {
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
        y: { ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
      },
    },
  });

  const resourceCtx = document.getElementById('resourceChart').getContext('2d');
  new Chart(resourceCtx, {
    type: 'bar',
    data: {
      labels: programData.resourceUtilization.labels,
      datasets: [{
        label: 'Utilization %',
        data: programData.resourceUtilization.values,
        backgroundColor: '#7ce0ff',
        borderRadius: 10,
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
        y: { beginAtZero: true, max: 100, ticks: { color: '#a9c4ff' }, grid: { color: 'rgba(255,255,255,0.06)' } },
      },
    },
  });
}

renderSummaryCards();
renderExecutiveSummary();
renderRiskCards();
renderNextActions();
renderCharts();
