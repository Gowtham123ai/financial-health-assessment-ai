from sqlalchemy import Column, Integer, String
from database import Base

class FinancialSnapshot(Base):
    __tablename__ = "financial_snapshots"

    id = Column(Integer, primary_key=True)
    encrypted_payload = Column(String)
