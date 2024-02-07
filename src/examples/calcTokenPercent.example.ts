import { TokenInfoInterface, calcTokenPercent } from "..";

const token: TokenInfoInterface = {
  minValue: 100,
  availableTokens: 1000000,
  slotUnitValue: 100,
  valuePerToken: 1,
};

const result = calcTokenPercent(token, 0.5000001);

console.log(result);
