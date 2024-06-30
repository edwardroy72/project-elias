import fs from "fs";
import { TreeNode } from "./tree/TreeNode";

let data = {};

export const getData = () => data;
export const setData = (newData: TreeNode): void => {
  data = newData;

  const jsonStr = JSON.stringify(newData);
  fs.writeFileSync("./data.json", jsonStr);
};

export const loadData = (): void => {
  try {
    if (fs.existsSync("./data.json")) {
      const datastore = fs.readFileSync("./data.json", "utf8");
      data = JSON.parse(datastore);
    }
  } catch (err) {
    console.error("Error loading data:", err);
  }
};
