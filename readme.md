# Crypto Token Calculator

To be used on screens or APIs in which the user can choose the quantity or percentage of tokens to purchase.
These functions receive the token configuration as minimum value for purchase, minimum value of each installment, and it returns the percentage purchased, the cost and how many tokens this will result in.
It does not depend on the currency used as you must send it in the currency you are working in.

## Functions

All the functions returns `CalcResultInterface` that has:

### CalcResultInterface

`desirePercent`: (number) Percent between 0 and 1, that means a desired percentage for total amount of tokens available

`coust`: (number) Value of this operation. Remember, all values are based on the same currency.

`tokens`: (number) Amount of tokens resulting from this operation

### TokenInfoInterface

`minValue`: (number) Minimum value in currency allowed to buy this token

`availableTokens`: (number) Total quantity of current available tokens

`valuePerToken`: (number) Coust per 1 unit of this token in currency

`slotUnitValue`: (number) Group amount of token values that are allowed to purchase, for example, if slotUnitValue is 5, you can only purchase using multiples of 5 coins to purchase this token.

# calcTokenPercent

Receives `tokenInfo` and the desired percentage (`desirePercent`) of tokens and returns `CalcResultInterface`.

Ideal if you are using a bar to symbolize the percentage of tokens desired for purchase.

Or you need to check whether the value sent corresponds to an accepted value.

## Usage

```
import { TokenInfoInterface, calcTokenPercent } from "crypto-token-calculator";

const token: TokenInfoInterface = {
  minValue: 100,
  availableTokens: 1000000,
  slotUnitValue: 100,
  valuePerToken: 1,
};

const percentDesired:Number = 0.5000001;
const result = calcTokenPercent(token, percentDesired);

console.log(result);

//output: { desirePercent: 0.5001, coust: 500100, tokens: 500100 }

```

# calcTokenValue

Receives `tokenInfo` and the total value (`desiredValue`) of tokens and returns `CalcResultInterface`.

Ideal if you are using a bar to symbolize the percentage of tokens desired for purchase.

Or you need to check whether the value sent corresponds to an accepted value.

## Usage

```
import { TokenInfoInterface, calcTokenValue } from "crypto-token-calculator";

const token: TokenInfoInterface = {
  minValue: 100,
  availableTokens: 1000000,
  slotUnitValue: 100,
  valuePerToken: 1,
};

const desiredValueToBuy: number = 5000;
const result = calcTokenValue(token, desiredValueToBuy);

console.log(result);

//output: { desirePercent: 0.005, coust: 5000, tokens: 5000 }

```
