import { FINMIND_API_URL, FINMIND_TRADE_TOKEN } from "@/lib/contants";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export interface StockInfoType {
  industry_category: string;
  stock_id: string;
  stock_name: string;
  type: string;
  date: string;
}

interface StockInfoTypeResponse {
  data: StockInfoType[];
}

export default function useTaiwanStockInfo() {
  const { data, error, isLoading } = useSWR<StockInfoTypeResponse>(
    'xxx',
    fetcher,
    {}
  );
  return {
    stocks: data,
    isLoading,
    isError: error,
  };
}
