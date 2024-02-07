/**
 * @author: Renato Seiji Miawaki
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
  //de 0 a 1
  let coust: number = round(
    Math.max(minValue, availableTokens * desirePercent),
    slotUnitValue
  );
  //arredonda o custo para cima mais próximo do valor do slotUnitValue
  const tokens = coust / valuePerToken;
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    coust,
    tokens,
  };
  return result;
}

/**
 *
 * @param tokenInfo info of the token
 * @param value Total desired to dispend in tokens
 * @returns CalcResultInterface
 */
export function calcTokenValue(
  tokenInfo: TokenInfoInterface,
  value: number
): CalcResultInterface {
  const { minValue, availableTokens, valuePerToken, slotUnitValue } = tokenInfo;
  //de 0 a 1
  let coust: number = round(Math.max(minValue, value), slotUnitValue);
  //arredonda o custo para cima mais próximo do valor do slotUnitValue
  const tokens = coust / valuePerToken;
  const result: CalcResultInterface = {
    desirePercent: tokens / availableTokens,
    coust,
    tokens,
  };
  return result;
}
/**
 * Arredonda o valor para cima mais próximo do valor do slotUnitValue
 * @param value
 * @param slotUnitValue
 * @returns
 */
export function round(value: number, slotUnitValue: number): number {
  return Math.ceil(value / slotUnitValue) * slotUnitValue;
}
