# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property       | Attribute      | Type     | Description                                      |
|----------------|----------------|----------|--------------------------------------------------|
| `selectOption` | `selectOption` | `Number` | Predefine selected option from menu. Index starts at 0. |

## Events

| Event            | Type                                             | Description                                      |
|------------------|--------------------------------------------------|--------------------------------------------------|
| `optionSelected` | `CustomEvent<{ index: any; value: any; displayValue: any; }>` | Value for pre-selected menu option. This value may be placed on the `auro-menu` element specifically or on a outer parent element. |

## Slots

| Name | Description                         |
|------|-------------------------------------|
|      | Slot for insertion of menu options. |


# auro-menuoption

The auro-menu element provides users a way to define a menu option.

## Attributes

| Attribute | Type     | Description                                 |
|-----------|----------|---------------------------------------------|
| `value`   | `String` | Specifies the value to be sent to a server. |

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | When true specifies that the menuoption is disabled. |
| `selected` | `selected` | `Boolean` | Specifies that an option is selected. Attribute is applied via the `optionSelected` event for selection at page load. |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Specifies text for an option, but is not the value. |
