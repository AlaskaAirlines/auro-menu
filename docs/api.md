# auro-menu

The auro-menu element provides users a way to select one option from a pre-defined list of options.

## Properties

| Property              | Attribute             | Type     |
|-----------------------|-----------------------|----------|
| `indexSelectedOption` | `indexSelectedOption` | `number` |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `hideOptionsContainer` | `CustomEvent<any>`                               |
| `optionSelected`       | `CustomEvent<{ index: any; value: any; displayText: any; }>` |

## Slots

| Name | Description                              |
|------|------------------------------------------|
|      | Open slot for insertion of menu options. |


# auro-menuoption

The auro-menu element provides users a way to select one option from a pre-defined list of options.

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | When true specifies that the menu-option is disabled. |
| `selected` | `selected` | `boolean` |                                                  |
