import { FINMIND_API_URL, FINMIND_TRADE_TOKEN } from "@/lib/contants";
import fetcher from "@/lib/fetcher";
import useSWR, { SWRResponse } from "swr";

export interface MonthlyRevenueType {
  date: string;
  stock_id: string;
  country: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
}

export interface TaiwanStockMonthRevenueResponse {
  data: MonthlyRevenueType[];
}

export default function useTaiwanStockMonthRevenue(
  stockId: string,
  startDate: string,
  endDate: string
) {
  const params = {
    token: FINMIND_TRADE_TOKEN,
    dataset: "TaiwanStockMonthRevenue",
    data_id: stockId,
    start_date: startDate,
    end_date: endDate,
  };

  const { data, error, isLoading }: SWRResponse<TaiwanStockMonthRevenueResponse, Error> = useSWR<TaiwanStockMonthRevenueResponse, Error>(
    [FINMIND_API_URL, { params }],
    fetcher,
    {}
  );



  return {
    data,
    isLoading,
    isError: error,
  };
}
