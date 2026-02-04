import os
from industry_benchmarks import benchmark

try:
    from openai import OpenAI
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
except Exception:
    client = None


def ai_insights(metrics, language="English", industry="Services"):
    bench = benchmark(metrics, industry)

    # ---------- Fallback (SAFE) ----------
    fallback_response = f"""
Financial Health Assessment ({industry})

Profit Margin: {metrics['profit_margin']}%
Vs Industry: {bench['profit_margin_vs_industry']}%

Recommendations:
- Optimize costs
- Improve working capital cycle
"""

    if not client:
        return fallback_response

    # ---------- AI PROMPT ----------
    if language == "Hindi":
        prompt = f"""
आप एक वित्तीय सलाहकार हैं।

उद्योग: {industry}
लाभ मार्जिन: {metrics['profit_margin']}%
उद्योग औसत अंतर: {bench['profit_margin_vs_industry']}%
ऋण अनुपात: {metrics['debt_ratio']}

कृपया दें:
1. क्रेडिट योग्यता विश्लेषण
2. वित्तीय जोखिम
3. लागत अनुकूलन सुझाव
4. कार्यशील पूंजी सुधार

सरल हिंदी में उत्तर दें।
"""
    else:
        prompt = f"""
You are a financial advisor for SMEs.

Industry: {industry}
Profit Margin: {metrics['profit_margin']}%
Industry Comparison: {bench['profit_margin_vs_industry']}%
Debt Ratio: {metrics['debt_ratio']}

Provide:
1. Creditworthiness assessment
2. Key financial risks
3. Cost optimization suggestions
4. Working capital improvement advice

Use simple language for business owners.
"""

    # ---------- AI CALL ----------
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # GPT-5-ready structure
            messages=[{"role": "user", "content": prompt}],
            temperature=0.4
        )

        return response.choices[0].message.content

    except Exception:
        return fallback_response
