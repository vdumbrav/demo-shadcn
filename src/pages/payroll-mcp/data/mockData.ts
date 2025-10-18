// Function to generate chart data with realistic random fluctuations
const generateChartData = (
  count: number,
  baseValue: number,
  variance: number,
  trend: number,
  getLabelFn: (index: number) => string
) => {
  const data = [];
  let currentValue = baseValue;
  let momentum = 0;

  for (let i = 0; i < count; i++) {
    // Add small overall trend
    currentValue += trend * 0.5;

    // Add momentum (creates waves/peaks and valleys)
    momentum += (Math.random() - 0.5) * 3;
    momentum *= 0.9; // Dampen momentum over time
    currentValue += momentum;

    // Add random variance for natural fluctuations
    const randomVariance = (Math.random() - 0.5) * variance;
    const value = Math.max(0, Math.round(currentValue + randomVariance));

    // Keep value within reasonable bounds
    currentValue = Math.max(baseValue * 0.5, Math.min(baseValue * 2, currentValue));

    data.push({
      name: getLabelFn(i),
      value: value,
    });
  }

  return data;
};

// Helper functions for generating labels
const getTodayLabel = (index: number) => {
  // 100 points over 24 hours
  const hoursAgo = 24 - (index * 0.24);
  const hour = Math.floor(hoursAgo);
  const minutes = Math.floor((hoursAgo - hour) * 60);
  return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const getMonthDayLabel = (index: number) => {
  // 100 points over 90 days (last 3 months)
  const daysAgo = Math.floor((90 - index * 0.9));
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return `${date.getDate()}/${date.getMonth() + 1}`;
};

const getDayLabel = (index: number) => {
  // 100 points over 30 days
  const daysAgo = Math.floor((30 - index * 0.3));
  return `Day ${31 - daysAgo}`;
};

const getHourLabel = (index: number) => {
  // 100 points over 7 days (168 hours)
  const hoursAgo = Math.floor((168 - index * 1.68));
  const daysAgo = Math.floor(hoursAgo / 24);
  const hours = hoursAgo % 24;
  return daysAgo === 0 ? `${hours}h` : `${daysAgo}d ${hours}h`;
};

const getYearLabel = (index: number) => {
  // 100 points over 365 days
  const daysAgo = Math.floor((365 - index * 3.65));
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

// Chart data for visitors statistics
export const chartDataByPeriod = {
  // Today: Hourly data (20-80 range)
  "today": generateChartData(100, 50, 15, 0.2, getTodayLabel),

  // Last 7 days: Very high values (500-1000 range)
  "last-7-days": generateChartData(100, 750, 120, 3, getHourLabel),

  // Last 30 days: Low values (50-150 range)
  "last-30-days": generateChartData(100, 100, 25, 0.5, getDayLabel),

  // Last 3 months: Medium-high values (300-600 range)
  "last-3-months": generateChartData(100, 450, 80, 2, getMonthDayLabel),

  // Last year: Medium values (200-400 range)
  "last-year": generateChartData(100, 300, 60, 1.5, getYearLabel),
};

export const chartConfig = {
  value: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
};

// Stats cards data
export const statsData = [
  {
    title: "Total Revenue",
    value: "$15,231.89",
    badge: { icon: "up", text: "+12.5%" },
    trend: "Trending up this month",
    description: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    value: "1,234",
    badge: { icon: "down", text: "-20%" },
    trend: "Down 20% this period",
    description: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    badge: { icon: "up", text: "+12.5%" },
    trend: "Strong user retention",
    description: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    badge: { icon: "up", text: "+4.5%" },
    trend: "Steady performance increase",
    description: "Meets growth projections",
  },
];

// Available reviewers
export const availableReviewers = ["Jamik Tashpulatov", "Eddie Lake", "Sarah Connor", "John Smith", "Maria Garcia"];

// Table data for payroll sections
const generateTableData = () => {
  const types = ["Cover Page", "Table of Contents", "Technical Content", "Narrative", "Focus Document"];
  const statuses: ("done" | "in-process")[] = ["done", "in-process"];
  const reviewers = [...availableReviewers, null];
  const headers = [
    "Cover Page",
    "Table of contents",
    "Executive summary",
    "Technical approach",
    "Design",
    "Capabilities",
    "Integration with existing systems",
    "Innovation and Advantages",
    "Overview of EMR's Innovative Solutions",
    "Advanced Algorithms and Machine Learning",
    "Project Management Plan",
    "Risk Assessment and Mitigation",
    "Budget and Resource Allocation",
    "Timeline and Milestones",
    "Quality Assurance Procedures",
    "Team Qualifications",
    "Past Performance Examples",
    "Technical Specifications",
    "Security and Compliance",
    "Data Management Strategy",
    "Testing and Validation",
    "Deployment Strategy",
    "Training and Documentation",
    "Maintenance and Support",
    "Scalability Considerations",
    "Performance Metrics",
    "Stakeholder Communication",
    "Change Management Process",
    "Lessons Learned",
    "Future Enhancements",
    "Appendices",
    "References",
    "Glossary of Terms",
    "Index",
    "Contact Information",
    "Legal and Contractual",
    "Insurance and Liability",
    "Sustainability Plan",
    "Environmental Impact",
    "Social Responsibility",
    "Innovation Framework",
    "Best Practices",
    "Industry Standards",
    "Competitive Analysis",
    "Market Research",
    "Customer Feedback",
    "User Experience Design",
    "Accessibility Features",
    "Multi-language Support",
    "API Documentation",
    "System Architecture",
    "Database Design",
    "Network Infrastructure",
    "Cloud Services",
    "DevOps Practices",
    "Monitoring and Analytics",
    "Disaster Recovery",
    "Business Continuity",
    "Vendor Management",
    "Procurement Process",
    "Contract Negotiations",
    "Service Level Agreements",
    "Key Performance Indicators",
    "Return on Investment",
    "Cost-Benefit Analysis",
    "Financial Projections",
    "Revenue Models",
    "Pricing Strategy",
  ];

  return headers.map((header, index) => ({
    id: index + 1,
    header,
    type: types[Math.floor(Math.random() * types.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    target: String(Math.floor(Math.random() * 90) + 10),
    limit: String(Math.floor(Math.random() * 45) + 5),
    reviewer: reviewers[Math.floor(Math.random() * reviewers.length)],
    category: index < 20 ? "outline" : index < 40 ? "past-performance" : index < 50 ? "key-personnel" : "focus-documents",
  }));
};

export const tableData = generateTableData();

export type TableRowData = (typeof tableData)[0];
