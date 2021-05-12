# auro-menu

auro-menu provides users a way to select one option from a pre-defined list of options

## Properties

| Property              | Attribute             | Type      | Default |
|-----------------------|-----------------------|-----------|---------|
| `indexSelectedOption` | `indexSelectedOption` | `number`  |         |
| `isHidden`            | `isHidden`            | `boolean` | true    |
| `options`             | `options`             | `array`   | null    |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `hideOptionsContainer` | `CustomEvent<any>`                               |
| `optionSelected`       | `CustomEvent<{ index: any; value: any; displayText: any; }>` |
