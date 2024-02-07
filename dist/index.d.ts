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
export declare function calcTokenPercent(tokenInfo: TokenInfoInterface, desirePercent: number): CalcResultInterface;
/**
 *
 * @param tokenInfo info of the token
 * @param value Total desired to dispend in tokens
 * @returns CalcResultInterface
 */
export declare function calcTokenValue(tokenInfo: TokenInfoInterface, value: number): CalcResultInterface;
/**
 * Arredonda o valor para cima mais próximo do valor do slotUnitValue
 * @param value
 * @param slotUnitValue
 * @returns
 */
export declare function round(value: number, slotUnitValue: number): number;
