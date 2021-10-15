import { useEffect, useState } from "react";
import type { Caniuse } from "./Caniuse";

export function useCaniuseJsonData() {
  const [data, setData] = useState<Caniuse | null>(null);

  useEffect(() => {
    if (data) {
      return;
    }

    fetch("https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [data]);

  return data;
}
