from industry_benchmarks import benchmark

def ai_insights(metrics, language="English", industry="Services"):
    bench = benchmark(metrics, industry)

    profit_diff = round(bench["profit_margin_vs_industry"], 2)
    debt_diff = round(bench["debt_vs_industry"], 2)

    if language == "Hindi":
        return f"""
वित्तीय स्वास्थ्य मूल्यांकन ({industry})

लाभ मार्जिन: {metrics['profit_margin']}%
उद्योग से तुलना: {profit_diff}%

ऋण स्थिति अंतर: {debt_diff}

सिफारिशें:
- लागत नियंत्रण में सुधार करें
- कार्यशील पूंजी चक्र बेहतर करें
- उद्योग मानकों के अनुसार ऋण स्तर समायोजित करें
"""

    return f"""
Financial Health Assessment ({industry})

Profit Margin: {metrics['profit_margin']}%
Vs Industry: {profit_diff}%

Debt Difference: {debt_diff}

Recommendations:
- Optimize operating costs
- Improve working capital cycle
- Align debt levels with industry benchmarks
"""
