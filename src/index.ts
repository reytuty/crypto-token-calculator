/**
 * @author: Renato Miawaki
 * @description: Functions to calculate the token value and percentage
 */
export interface TokenInfoInterface {
  minValue: number;
  availableTokens: number;
  valuePerToken: number;
  slotUnitValue: number;
}
export interface CalcResultInterface {
  desirePercent: number;
  cost: number;
  tokens: number;
}

const noTokens: CalcResultInterface = {
  desirePercent: 0,
  cost: 0,
  tokens: 0,
};
/**
 *
 * @param tokenInfo
 * @param desirePercent
 * @returns
 */
export function calcTokenPercent(
  tokenInfo: TokenInfoInterface,
  _desirePercent: number
): CalcResultInterface {
  const { minValue, availableTokens, valuePerToken, slotUnitValue } = tokenInfo;
  const availableTokenValue = availableTokens * valuePerToken;
  if (availableTokenValue < minValue) {
    return noTokens;
  }
  //limit between 0 to 1
  let desirePercent = Math.min(1, Math.max(0, _desirePercent));
  let cost: number = round(
    Math.max(minValue, availableTokens * valuePerToken * desirePercent),
    slotUnitValue
  );
  if (cost > availableTokenValue) {
    cost = availableTokenValue;
  }

  //rounds the cost up to the nearest slotUnitValue
  const tokens = cost / valuePerToken;
  if (tokens > availableTokens) {
    return noTokens;
  }
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    cost,
    tokens,
  };

  return result;
}

/**
 * Calculate if the token value is possible to dispend
 * @param tokenInfo info of the token
 * @param value Total desired to dispend in tokens
 * @returns CalcResultInterface
 */
export function calcTokenValue(
  tokenInfo: TokenInfoInterface,
  value: number
): CalcResultInterface {
  const { minValue, availableTokens, valuePerToken, slotUnitValue } = tokenInfo;
  const availableTokensValue: number = availableTokens * valuePerToken;
  //rounds the cost up to the nearest slotUnitValue
  let cost: number = round(
    Math.min(availableTokensValue, Math.max(minValue, value)),
    slotUnitValue
  );
  const tokens = cost / valuePerToken;
  if (tokens > availableTokens) {
    return noTokens;
  }
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    cost,
    tokens,
  };
  return result;
}
/**
 * Round the value up to the nearest slotUnitValue
 * @param value
 * @param slotUnitValue
 * @returns
 */
export function round(value: number, slotUnitValue: number): number {
  return Math.ceil(value / slotUnitValue) * slotUnitValue;
}
