# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property         | Attribute        | Type      | Default     | Description                                      |
|------------------|------------------|-----------|-------------|--------------------------------------------------|
| `disabled`       | `disabled`       | `Boolean` |             | When true, the entire menu and all options are disabled; |
| `matchWord`      | `matchWord`      | `String`  | "undefined" | Specifies the a string used to highlight matched string parts in options. |
| `noCheckmark`    | `noCheckmark`    | `Boolean` | false       | When true, selected option will not show the checkmark. |
| `optionActive`   | `optionActive`   | `object`  | "undefined" |                                                  |
| `optionSelected` | `optionSelected` | `Object`  | "undefined" | Specifies the current selected menuOption.       |
| `ready`          | `ready`          | `Boolean` | false       | When false the component API should not be called. |
| `value`          | `value`          | `String`  | "undefined" | Value selected for the menu.                     |

## Methods

| Method               | Type                            | Description                                      |
|----------------------|---------------------------------|--------------------------------------------------|
| `makeSelection`      | `(): void`                      | Process actions for making making a menuoption selection. |
| `resetOptionsStates` | `(): void`                      | Reset the menu and all options.                  |
| `selectNextItem`     | `(moveDirection: string): void` | Using value of current this.index evaluates index<br />of next :focus to set based on array of this.items ignoring items<br />with disabled attr.<br /><br />The event.target is not used as the function needs to know where to go,<br />versus knowing where it is.<br /><br />**moveDirection**: Up or Down based on keyboard event. |

## Events

| Event                         | Type                   | Description                                      |
|-------------------------------|------------------------|--------------------------------------------------|
| `auroMenu-activatedOption`    | `CustomEvent<Element>` | Notifies that a menuoption has been made `active`. |
| `auroMenu-customEventFired`   | `CustomEvent<any>`     | Notifies that a custom event has been fired.     |
| `auroMenu-ready`              | `CustomEvent<any>`     | Notifies that the component has finished initializing. |
| `auroMenu-selectValueFailure` | `CustomEvent<any>`     | Notifies that a an attempt to select a menuoption by matching a value has failed. |
| `auroMenu-selectValueReset`   | `CustomEvent<any>`     | Notifies that the component value has been reset. |
| `auroMenu-selectedOption`     | `CustomEvent<any>`     | Notifies that a new menuoption selection has been made. |
| `auroMenuActivatedOption`     | `CustomEvent<Element>` | (DEPRECATED) Notifies that a menuoption has been made `active`. |
| `auroMenuCustomEventFired`    | `CustomEvent<any>`     | (DEPRECATED) Notifies that a custom event has been fired. |
| `auroMenuSelectValueFailure`  | `CustomEvent<any>`     | (DEPRECATED) Notifies that a an attempt to select a menuoption by matching a value has failed. |
| `selectedOption`              | `CustomEvent<any>`     | (DEPRECATED) Notifies that a new menuoption selection has been made. |

## Slots

| Name | Description                         |
|------|-------------------------------------|
|      | Slot for insertion of menu options. |
