import "./styles.css";
import { useCaniuseJsonData } from "./useCaniuseJsonData";
import { ListItem } from "./ListItem";
import { FC, useMemo } from "react";
import { globalAtom } from "./atom";
import { useAtom } from "jotai";

const Score: FC<{ total: number }> = (props) => {
  const { total } = props;
  const [value] = useAtom(globalAtom);
  let score = 0;

  console.log("value", value);

  const scoreMap = {
    masterIt: 3,
    usedIt: 2,
    knowIt: 1,
    none: 0
  };

  for (const [, item] of Object.entries(value)) {
    score += scoreMap[item] ?? 0;
  }

  return (
    <h2>
      Score: {score} / {total * 3}
    </h2>
  );
};

export default function App() {
  const caniuseData = useCaniuseJsonData();
  const featureKeys = useMemo(() => Object.keys(caniuseData?.data || {}), [
    caniuseData
  ]);

  if (!caniuseData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Can i use - Can you use</h1>
      <p>Updated: {new Date(caniuseData.updated * 1000).toISOString()}</p>
      <p>Feature: {featureKeys.length}</p>
      <Score total={featureKeys.length} />

      <ul>
        {featureKeys.map((item) => (
          <ListItem caniuseData={caniuseData} item={item} key={item} />
        ))}
      </ul>
    </div>
  );
}
