import { MonthlyRevenueTypeWithRevenueGroupRate } from "@/lib/getRevenueGroupRate";
import { Box } from "@mui/material";
import { ReactElement, useEffect, useRef, useState } from "react";

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

  const [isTableScrolled, setIsTableScrolled] = useState(false);

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

  const handleScroll = () => {
    if(ref.current) {
      if(ref.current.scrollLeft > 0) {
        setIsTableScrolled(true)
      } else {
        setIsTableScrolled(false)
      }
    }
  }

  return (
    <Box ref={ref} sx={{
      overflowY: 'auto',
      border: 2,
      borderColor: 'tableBorderColor.main',
      table: {
        thead: {
          tr: {
            th: {
              fontWeight: 400,
              maxWidth: '250px',
              minWidth: '160px',
              color: 'text.primary',
              border: 2,
              borderColor: 'tableBorderColor.main',
              textAlign: 'right',
              padding: '8px',
              backgroundColor: 'tableRowColor.main',
              borderTop: 'none',
              '&:first-child': {
                position: 'sticky',
                left: 0,
                borderLeft: 'none',
                '&::after': isTableScrolled ? {
                  display: 'block',
                  backgroundColor: '#ffffff',
                  content: `" "`,
                  position: 'absolute',
                  top: '-4px',
                  right: '-5px',
                  height: 'calc(100% + 4px)',
                  width: '5px',
                  borderLeft: 2,
                  borderLeftColor: 'tableBorderColor.main'
                } : undefined
              },
              '&:last-child': {
                borderRight: 'none',
              }
            }
          }
        },
        tbody: {
          tr: {
            fontWeight: 200,
            '&:nth-child(even)': {
              td: {
                backgroundColor: 'tableRowColor.main',
              }
            },
            '&:nth-child(odd)': {
              td: {
                backgroundColor: '#ffffff',
              }
            },
            td: {
              maxWidth: '250px',
              minWidth: '160px',
              color: 'text.primary',
              border: 2,
              borderColor: 'tableBorderColor.main',
              textAlign: 'right',
              padding: '8px',
              '&:first-child': {
                position: 'sticky',
                left: 0,
                fontWeight: 400,
                borderLeft: 'none',
                '&::after': isTableScrolled ? {
                  display: 'block',
                  backgroundColor: '#ffffff',
                  content: `" "`,
                  position: 'absolute',
                  top: '-4px',
                  right: '-5px',
                  height: 'calc(100% + 4px)',
                  width: '5px',
                  borderLeft: 2,
                  borderLeftColor: 'tableBorderColor.main'
                } : undefined
              },
              '&:last-child': {
                borderRight: 'none',
              }
            }
          }
        }
      }
    }}
    onScroll={handleScroll}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {transposed.map(
            (row: { [key: string]: string | number }, rowIndex: number) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex: number) => (
                  <td key={colIndex}>{row[column.id]}</td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </Box>
  );
}
