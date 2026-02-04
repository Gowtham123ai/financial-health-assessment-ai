from industry_benchmarks import benchmark

def ai_insights(metrics, language="English", industry="Services"):
    bench = benchmark(metrics, industry)

    if language == "Hindi":
        return f"""
वित्तीय स्वास्थ्य मूल्यांकन ({industry})

लाभ मार्जिन: {metrics['profit_margin']}%
उद्योग तुलना: {bench['profit_margin_vs_industry']}%

सिफारिश:
- लागत नियंत्रण में सुधार करें
- कार्यशील पूंजी अनुकूलित करें
"""

    return f"""
Financial Health Assessment ({industry})

Profit Margin: {metrics['profit_margin']}%
Vs Industry: {bench['profit_margin_vs_industry']}%

Recommendations:
- Optimize costs
- Improve working capital cycle
"""
