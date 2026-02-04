def analyze_financials(df):
    def safe_sum(col):
        return float(df[col].astype(float).sum()) if col in df else 0

    revenue = safe_sum("revenue")
    expenses = safe_sum("expenses")
    receivables = safe_sum("receivables")
    payables = safe_sum("payables")
    inventory = safe_sum("inventory")
    debt = safe_sum("loan_amount")

    profit = revenue - expenses

    return {
        "revenue": revenue,
        "profit": profit,
        "profit_margin": round((profit / revenue) * 100, 2) if revenue else 0,
        "liquidity_ratio": round(receivables / payables, 2) if payables else 0,
        "inventory_turnover": round(revenue / inventory, 2) if inventory else None,
        "debt_ratio": round(debt / revenue, 2) if revenue else 0
    }
