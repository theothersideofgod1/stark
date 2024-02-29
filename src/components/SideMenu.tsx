"use client";
import useMainMenuActive from "@/hooks/useMainMenuActive";
import useStock from "@/hooks/useStock";
import Routers from "@/lib/routers";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ReactNode } from "react";

const RouterIconMapper: { [key: string]: ReactNode } = {
  overview: <div style={{ color: "#434343" }}>B</div>,
  "stock-health-check": <div style={{ color: "#434343" }}>F</div>,
  statement: <div style={{ color: "#434343" }}>C</div>,
  profit: <div style={{ color: "#CA0913" }}>D</div>,
  safety: <div style={{ color: "#1B841F" }}>E</div>,
  growth: <div style={{ color: "#E6781F" }}>q</div>,
  valuation: <div style={{ color: "#345BA6" }}>J</div>,
  manager: <div style={{ color: "#434343" }}>G</div>,
  dogvip: <div style={{ color: "#743079" }}>H</div>,
  "product-and-sales": <div style={{ color: "#526FD7" }}>I</div>,
};

export default function SideMenu() {
  const { mainMenuKey } = useMainMenuActive();
  const { stock } = useStock();
  return (
    <List
      sx={{
        fontWeight: 300,
        borderRight: "1px solid #DFDFDF",
      }}
    >
      {Routers.map((router, index) => {
        return (
          <ListItem
            key={index}
            sx={{
              padding: 0,
              marginBottom: '18px',
              a: {
                width: "100%",
                padding: "0px 8px",
                fontSize: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderLeft: 3,
                borderColor:
                  mainMenuKey === router.key ? "blue.main" : "transparent",
                color:
                  mainMenuKey === router.key ? "blue.main" : "currentcolor",
              },
            }}
          >
            <Link href={`/analysis/${stock?.stock_id}/${router.href}`}>
              <div>{RouterIconMapper[router.key]}</div>
              <div>{router.name}</div>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
