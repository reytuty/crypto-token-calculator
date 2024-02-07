"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var token = {
    minValue: 100,
    availableTokens: 1000000,
    slotUnitValue: 100,
    valuePerToken: 1,
};
var desiredValueToBuy = 5000;
var result = (0, __1.calcTokenValue)(token, desiredValueToBuy);
console.log(result);
