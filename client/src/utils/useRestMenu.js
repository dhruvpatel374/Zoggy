import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fecthMenu();
  }, []);

  const fecthMenu = async () => {
    const data = await fetch(
      `${MENU_API}?restaurantId=${resId}
        &catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestMenu;
