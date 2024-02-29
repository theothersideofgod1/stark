const Routers = [
  {
    key: "overview",
    name: "最新動態",
    href: "/",
    children: [],
  },
  {
    key: "stock-health-check",
    name: "財務報表",
    href: "/stock-health-check",
    children: []
  },
  {
    key: "statement",
    name: "財務報表",
    href: "monthly-revenue",
    children: [
      {
        name: "每月營收",
        href: "monthly-revenue",
      },
      {
        name: "每股盈餘",
        href: "eps",
      },
      {
        name: "每股淨值",
        href: "nav",
      },
      {
        name: "損益表",
        href: "income-statement",
      },
      {
        name: "總資產",
        href: "assets",
      },
      {
        name: "負債和股東權益",
        href: "liabilities-and-equity",
      },
      {
        name: "現金流量表",
        href: "cash-flow-statement",
      },
      {
        name: "股利政策",
        href: "dividend-policy",
      },
      {
        name: "電子書",
        href: "e-report",
      },
    ],
  },
  {
    key: "profit",
    name: "獲利能力",
    href: "profit-margin",
    children: [
      {
        name: "利潤比率",
        href: "profit-margin",
      },
      {
        name: "營業費用率拆解",
        href: "operating-expense-ratio",
      },
      {
        name: "業外佔稅前淨利比例",
        href: "non-operating-income-to-profit-before-tax",
      },
      {
        name: "ROE / ROA",
        href: "roe-roa",
      },
      {
        name: "杜邦分析",
        href: "du-pont-analysis",
      },
      {
        name: "經營週轉能力",
        href: "turnover-ratio",
      },
      {
        name: "營運週轉天數",
        href: "turnover-days",
      },
      {
        name: "現金股利發放率",
        href: "dividend-payout-ratio",
      },
    ],
  },
  {
    key: "safety",
    name: "安全性分析",
    href: "financial-structure-ratio",
    children: [
      {
        name: "財務結構比率",
        href: "financial-structure-ratio",
      },
      {
        name: "流速動比率",
        href: "current-ratio-and-quick-ratio",
      },
      {
        name: "利息保障倍數",
        href: "interest-coverage-ratio",
      },
      {
        name: "現金流量分析",
        href: "cash-flow-analysis",
      },
      {
        name: "營業現金流對淨利比",
        href: "operating-cash-flow-to-net-income-ratio",
      },
      {
        name: "盈餘再投資比率",
        href: "reinvestment-rate",
      },
    ],
  },
  {
    key: "growth",
    name: "成長力分析",
    href: "monthly-revenue-growth-rate",
    children: [
      {
        name: "月營收成長率",
        href: "monthly-revenue-growth-rate",
      },
      {
        name: "營收成長率",
        href: "revenue-growth-rate",
      },
      {
        name: "毛利成長率",
        href: "gross-profit-growth-rate",
      },
      {
        name: "營業利益成長率",
        href: "operating-income-growth-rate",
      },
      {
        name: "稅後淨利成長率",
        href: "net-income-growth-rate",
      },
      {
        name: "每股盈餘成長率",
        href: "eps-growth-rate",
      },
    ],
  },
  {
    key: "valuation",
    name: "價值評估",
    href: "pe",
    children: [
      {
        name: "本益比評價",
        href: "pe",
      },
      {
        name: "本益比河流圖",
        href: "pe-band",
      },
      {
        name: "股價淨值比評價",
        href: "pb",
      },
      {
        name: "股價淨值比河流圖",
        href: "pb-band",
      },
      {
        name: "現金股利殖利率",
        href: "dividend-yield",
      },
      {
        name: "平均現金股息殖利率",
        href: "average-dividend-yield",
      },
      {
        name: "平均現金股息河流圖",
        href: "average-dividend-yield-band",
      },
    ],
  },
  {
    key: "manager",
    name: "董監與籌碼",
    href: "broker-trading",
    children: [
      {
        name: "分點籌碼動向",
        href: "broker-trading",
      },
      {
        name: "董監持股比例",
        href: "board-members-and-supervisors-shares-to-shares-outstanding-ratio",
      },
      {
        name: "董監持股質押比例",
        href: "pledging-ratio-of-board-members-and-supervisors",
      },
    ],
  },
  {
    key: "dogvip",
    name: "關鍵指標",
    href: "long-term-and-short-term-monthly-revenue-yoy",
    children: [
      {
        name: "長短期月營收年增率",
        href: "long-term-and-short-term-monthly-revenue-yoy",
      },
      {
        name: "長短期月營收平均值",
        href: "average-long-term-and-short-term-monthly-revenue",
      },
      {
        name: "自由現金流報酬率",
        href: "croic",
      },
      {
        name: "Piotroski F 分數",
        href: "piotroski-f-score",
      },
      {
        name: "長短期金融借款",
        href: "financial-borrowing",
      },
      {
        name: "現金週轉循環",
        href: "cash-conversion-cycle",
      },
      {
        name: "彼得林區評價",
        href: "peter-lynch-valuation",
      },
      {
        name: "股利折現評價",
        href: "dividend-discount-valuation",
      },
      {
        name: "現金流折現評價",
        href: "dcf-valuation",
      },
      {
        name: "大股東持股比率",
        href: "majority-shareholders-share-ratio",
      },
    ],
  },
  {
    key: "product-and-sales",
    name: "產品組合",
    href: "product-sales-figure",
    children: [
      {
        name: "產品銷售額",
        href: "product-sales-figure",
      },
      {
        name: "產品銷售量",
        href: "product-sales-volume",
      },
      {
        name: "產品單價",
        href: "product-unit-price",
      },
      {
        name: "產能與產量",
        href: "production-capacity",
      },
      {
        name: "產能利用率",
        href: "production-capacity-utilization",
      },
      {
        name: "區域銷售額",
        href: "product-regional-sales",
      },
    ],
  },
];
export default Routers;
