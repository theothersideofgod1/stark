import {
  MonthlyRevenueType,
} from "@/hooks/useTaiwanStockMonthRevenue";
import getRevenueGroupRate, { MonthlyRevenueTypeWithRevenueGroupRate } from "@/lib/getRevenueGroupRate";
import { useMemo } from "react";
import ReactECharts from "echarts-for-react";

export default function MonthlyRevenueChart({
  data,
}: {
  data: MonthlyRevenueTypeWithRevenueGroupRate[];
}) {
  const options = useMemo(() => {
    return {
      grid: { top: 30, right: 50, bottom: 50, left: 100 },
      legend: {
        data: ["每月營收", "單月營收年增率(%)"],
        show: true,
        left: 100,
        top: 30,
      },
      xAxis: {
        type: "category",
        axisLine: {
          show: true,
        },
      },
      yAxis: [
        {
          type: "value",
          name: "千元",
          nameLocation: "end",
          axisLabel: {
            formatter: (value: number) => (value / 1000).toLocaleString(),
          },
        },
        {
          type: "value",
          name: "%",
          nameLocation: "end",
        },
      ],
      dataset: {
        source: data
      },
      series: [
        {
          name: "每月營收",
          dimensions: ["date", "revenue"],
          type: "bar",
          itemStyle: {
            color: "#F6DF98",
            borderColor: "#E8AF00",
          },
          yAxisIndex: 0,
        },
        {
          name: "單月營收年增率(%)",
          type: "line",
          dimensions: ["date", "revenue_group_rate"],
          yAxisIndex: 1,
          itemStyle: {
            color: "#CB4A4C",
          },
          symbol: "none",
        },
      ],
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.8)",
        borderColor: "rgba(0,0,0,0.8)",
        textStyle: {
          color: "#ffffff",
        },
        formatter: (params: any) => {
          const [revenue, revenueRate] = params;
          return `<table>
          <tr>
              <td>${revenue.name}</td>
              <td></td>
          </tr>
          <tr>
              <td>每月營收</td>
              <td>${(revenue.data.revenue / 1000).toLocaleString()}千元</td>
          </tr>
          <tr>
              <td>單月營收年增率(%)</td>
              <td class='text-right'>${revenue.data.revenue_group_rate.toFixed(
                2
              )}%</td>
          </tr>
      </table>`;
        },
      },
    };
  }, [data]);

  return (
    <ReactECharts
      style={{ height: "100%", width: "100%" }}
      option={options}
      notMerge={true}
    />
  );
}
