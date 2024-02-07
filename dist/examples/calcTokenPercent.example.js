"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var token = {
    minValue: 100,
    availableTokens: 1000000,
    slotUnitValue: 100,
    valuePerToken: 1,
};
var result = (0, __1.calcTokenPercent)(token, 0.5000001);
console.log(result);
