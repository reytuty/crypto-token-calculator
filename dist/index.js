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
    //limit between 0 to 1
    desirePercent = Math.min(1, Math.max(0, desirePercent));
    var coust = round(Math.max(minValue, availableTokens * desirePercent), slotUnitValue);
    //rounds the cost up to the nearest slotUnitValue
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
 * Calculate if the token value is possible to dispend
 * @param tokenInfo info of the token
 * @param value Total desired to dispend in tokens
 * @returns CalcResultInterface
 */
function calcTokenValue(tokenInfo, value) {
    var minValue = tokenInfo.minValue, availableTokens = tokenInfo.availableTokens, valuePerToken = tokenInfo.valuePerToken, slotUnitValue = tokenInfo.slotUnitValue;
    //rounds the cost up to the nearest slotUnitValue
    var coust = round(Math.max(minValue, value), slotUnitValue);
    while (coust > availableTokens * valuePerToken) {
        coust -= slotUnitValue;
    }
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
 * Round the value up to the nearest slotUnitValue
 * @param value
 * @param slotUnitValue
 * @returns
 */
function round(value, slotUnitValue) {
    return Math.ceil(value / slotUnitValue) * slotUnitValue;
}
exports.round = round;
