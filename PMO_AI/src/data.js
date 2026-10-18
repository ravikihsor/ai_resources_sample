const data = {
  overviewCards: [
    { key: 'risks', title: 'Risks & Mitigation', value: '3 active', detail: '1 high, 2 medium' },
    { key: 'resources', title: 'Resource Utilization', value: '84%', detail: 'Balanced across teams' },
    { key: 'schedule', title: 'Timeline & Schedule', value: 'On Track', detail: 'No major slippages' },
    { key: 'scope', title: 'Scope Completion', value: '68%', detail: '+5% MoM' },
  ],
  programOverview: 'This weekly update provides a focused review of program-level delivery, risk, scope, and resource metrics. It is designed for the SVP to quickly understand the current status and inspect underlying details for each major area.',
  details: {
    risks: {
      summary: 'Three active program risks remain in focus. The integration delay is highest severity and is being mitigated with increased gating, while regression backlog and ramp risk remain under watch.',
      items: [
        {
          title: 'API integration delay',
          status: 'Red',
          description: 'The external API partner is delayed by two weeks, affecting Project Beta release timing.',
          metrics: [
            { label: 'Impact', value: 'High' },
            { label: 'Confidence', value: 'Medium' },
            { label: 'Mitigation progress', value: '60%' },
          ],
        },
        {
          title: 'QA regression backlog',
          status: 'Amber',
          description: 'Regression test coverage is below the target for core customer journeys, limiting release confidence.',
          metrics: [
            { label: 'Open regression tickets', value: '14' },
            { label: 'Automation progress', value: '78%' },
          ],
        },
      ],
    },
    resources: {
      summary: 'Resource utilization is healthy, with engineering at 86% and product teams operating within capacity. New hires are onboarding to support the next phase.',
      items: [
        {
          title: 'Engineering capacity',
          status: 'Green',
          description: 'Current engineering utilization is 86% with sufficient bench for urgent issues.',
          metrics: [
            { label: 'Utilization', value: '86%' },
            { label: 'Onboarding hires', value: '2' },
          ],
        },
        {
          title: 'Product and design alignment',
          status: 'Green',
          description: 'Product and design remain aligned to the roadmap with no major rework identified.',
          metrics: [
            { label: 'Design coverage', value: '94%' },
            { label: 'Product syncs', value: 'Weekly' },
          ],
        },
      ],
    },
    schedule: {
      summary: 'The overall program schedule is tracking close to plan. Two key milestones remain the focus for the next four weeks.',
      items: [
        {
          title: 'Project Alpha milestone',
          status: 'Green',
          description: 'Feature completion is on track for the next alpha milestone with no forecasted slip.',
          metrics: [
            { label: 'Completion', value: '82%' },
            { label: 'Forecast date', value: 'Aug 22' },
          ],
        },
        {
          title: 'Project Beta integration',
          status: 'Amber',
          description: 'Integration work remains the primary schedule risk and is under daily gating review.',
          metrics: [
            { label: 'Completion', value: '71%' },
            { label: 'Forecast date', value: 'Sep 5' },
          ],
        },
      ],
    },
    scope: {
      summary: 'Scope completion is at 68% with remaining work weighted toward integration and validation. Change requests are within acceptable limits.',
      items: [
        {
          title: 'Program scope coverage',
          status: 'Green',
          description: 'The core scope has a healthy completion rate and limited churn from scope changes.',
          metrics: [
            { label: 'Completed', value: '68%' },
            { label: 'Remaining', value: '24%' },
            { label: 'Change requests', value: '8%' },
          ],
        },
        {
          title: 'Scope risk pockets',
          status: 'Amber',
          description: 'Integration and third-party validation work has the most remaining scope and requires close coordination.',
          metrics: [
            { label: 'Risk area', value: 'Integration' },
            { label: 'Mitigation actions', value: '4' },
          ],
        },
      ],
    },
  },
  metricPanels: [
    {
      title: 'Delivery Metrics',
      rows: [
        { label: 'Sprint velocity', value: '38 story points' },
        { label: 'Committed vs delivered', value: '92%' },
        { label: 'Carryover stories', value: '5' },
      ],
    },
    {
      title: 'Schedule Metrics',
      rows: [
        { label: 'Milestone variance', value: '+1 day' },
        { label: 'Forecast drift', value: '+0.8%' },
        { label: 'Critical path issues', value: '2' },
      ],
    },
    {
      title: 'Financial Metrics',
      rows: [
        { label: 'Budget variance', value: '-2.3%' },
        { label: 'Forecast at completion', value: '$12.8M' },
        { label: 'Reserve remaining', value: '$0.4M' },
      ],
    },
  ],
  nextActions: [
    'Review top risk mitigation progress in the Friday integration stand-up.',
    'Confirm regression automation capacity for the sprint ending next week.',
    'Validate next-month resource assignments for the feature validation sprint.',
    'Update leadership on Project Beta gateway progress before Tuesday review.',
  ],
};

export default data;
