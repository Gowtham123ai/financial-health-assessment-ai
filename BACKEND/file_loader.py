import pandas as pd
import pdfplumber
from io import BytesIO

def load_file(file, filename):
    if filename.endswith(".csv"):
        return pd.read_csv(file)

    if filename.endswith(".xlsx"):
        return pd.read_excel(file)

    if filename.endswith(".pdf"):
        text = ""
        with pdfplumber.open(BytesIO(file.read())) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"

        # VERY simple parser assumption (text-based export)
        rows = []
        for line in text.splitlines():
            if "," in line:
                rows.append(line.split(","))

        return pd.DataFrame(rows[1:], columns=rows[0])

    raise ValueError("Unsupported file format")
