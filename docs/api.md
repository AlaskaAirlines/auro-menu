# auro-menu

auro-menu provides users a way to select one option from a pre-defined list of options

## Properties

| Property  | Attribute | Type         | Default      |
|-----------|-----------|--------------|--------------|
| `dom`     |           |              |              |
| `options` | `options` | `array`      | null         |
| `svg`     |           | `any \| any` | "firstChild" |

## Events

| Event            | Type                           |
|------------------|--------------------------------|
| `optionSelected` | `CustomEvent<{ value: any; }>` |
