"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.calcTokenValue = exports.calcTokenPercent = void 0;
/**
 *
 * @param tokenInfo
 * @param desirePercent
 * @returns
 */
function calcTokenPercent(tokenInfo, desirePercent) {
    var minValue = tokenInfo.minValue, availableTokens = tokenInfo.availableTokens, valuePerToken = tokenInfo.valuePerToken, slotUnitValue = tokenInfo.slotUnitValue;
    //de 0 a 1
    var coust = round(Math.max(minValue, availableTokens * desirePercent), slotUnitValue);
    //arredonda o custo para cima mais próximo do valor do slotUnitValue
    var tokens = coust / valuePerToken;
    var result = {
        desirePercent: tokens / availableTokens,
        coust: coust,
        tokens: tokens,
    };
    return result;
}
exports.calcTokenPercent = calcTokenPercent;
/**
 *
 * @param tokenInfo info of the token
 * @param value Total desired to dispend in tokens
 * @returns CalcResultInterface
 */
function calcTokenValue(tokenInfo, value) {
    var minValue = tokenInfo.minValue, availableTokens = tokenInfo.availableTokens, valuePerToken = tokenInfo.valuePerToken, slotUnitValue = tokenInfo.slotUnitValue;
    //de 0 a 1
    var coust = round(Math.max(minValue, value), slotUnitValue);
    //arredonda o custo para cima mais próximo do valor do slotUnitValue
    var tokens = coust / valuePerToken;
    var result = {
        desirePercent: tokens / availableTokens,
        coust: coust,
        tokens: tokens,
    };
    return result;
}
exports.calcTokenValue = calcTokenValue;
/**
 * Arredonda o valor para cima mais próximo do valor do slotUnitValue
 * @param value
 * @param slotUnitValue
 * @returns
 */
function round(value, slotUnitValue) {
    return Math.ceil(value / slotUnitValue) * slotUnitValue;
}
exports.round = round;
