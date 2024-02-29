import { MonthlyRevenueTypeWithRevenueGroupRate } from "@/lib/getRevenueGroupRate";
import { Box } from "@mui/material";
import { ReactElement, useEffect, useRef } from "react";

const getTransposedArray = (data: MonthlyRevenueTypeWithRevenueGroupRate[]) => {
  const transposedArray: any = [];

  const keys = [
    {
      key: "revenue",
      name: "每月營收",
    },
    {
      key: "revenue_group_rate",
      name: "每月營收年增率(%)",
    },
  ];

  keys.forEach((key) => {
    const obj: { [key: string]: string } = {};
    obj["name"] = key.name;
    data.forEach((item: any) => {
      if (key.key === "revenue") {
        obj[item.date] = (item[key.key] / 1000).toLocaleString();
      }
      if (key.key === "revenue_group_rate") {
        obj[item.date] = item[key.key].toFixed(2);
      }
    });

    transposedArray.push(obj);
  });

  return transposedArray;
};

interface ColumnType {
  id: string;
  header: string;
  render?: () => ReactElement | null;
}

export default function MonthlyRevenueTable({
  data,
}: {
  data: MonthlyRevenueTypeWithRevenueGroupRate[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(
        ref.current.scrollWidth - ref.current.clientWidth,
        0
      );
    }
  }, [data]);

  const transposed = getTransposedArray(data);

  const columns = Object.keys(transposed[0]).map((key) => {
    if (key === "name") {
      return { id: "name", header: "年度月份" };
    }

    return {
      header: key,
      id: key,
    };
  });

  return (
    <Box
      sx={{ color: "#434343" }}
      className="w-full overflow-y-auto mt-2"
      ref={ref}
    >
      <table className=" table-auto" ref={tableRef}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="border-2 first:sticky left-0 bg-white"
              >
                <Box
                  sx={{
                    color: "#434343",
                    fontWeight: "400",
                    textAlign: "right",
                    padding: "12px",
                  }}
                >
                  {column.header}
                </Box>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {transposed.map(
            (row: { [key: string]: string | number }, rowIndex: number) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex: number) => (
                  <td
                    className=" min-w-48 border-2	 first:sticky left-0 bg-white"
                    key={colIndex}
                  >
                    <Box
                      sx={{
                        color: "#434343",
                        fontWeight: "400",
                        textAlign: "right",
                        padding: "12px",
                      }}
                    >
                      {row[column.id]}
                    </Box>
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </Box>
  );
}
