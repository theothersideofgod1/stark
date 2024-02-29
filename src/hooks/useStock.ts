import { create } from "zustand";
import { StockInfoType } from "./useTaiwanStockInfo";

type StockStoreType = {
  stock: StockInfoType | null;
  selectStock: (selectedStock: StockInfoType) => void;
};

const useStock = create<StockStoreType>((set) => ({
  stock: {
    date: "2024-02-27",
    industry_category: "電子工業",
    stock_id: "2330",
    stock_name: "台積電",
    type: "twse",
  },
  selectStock: (selectedStock: StockInfoType) =>
    set(() => ({ stock: selectedStock })),
}));

export default useStock;
