# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property         | Attribute        | Type     | Default     | Description                                      |
|------------------|------------------|----------|-------------|--------------------------------------------------|
| `matchWord`      | `matchWord`      | `String` |             | Specifies the a string used to highlight matched string parts in options. |
| `optionSelected` | `optionSelected` | `Object` | "undefined" | Specifies the current selected menuOption.       |
| `value`          | `value`          | `String` | "undefined" | Specifies the value to be sent to a server.      |

## Methods

| Method               | Type                            | Description                                      |
|----------------------|---------------------------------|--------------------------------------------------|
| `makeSelection`      | `(): void`                      | Process actions for making making a menuoption selection. |
| `resetOptionsStates` | `(): void`                      | Reset the menu and all options.                  |
| `selectByValue`      | `(value: string): void`         | Method to apply `selected` attribute to `menuoption` via `value`.<br /><br />**value**: Must match a unique `menuoption` value. |
| `selectNextItem`     | `(moveDirection: string): void` | Using value of current this.index evaluates index<br />of next :focus to set based on array of this.items ignoring items<br />with disabled attr.<br /><br />The event.target is not used as the function needs to know where to go,<br />versus knowing where it is.<br /><br />**moveDirection**: Up or Down based on keyboard event. |

## Events

| Event                        | Type                   | Description                                      |
|------------------------------|------------------------|--------------------------------------------------|
| `auroMenuActivatedOption`    | `CustomEvent<Element>` | Notifies that a menuoption has been made `active`. |
| `auroMenuSelectValueFailure` | `CustomEvent<any>`     | Notifies that a an attempt to select a menuoption by matching a value has failed. |
| `selectedOption`             | `CustomEvent<any>`     | Notifies that a new menuoption selection has been made. |

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

## Events

| Event                     | Type                | Description                                      |
|---------------------------|---------------------|--------------------------------------------------|
| `auroMenuOptionMouseover` | `CustomEvent<this>` | Notifies that this option has been hovered over. |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Specifies text for an option, but is not the value. |
