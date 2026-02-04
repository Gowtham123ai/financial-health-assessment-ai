function Dashboard({ data }) {
  return (
    <div>
      <h2>Financial Metrics</h2>
      <p>Revenue: ₹{data.metrics.revenue}</p>
      <p>Profit Margin: {data.metrics.profit_margin}%</p>
      <p>Liquidity Ratio: {data.metrics.liquidity_ratio}</p>
      <p>Debt Ratio: {data.metrics.debt_ratio}</p>

      <h2>AI Insights</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {data.ai_insights}
      </pre>
    </div>
  );
}

export default Dashboard;
