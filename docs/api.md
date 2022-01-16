# auro-menu-option

Auro-menu provides users a way to select one option from a pre-defined list of options.

## Properties

| Property           | Attribute          | Type      | Default | Description                                      |
|--------------------|--------------------|-----------|---------|--------------------------------------------------|
| `beingMouseOvered` | `beingMouseOvered` | `boolean` |         |                                                  |
| `disabled`         | `disabled`         | `Boolean` |         | When true specifies that the menu-option is disabled. |
| `hasFocus`         | `hasFocus`         | `boolean` | false   |                                                  |
| `index`            | `index`            | `number`  |         |                                                  |
| `selected`         | `selected`         | `boolean` |         |                                                  |


# auro-menu

Auro-menu provides users a way to select one option from a pre-defined list of options.

## Attributes

| Attribute   | Type      | Description              |
|-------------|-----------|--------------------------|
| `checkmark` | `Boolean` | Designates checkamrk UI. |

## Properties

| Property              | Attribute             | Type     | Default |
|-----------------------|-----------------------|----------|---------|
| `indexSelectedOption` | `indexSelectedOption` | `number` |         |
| `options`             | `options`             | `array`  | null    |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `hideOptionsContainer` | `CustomEvent<any>`                               |
| `optionSelected`       | `CustomEvent<{ index: any; value: any; displayText: any; }>` |

## Slots

| Name | Description                              |
|------|------------------------------------------|
|      | Open slot for insertion of menu options. |


# auro-sub-menu

## Properties

| Property     | Attribute    | Type      | Default |
|--------------|--------------|-----------|---------|
| `hasFocus`   |              | `boolean` | false   |
| `hideBottom` | `hideBottom` | `boolean` |         |
| `hideTop`    | `hideTop`    | `boolean` |         |
