# auro-menu-option

Auro-menu provides users a way to select one option from a pre-defined list of options.

## Properties

| Property           | Attribute          | Type      | Default | Description                                      |
|--------------------|--------------------|-----------|---------|--------------------------------------------------|
| `beingMouseOvered` | `beingMouseOvered` | `Boolean` |         | Used to help determine the color and background color of auro-menu-option. |
| `disabled`         | `disabled`         | `Boolean` |         | When true specifies that the menu-option is disabled. |
| `hasFocus`         | `hasFocus`         | `Boolean` | false   | Used to help determine if auro-menu-option is being tabbed onto. Used to help determine the color and background color of auro-menu-option. |
| `index`            | `index`            | `Number`  |         | Index of the individual auro-menu-otion.         |
| `isHidden`         | `isHidden`         | `Boolean` |         | If the auro-menu-option is currently visible or not, perhaps because auro-dropdown is controlling whether or not auro-menu is visible or hidden. |
| `selected`         | `selected`         | `boolean` |         |                                                  |
| `tabIndex`         | `tabIndex`         | `Number`  |         | Will be either -1 or 0 depending on if auro-menu is currently visible or not. |


# auro-menu

Auro-menu provides users a way to select one option from a pre-defined list of options.

## Properties

| Property              | Attribute             | Type      | Default | Description                                      |
|-----------------------|-----------------------|-----------|---------|--------------------------------------------------|
| `indexSelectedOption` | `indexSelectedOption` | `Number`  |         | Index of the currently selected option.          |
| `isHidden`            | `isHidden`            | `Boolean` | true    | If the auro-menu is currently being shown or hidden, perhaps because auro-dropdown is controlling whether or not auro-menu is visible or hidden. |
| `options`             | `options`             | `Array`   | null    | Array of auro-menu-option nodes.                 |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `hideOptionsContainer` | `CustomEvent<any>`                               |
| `optionSelected`       | `CustomEvent<{ index: any; value: any; displayText: any; }>` |

## Slots

| Name            | Description                          |
|-----------------|--------------------------------------|
| `listOfOptions` | Slot for the auro-menu-option nodes. |


# auro-sub-menu

## Properties

| Property     | Attribute    | Type      | Default |
|--------------|--------------|-----------|---------|
| `hasFocus`   |              | `boolean` | false   |
| `hideBottom` | `hideBottom` | `boolean` |         |
| `hideTop`    | `hideTop`    | `boolean` |         |
