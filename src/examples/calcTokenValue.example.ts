import { TokenInfoInterface, calcTokenValue } from "..";

const token: TokenInfoInterface = {
  minValue: 100,
  availableTokens: 100000,
  slotUnitValue: 100,
  valuePerToken: 1,
};

const desiredValueToBuy: number = 5000;
const result = calcTokenValue(token, desiredValueToBuy);

console.log(result);
