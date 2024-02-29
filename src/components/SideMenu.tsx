"use client";
import useMainMenuActive from "@/hooks/useMainMenuActive";
import useStock from "@/hooks/useStock";
import Routers from "@/lib/routers";
import Link from "next/link";

export default function SideMenu() {
  const { mainMenuKey } = useMainMenuActive();
  const { stock } = useStock();
  return (
    <ul className="flex flex-col text-gray-500 border-r border-r-gray-300">
      {Routers.map((router) => {
        return (
          <li key={router.href} 
              className={`p-2 h-10 pl-4 border-l-2  hover:border-blue-600 hover:text-blue-600 ${
                mainMenuKey === router.key
                  ? "border-blue-600 text-blue-600"
                  : "border-white border-opacity-0"
              }`}
          >
            <Link
              
              href={`/analysis/${stock?.stock_id}/${router.href}`}
            >
              {router.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
