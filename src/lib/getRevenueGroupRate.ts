import { MonthlyRevenueType } from "@/hooks/useTaiwanStockMonthRevenue";
import dayjs from "dayjs";


export type MonthlyRevenueTypeWithRevenueGroupRate = MonthlyRevenueType & {revenue_group_rate:number}

export default function getRevenueGroupRate(data: MonthlyRevenueType[]) {
  const lastYearRevenueMapper: {[key: string]: MonthlyRevenueType} = {};
  const revenueGroupRate: MonthlyRevenueTypeWithRevenueGroupRate[] = []
  data.forEach(d => {
    
    const lastYearDate = dayjs(d.date).subtract(1, 'year').format('YYYY-MM-DD')
    
    const lastMonthlyRevenue = lastYearRevenueMapper[lastYearDate]
    if(lastMonthlyRevenue) {
        revenueGroupRate.push({
            ...d,
            revenue_group_rate: ((d.revenue/lastMonthlyRevenue.revenue) - 1)*100
        })
    } 
    lastYearRevenueMapper[d.date] = d

  })

  return revenueGroupRate
}
