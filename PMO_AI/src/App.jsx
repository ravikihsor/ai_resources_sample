import { useEffect, useState } from 'react';
import data from './data.js';

const groupOptions = [
  { key: 'risks', label: 'Risks & Mitigation' },
  { key: 'resources', label: 'Resource Utilization' },
  { key: 'schedule', label: 'Timeline & Schedule' },
  { key: 'scope', label: 'Scope Completion' },
];

function App() {
  const [activeGroup, setActiveGroup] = useState(groupOptions[0].key);
  const [dashboardData, setDashboardData] = useState(data);

  useEffect(() => {
    fetch('/dashboard-data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('No generated data file available');
        }
        return res.json();
      })
      .then((json) => setDashboardData(json))
      .catch(() => setDashboardData(data));
  }, []);

  return (
    <div className="app-shell">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Weekly Program Update</p>
          <h1>Google-Like PMO Dashboard</h1>
          <p className="hero-copy">
            A React-based monthly program dashboard with drill-down details across risks,
            schedule, scope, and resource metrics.
          </p>
        </div>
        <div className="hero-tag">Next run: every Friday at 12:00</div>
      </header>

      <section className="summary-row">
        {dashboardData.overviewCards.map((card) => (
          <button
            type="button"
            key={card.title}
            className={`summary-card ${activeGroup === card.key ? 'summary-card--active' : ''}`}
            onClick={() => setActiveGroup(card.key)}
          >
            <div className="summary-title">{card.title}</div>
            <div className="summary-value">{card.value}</div>
            <div className="summary-detail">{card.detail}</div>
          </button>
        ))}
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Program Summary</p>
            <h2>Deep dive into the selected area</h2>
          </div>
        </div>
        <div className="section-copy">
          <p>{dashboardData.programOverview}</p>
        </div>
        <div className="group-tabs">
          {groupOptions.map((group) => (
            <button
              key={group.key}
              className={activeGroup === group.key ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveGroup(group.key)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="detail-panel">
          <h3>{groupOptions.find((option) => option.key === activeGroup).label}</h3>
          <div className="detail-copy">{dashboardData.details[activeGroup].summary}</div>
          <div className="detail-list">
            {dashboardData.details[activeGroup].items.map((item, index) => (
              <article className="detail-item" key={`${activeGroup}-${index}`}>
                <div className="detail-item-heading">
                  <strong>{item.title}</strong>
                  {item.status && <span className={`status-pill status-pill--${item.status.toLowerCase()}`}>{item.status}</span>}
                </div>
                <p>{item.description}</p>
                {item.metrics && (
                  <div className="detail-metrics">
                    {item.metrics.map((metric) => (
                      <div className="detail-metric" key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cards">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Program Metrics</p>
            <h2>Snapshot across multiple program dimensions</h2>
          </div>
        </div>
        <div className="metric-grid">
          {dashboardData.metricPanels.map((panel) => (
            <div className="metric-card" key={panel.title}>
              <h4>{panel.title}</h4>
              {panel.rows.map((row) => (
                <div className="metric-row" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section bottom-section">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Action Plan</p>
            <h2>Next month priorities</h2>
          </div>
        </div>
        <ul className="action-list">
          {dashboardData.nextActions.map((action, index) => (
            <li key={`action-${index}`}>{action}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
