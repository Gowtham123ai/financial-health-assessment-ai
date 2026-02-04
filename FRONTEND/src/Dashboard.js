function Dashboard({ data }) {
  if (!data || !data.metrics) {
    return null;
  }

  return (
    <div className="output">
      <h2>Financial Metrics</h2>

      <p><b>Revenue:</b> {data.metrics.revenue}</p>
      <p><b>Profit Margin:</b> {data.metrics.profit_margin}%</p>
      <p><b>Liquidity Ratio:</b> {data.metrics.liquidity_ratio}</p>
      <p><b>Debt Ratio:</b> {data.metrics.debt_ratio}</p>

      <h3>AI Insights</h3>
      <div>
        {data.ai_insights.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
