
import Routers from "@/lib/routers";
import { usePathname } from "next/navigation";

interface LinkType {
  key: string;
  name: string;
  href: string;
  children: SubLinkType[]
}






interface SubLinkType {
  name: string
  href: string
}

export default function useMainMenuActive() {
  const pathname = usePathname();
  let subMenu: SubLinkType[] = []
  let mainMenuKey = null

  Routers.forEach((main:LinkType)  => {
    if(main.children.length>=0) {
      main.children.forEach((sub:SubLinkType) => {
        if(pathname.includes(sub.href)) {
          mainMenuKey = main.key
          subMenu = main.children
        }
      })
    }
  })

  return {
    mainMenuKey, subMenu, subMenuPath: pathname.split('/').pop()
  }

}
