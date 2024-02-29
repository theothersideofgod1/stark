"use client";
import useTaiwanStockMonthRevenue from "@/hooks/useTaiwanStockMonthRevenue";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useState } from "react";
import MonthlyRevenueChart from "./MonthlyRevenueChart";
import MonthlyRevenueTable from "./MonthlyRevenueTable";
import SectionLabel from "./SectionLabel";
import getRevenueGroupRate from "@/lib/getRevenueGroupRate";
import useStock from "@/hooks/useStock";


export default function MonthlyRevenue() {
  const [period, setPeriod] = useState<string>("3");
  const handlePeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  const { stock } = useStock();

  const params = useParams();

  const startDate = dayjs()
    .subtract(Number(period) + 1, "year")
    .format("YYYY-MM-DD");
  const endDate = dayjs().format("YYYY-MM-DD");

  const { data } = useTaiwanStockMonthRevenue(
    params.stock_id as string,
    startDate,
    endDate
  );



  const revenueWithGroupRate = data ? getRevenueGroupRate(data.data) : [];

  return (
    <div>
      <Box
        height={50}
        display="flex"
        alignItems="center"
        sx={{ marginBottom: "16px", background: "#ffffff", padding: "12px", fontSize: '18px', borderRadius: '5px' }}
      >
        {`${stock?.stock_name} (${stock?.stock_id})`}
      </Box>

      <Box height={500} sx={{ background: "#ffffff", marginBottom: "16px", borderRadius: '5px' }}>
        <div className="flex flex-col h-full">
          <div className="h-20 flex flex-row items-center p-4">
            <SectionLabel>每月营收</SectionLabel>
            <FormControl
              sx={{ m: 1, minWidth: 120, marginLeft: "auto" }}
              size="small"
            >
              <Select
                labelId="period-label"
                id="period"
                value={period}
                onChange={handlePeriodChange}
                sx={{
                  backgroundColor: 'blue.main',
                  color: '#ffffff',
                  borderColor: 'blue.main',
                  '.MuiSvgIcon-root': {
                    color: '#ffffff'
                  }
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: 'text.primary',
                      color: '#ffffff'
                    }
                  }
   
                }}
              >
                <MenuItem value={3}>近三年</MenuItem>
                <MenuItem value={5}>近五年</MenuItem>
                <MenuItem value={8}>近八年</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex-1">
            <MonthlyRevenueChart data={revenueWithGroupRate} />
          </div>
        </div>
      </Box>

      <Box
        sx={{ background: "#ffffff", marginBottom: "16px", padding: "12px", borderRadius: '5px' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
          <SectionLabel>詳細數據</SectionLabel>
        </Box>
        <MonthlyRevenueTable data={revenueWithGroupRate} />
      </Box>
    </div>
  );
}
