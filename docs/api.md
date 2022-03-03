# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property         | Attribute        | Type     | Default     | Description                                      |
|------------------|------------------|----------|-------------|--------------------------------------------------|
| `matchWord`      | `matchWord`      | `String` |             | Specifies the a string used to highlight matched string parts in options. |
| `optionSelected` | `optionSelected` | `Object` | "undefined" | Specifies the current selected menuOption.       |
| `value`          | `value`          | `String` | "undefined" | Specifies the value to be sent to a server.      |

## Events

| Event            | Type               | Description                     |
|------------------|--------------------|---------------------------------|
| `selectedOption` | `CustomEvent<any>` | Value for selected menu option. |

## Slots

| Name | Description                         |
|------|-------------------------------------|
|      | Slot for insertion of menu options. |


# auro-menuoption

The auro-menu element provides users a way to define a menu option.

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | When true specifies that the menuoption is disabled. |
| `selected` | `selected` | `Boolean` | Specifies that an option is selected.            |
| `value`    | `value`    | `String`  | Specifies the value to be sent to a server.      |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Specifies text for an option, but is not the value. |
