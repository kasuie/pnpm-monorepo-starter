/*
 * @Author: kasuie
 * @Date: 2024-03-15 15:36:26
 * @LastEditors: kasuie
 * @LastEditTime: 2024-03-15 16:07:52
 * @Description:
 */
import { getTime } from "./utils";

export const date = getTime();
const test = () => {
  console.log(`hello, pnpm-monorepo-starter. \nnow is ${date}`);
};
export { test, getTime };
