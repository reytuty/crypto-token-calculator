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
  coust: number;
  tokens: number;
}

/**
 *
 * @param tokenInfo
 * @param desirePercent
 * @returns
 */
export function calcTokenPercent(
  tokenInfo: TokenInfoInterface,
  desirePercent: number
): CalcResultInterface {
  const { minValue, availableTokens, valuePerToken, slotUnitValue } = tokenInfo;
  //limit between 0 to 1
  desirePercent = Math.min(1, Math.max(0, desirePercent));
  let coust: number = round(
    Math.max(minValue, availableTokens * desirePercent),
    slotUnitValue
  );
  //rounds the cost up to the nearest slotUnitValue
  const tokens = coust / valuePerToken;
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    coust,
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

  //rounds the cost up to the nearest slotUnitValue
  let coust: number = round(Math.max(minValue, value), slotUnitValue);
  const maxValue: number = availableTokens * valuePerToken;
  while (coust > maxValue) {
    coust -= slotUnitValue;
  }
  const tokens = coust / valuePerToken;
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    coust,
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
