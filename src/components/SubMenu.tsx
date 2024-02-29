"use client";

import useMainMenuActive from "@/hooks/useMainMenuActive";
import useStock from "@/hooks/useStock";
import { List, ListItem } from "@mui/material";
import Link from "next/link";

export default function SubMenu() {
  const { subMenu, subMenuPath } = useMainMenuActive();
  const { stock } = useStock();
  return (
    <List>
      {subMenu.map((router) => {
        return (
          <ListItem key={router.name} sx={{
            padding: 0,
            a:{
              padding: '9px 15px',
              fontSize: '13px',
              '&:hover': {
                color: 'blue.main',
                borderLeft: 3,
                borderColor: 'blue.main'
              },
              borderLeft: 3,
              borderColor: subMenuPath === router.href ? 'blue.main' : 'transparent',
              color: subMenuPath === router.href ? 'blue.main' : 'currentcolor',
            }
          }}>
            <Link href={`/analysis/${stock?.stock_id}/${router.href}`}>
              {router.name}
            </Link>
          </ListItem>
        );
      })}
    </List>
    // <ul>
    //   <ul className="flex flex-col font-normal">
    //     {subMenu.map((router) => {
    //       return (
    //         <li
    //           key={router.href}
    //           className={`p-2 h-10 pl-4 border-l-2  hover:border-blue-600 hover:text-blue-600 ${
    //             subMenuPath === router.href
    //               ? "border-blue-600 text-blue-600"
    //               : "border-white border-opacity-0"
    //           }`}
    //         >
    //           <Link href={`/analysis/${stock?.stock_id}/${router.href}`}>{router.name}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </ul>
  );
}
