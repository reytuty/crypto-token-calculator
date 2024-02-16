import { TokenInfoInterface, calcTokenPercent } from "..";

const token: TokenInfoInterface = {
  minValue: 51.42,
  availableTokens: 10,
  slotUnitValue: 51.42,
  valuePerToken: 51.42,
};

const result = calcTokenPercent(
  token,
  0.500340934890534589345783458753487543788745354780001
);

console.log(result);
