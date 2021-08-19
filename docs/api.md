# auro-menu

auro-menu provides users a way to select one option from a pre-defined list of options

## Properties

| Property              | Attribute             | Type      | Default | Description                                      |
|-----------------------|-----------------------|-----------|---------|--------------------------------------------------|
| `indexSelectedOption` | `indexSelectedOption` | `Number`  |         | Index of the currently selected option.          |
| `isHidden`            | `isHidden`            | `Boolean` | true    | If the auro-menu is currently being shown or hidden, perhaps because auro-dropdown is controlling whether or not auro-menu is visible or hidden. |
| `options`             | `options`             | `Array`   | null    | Array of auro-menu-option nodes.                 |

## Methods

| Method             | Type       |
|--------------------|------------|
| `handleSlotChange` | `(): void` |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `hideOptionsContainer` | `CustomEvent<any>`                               |
| `optionSelected`       | `CustomEvent<{ index: any; value: any; displayText: any; }>` |

## Slots

| Name            | Description                          |
|-----------------|--------------------------------------|
| `listOfOptions` | Slot for the auro-menu-option nodes. |
