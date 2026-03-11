export interface Slide {
  id: number;
  title: string;
  bullets: string[];
}

export interface StrategyState {
  slides: Slide[];
  mermaid_code: string;
}

export const MOCK_STRATEGY: StrategyState = {
  slides: [
    {
      id: 1,
      title: "Executive Summary – Digital Transformation Roadmap",
      bullets: [
        "Current state assessment reveals 3 critical capability gaps in data infrastructure",
        "Proposed federated lakehouse architecture reduces data latency by 78%",
        "Expected ROI of 3.2x within 18 months of full deployment",
        "Phased implementation minimizes operational disruption",
      ],
    },
    {
      id: 2,
      title: "Market Context & Competitive Landscape",
      bullets: [
        "Industry shift toward real-time analytics and AI-driven decision making",
        "Key competitors have invested $50M+ in data modernization",
        "Customer expectations for personalization increasing 40% YoY",
        "Regulatory requirements demand improved data governance",
      ],
    },
    {
      id: 3,
      title: "Strategic Pillars & Implementation Framework",
      bullets: [
        "Pillar 1: Unified Data Platform – Federated Lakehouse on cloud-native stack",
        "Pillar 2: AI/ML Operationalization – MLOps pipeline for model deployment",
        "Pillar 3: Customer 360 – Real-time CDP integration across touchpoints",
        "Pillar 4: Governance & Security – Zero-trust data mesh architecture",
      ],
    },
    {
      id: 4,
      title: "Financial Impact & Business Case",
      bullets: [
        "Total investment: $4.2M over 3 phases (12-month cadence)",
        "Revenue uplift estimated at $12.8M through improved personalization",
        "Cost reduction of $3.1M via automated data pipelines",
        "Break-even projected at month 14 post-launch",
      ],
    },
  ],
  mermaid_code: `graph TB
    subgraph Sources["Data Sources"]
        style Sources fill:#fff5f5,stroke:#FF4B4B
        S1["🏪 POS Systems"]
        S2["📱 Mobile App"]
        S3["🌐 E-Commerce"]
        S4["📊 ERP / SAP"]
        S5["📋 CRM"]
    end

    subgraph Ingestion["Ingestion Layer"]
        style Ingestion fill:#fff5f5,stroke:#FF4B4B
        I1["Apache Kafka"]
        I2["CDC Streams"]
        I3["Batch ETL"]
    end

    subgraph Lakehouse["Federated Lakehouse"]
        style Lakehouse fill:#fff0f0,stroke:#FF4B4B
        L1["Bronze – Raw Zone"]
        L2["Silver – Curated Zone"]
        L3["Gold – Business Zone"]
    end

    subgraph Analytics["Analytics & AI"]
        style Analytics fill:#fff5f5,stroke:#FF4B4B
        A1["Real-time Dashboards"]
        A2["ML Models"]
        A3["Customer 360"]
    end

    subgraph Consumption["Business Applications"]
        style Consumption fill:#fff5f5,stroke:#FF4B4B
        C1["Executive Reports"]
        C2["Personalization Engine"]
        C3["Supply Chain Optimizer"]
    end

    S1 --> I1
    S2 --> I1
    S3 --> I2
    S4 --> I3
    S5 --> I2

    I1 --> L1
    I2 --> L1
    I3 --> L1

    L1 --> L2
    L2 --> L3

    L3 --> A1
    L3 --> A2
    L3 --> A3

    A1 --> C1
    A2 --> C2
    A3 --> C3`,
};
