# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property       | Attribute      | Type     | Description                                      |
|----------------|----------------|----------|--------------------------------------------------|
| `selectOption` | `selectOption` | `Number` | Predefine selected option from menu. Index starts at 0. |

## Events

| Event            | Type                           | Description                                      |
|------------------|--------------------------------|--------------------------------------------------|
| `optionSelected` | `CustomEvent<{ index: any; }>` | Value for pre-selected menu option. This value may be places on the `auro-menu` element specifically or on a outer parent element. |

## Slots

| Name | Description                              |
|------|------------------------------------------|
|      | Open slot for insertion of menu options. |


# auro-menuoption

The auro-menu element provides users a way to define a menu option.

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | When true specifies that the menuoption is disabled. |
| `selected` | `selected` | `Boolean` | When true designates the selected menuoption. This attribute is only applied via the `optionSelected` event. If manually added without the `optionSelected` event, the attribute will be removed. |
