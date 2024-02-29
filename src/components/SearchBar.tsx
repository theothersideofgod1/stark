"use client";

import {
  Autocomplete,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import useTaiwanStockInfo, { StockInfoType } from "@/hooks/useTaiwanStockInfo";
import { usePathname, useRouter } from "next/navigation";
import useStock from "@/hooks/useStock";
import { SyntheticEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const { stocks } = useTaiwanStockInfo();
  const router = useRouter();

  const pathname = usePathname();
  const { selectStock } = useStock();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: StockInfoType | null
  ) => {
    if (value) {
      selectStock(value);
      router.push(`/analysis/${value?.stock_id}/${pathname.split("/").pop()}`);
    }
  };

  return (
    <header className="p-2 bg-white">
      <Autocomplete
        size="small"
        sx={{ margin: "auto", width: 300 }}
        options={stocks ? stocks.data : []}
        autoHighlight
        disableClearable
        forcePopupIcon={false}
        getOptionLabel={(option: StockInfoType) => option.stock_id}
        renderOption={(props, option: StockInfoType) => (
          <Box component="li" {...props}>
            {option.stock_id} {option.stock_name} {option.industry_category}
          </Box>
        )}
        onChange={handleChange}
        renderInput={(params) => {
          console.log(params);
          return (
            <TextField
              {...params}
              size="small"
              placeholder="輸入台／美股代號，查看公司價值"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
    </header>
  );
}
