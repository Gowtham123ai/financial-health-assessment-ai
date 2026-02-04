INDUSTRY_BENCHMARKS = {
    "Manufacturing": {"profit_margin": 18, "debt_ratio": 0.45},
    "Retail": {"profit_margin": 12, "debt_ratio": 0.35},
    "Services": {"profit_margin": 25, "debt_ratio": 0.30},
    "Logistics": {"profit_margin": 15, "debt_ratio": 0.50},
    "E-commerce": {"profit_margin": 10, "debt_ratio": 0.40}
}

def benchmark(metrics, industry):
    bench = INDUSTRY_BENCHMARKS.get(industry, {})
    return {
        "profit_margin_vs_industry":
            metrics["profit_margin"] - bench.get("profit_margin", 0),
        "debt_vs_industry":
            metrics["debt_ratio"] - bench.get("debt_ratio", 0)
    }

