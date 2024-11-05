<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-menu

The auro-menu element provides users a way to select from a list of options.

## Properties

| Property         | Attribute        | Type      | Default     | Description                                      |
|------------------|------------------|-----------|-------------|--------------------------------------------------|
| [disabled](#disabled)       | `disabled`       | `Boolean` |             | When true, the entire menu and all options are disabled; |
| [matchWord](#matchWord)      | `matchWord`      | `String`  | "undefined" | Specifies the a string used to highlight matched string parts in options. |
| [noCheckmark](#noCheckmark)    | `noCheckmark`    | `Boolean` | false       | When true, selected option will not show the checkmark. |
| [optionActive](#optionActive)   | `optionActive`   | `object`  | "undefined" |                                                  |
| [optionSelected](#optionSelected) | `optionSelected` | `Object`  | "undefined" | Specifies the current selected menuOption.       |
| [ready](#ready)          | `ready`          | `Boolean` | false       | When false the component API should not be called. |
| [value](#value)          | `value`          | `String`  | "undefined" | Value selected for the menu.                     |

## Methods

| Method               | Type                            | Description                                      |
|----------------------|---------------------------------|--------------------------------------------------|
| [makeSelection](#makeSelection)      | `(): void`                      | Process actions for making making a menuoption selection. |
| [resetOptionsStates](#resetOptionsStates) | `(): void`                      | Reset the menu and all options.                  |
| [selectNextItem](#selectNextItem)     | `(moveDirection: string): void` | Using value of current this.index evaluates index<br />of next :focus to set based on array of this.items ignoring items<br />with disabled attr.<br /><br />The event.target is not used as the function needs to know where to go,<br />versus knowing where it is.<br /><br />**moveDirection**: Up or Down based on keyboard event. |

## Events

| Event                         | Type                   | Description                                      |
|-------------------------------|------------------------|--------------------------------------------------|
| `auroMenu-activatedOption`    | `CustomEvent<Element>` | Notifies that a menuoption has been made `active`. |
| `auroMenu-customEventFired`   | `CustomEvent<any>`     | Notifies that a custom event has been fired.     |
| `auroMenu-ready`              | `CustomEvent<any>`     | Notifies that the component has finished initializing. |
| `auroMenu-selectValueFailure` | `CustomEvent<any>`     | Notifies that a an attempt to select a menuoption by matching a value has failed. |
| `auroMenu-selectValueReset`   | `CustomEvent<any>`     | Notifies that the component value has been reset. |
| `auroMenu-selectedOption`     | `CustomEvent<any>`     | Notifies that a new menuoption selection has been made. |
| [auroMenuActivatedOption](#auroMenuActivatedOption)     | `CustomEvent<Element>` | (DEPRECATED) Notifies that a menuoption has been made `active`. |
| [auroMenuCustomEventFired](#auroMenuCustomEventFired)    | `CustomEvent<any>`     | (DEPRECATED) Notifies that a custom event has been fired. |
| [auroMenuSelectValueFailure](#auroMenuSelectValueFailure)  | `CustomEvent<any>`     | (DEPRECATED) Notifies that a an attempt to select a menuoption by matching a value has failed. |
| [selectedOption](#selectedOption)              | `CustomEvent<any>`     | (DEPRECATED) Notifies that a new menuoption selection has been made. |

## Slots

| Name | Description                         |
|------|-------------------------------------|
|      | Slot for insertion of menu options. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-menu>
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration">Duration</auro-menuoption>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### noCheckmark<a name="noCheckmark"></a>
Applying the `noCheckmark` attribute will prevent the check icon from being shown on the selected option. The left padding to reserve space for the checkmark is also removed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/nocheckmark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/nocheckmark.html -->
  <auro-menu nocheckmark>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <hr>
    <auro-menu>
      <auro-menuoption value="apples">Apples</auro-menuoption>
      <auro-menuoption value="oranges">Oranges</auro-menuoption>
      <auro-menuoption value="pears">Pears</auro-menuoption>
      <auro-menuoption value="grapes">Grapes</auro-menuoption>
      <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
      <hr>
      <auro-menu>
        <auro-menuoption value="person">Person</auro-menuoption>
        <auro-menuoption value="woman">Woman</auro-menuoption>
        <auro-menuoption value="man">Man</auro-menuoption>
        <auro-menuoption value="camera">Camera</auro-menuoption>
        <auro-menuoption value="tv">TV</auro-menuoption>
      </auro-menu>
    </auro-menu>
    <hr>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <hr>
    <auro-menu>
      <auro-menuoption value="cars">Cars</auro-menuoption>
      <auro-menuoption value="trucks">Trucks</auro-menuoption>
      <auro-menuoption value="boats">Boats</auro-menuoption>
      <auro-menuoption value="planes">Planes</auro-menuoption>
      <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/nocheckmark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/nocheckmark.html -->

```html
<auro-menu nocheckmark>
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration">Duration</auro-menuoption>
  <hr>
  <auro-menu>
    <auro-menuoption value="apples">Apples</auro-menuoption>
    <auro-menuoption value="oranges">Oranges</auro-menuoption>
    <auro-menuoption value="pears">Pears</auro-menuoption>
    <auro-menuoption value="grapes">Grapes</auro-menuoption>
    <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
    <hr>
    <auro-menu>
      <auro-menuoption value="person">Person</auro-menuoption>
      <auro-menuoption value="woman">Woman</auro-menuoption>
      <auro-menuoption value="man">Man</auro-menuoption>
      <auro-menuoption value="camera">Camera</auro-menuoption>
      <auro-menuoption value="tv">TV</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <hr>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
  <hr>
  <auro-menu>
    <auro-menuoption value="cars">Cars</auro-menuoption>
    <auro-menuoption value="trucks">Trucks</auro-menuoption>
    <auro-menuoption value="boats">Boats</auro-menuoption>
    <auro-menuoption value="planes">Planes</auro-menuoption>
    <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
  </auro-menu>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### disabled<a name="disabled"></a>
The `auro-menu` element with `disabled` will mark all `auro-menuoption` elements as disabled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabledMenu.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabledMenu.html -->
  <auro-menu disabled>
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window">New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab">Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption value="share">Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabledMenu.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabledMenu.html -->

```html
<auro-menu disabled>
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window">New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab">Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
  <hr>
  <auro-menuoption value="share">Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### matchWord<a name="matchWord"></a>
The `auro-menu` component supports the use of the `matchWord` attribute to highlight string parts of each menuoption that are equal to `matchWord`. The matching algorithm is case insensitive (e.g., `n` matches `N`).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/matchWord.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/matchWord.html -->
  <auro-input id="matchWordInput" required>
    <span slot="label">Enter a value to match in the menu</span>
  </auro-input>
  <br />
  <auro-menu id="matchWordMenu">
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menu>
      <auro-menuoption value="apples">Apples</auro-menuoption>
      <auro-menuoption value="oranges">Oranges</auro-menuoption>
      <auro-menuoption value="peaches">Peaches</auro-menuoption>
    </auro-menu>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/matchWord.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/matchWord.js -->

```js
function updateMatch() {
  let matchWordMenu = document.querySelector('#matchWordMenu');

  matchWordMenu.matchWord = matchWordInput.value;
}

export function auroMenuMatchWordExample() {
  let matchWordInput = document.querySelector('#matchWordInput');

  matchWordInput.addEventListener('keyup', updateMatch);
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/matchWord.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/matchWord.html -->

```html
<auro-input id="matchWordInput" required>
  <span slot="label">Enter a value to match in the menu</span>
</auro-input>
<br />
<auro-menu id="matchWordMenu">
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration">Duration</auro-menuoption>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menu>
    <auro-menuoption value="apples">Apples</auro-menuoption>
    <auro-menuoption value="oranges">Oranges</auro-menuoption>
    <auro-menuoption value="peaches">Peaches</auro-menuoption>
  </auro-menu>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Common Use Cases

#### Scroll

When setting the `max-height` of `auro-menu`, all of the overflowing content can be accessed via a scrollbar.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/scroll.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/scroll.html -->
  <auro-menu id="alpha" style="max-height: 200px">
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <hr>
    <auro-menu id="beta">
      <auro-menuoption value="apples">Apples</auro-menuoption>
      <auro-menuoption value="oranges">Oranges</auro-menuoption>
      <auro-menuoption value="pears">Pears</auro-menuoption>
      <auro-menuoption value="grapes">Grapes</auro-menuoption>
      <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
      <hr>
      <auro-menu id="charlie">
        <auro-menuoption value="person">Person</auro-menuoption>
        <auro-menuoption value="woman">Woman</auro-menuoption>
        <auro-menuoption value="man">Man</auro-menuoption>
        <auro-menuoption value="camera">Camera</auro-menuoption>
        <auro-menuoption value="tv">TV</auro-menuoption>
      </auro-menu>
    </auro-menu>
    <hr>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <hr>
    <auro-menu id="delta">
      <auro-menuoption value="cars">Cars</auro-menuoption>
      <auro-menuoption value="trucks">Trucks</auro-menuoption>
      <auro-menuoption value="boats">Boats</auro-menuoption>
      <auro-menuoption value="planes">Planes</auro-menuoption>
      <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/scroll.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/scroll.html -->

```html
<auro-menu id="alpha" style="max-height: 200px">
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration">Duration</auro-menuoption>
  <hr>
  <auro-menu id="beta">
    <auro-menuoption value="apples">Apples</auro-menuoption>
    <auro-menuoption value="oranges">Oranges</auro-menuoption>
    <auro-menuoption value="pears">Pears</auro-menuoption>
    <auro-menuoption value="grapes">Grapes</auro-menuoption>
    <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
    <hr>
    <auro-menu id="charlie">
      <auro-menuoption value="person">Person</auro-menuoption>
      <auro-menuoption value="woman">Woman</auro-menuoption>
      <auro-menuoption value="man">Man</auro-menuoption>
      <auro-menuoption value="camera">Camera</auro-menuoption>
      <auro-menuoption value="tv">TV</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <hr>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
  <hr>
  <auro-menu id="delta">
    <auro-menuoption value="cars">Cars</auro-menuoption>
    <auro-menuoption value="trucks">Trucks</auro-menuoption>
    <auro-menuoption value="boats">Boats</auro-menuoption>
    <auro-menuoption value="planes">Planes</auro-menuoption>
    <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
  </auro-menu>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Options with horizonal separator

To create a natural separation between options, simply use a `<hr>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hr.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hr.html -->
  <auro-menu>
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window">New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab">Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption value="share">Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hr.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hr.html -->

```html
<auro-menu>
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window">New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab">Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
  <hr>
  <auro-menuoption value="share">Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Nesting auro-menus to create sub-menus

The `auro-menu` element supports the placement of an `auro-menu` inside of another `auro-menu`. There is no technical limit to the level of nesting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/nestedMenu.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/nestedMenu.html -->
  <auro-menu id="alpha">
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <hr>
    <auro-menu id="beta">
      <auro-menuoption value="apples">Apples</auro-menuoption>
      <auro-menuoption value="oranges">Oranges</auro-menuoption>
      <auro-menuoption value="pears">Pears</auro-menuoption>
      <auro-menuoption value="grapes">Grapes</auro-menuoption>
      <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
      <hr>
      <auro-menu id="charlie">
        <auro-menuoption value="person">Person</auro-menuoption>
        <auro-menuoption value="woman">Woman</auro-menuoption>
        <auro-menuoption value="man">Man</auro-menuoption>
        <auro-menuoption value="camera">Camera</auro-menuoption>
        <auro-menuoption value="tv">TV</auro-menuoption>
      </auro-menu>
    </auro-menu>
    <hr>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
    <hr>
    <auro-menu id="delta">
      <auro-menuoption value="cars">Cars</auro-menuoption>
      <auro-menuoption value="trucks">Trucks</auro-menuoption>
      <auro-menuoption value="boats">Boats</auro-menuoption>
      <auro-menuoption value="planes">Planes</auro-menuoption>
      <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/nestedMenu.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/nestedMenu.html -->

```html
<auro-menu id="alpha">
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration">Duration</auro-menuoption>
  <hr>
  <auro-menu id="beta">
    <auro-menuoption value="apples">Apples</auro-menuoption>
    <auro-menuoption value="oranges">Oranges</auro-menuoption>
    <auro-menuoption value="pears">Pears</auro-menuoption>
    <auro-menuoption value="grapes">Grapes</auro-menuoption>
    <auro-menuoption value="kiwi">Kiwi</auro-menuoption>
    <hr>
    <auro-menu id="charlie">
      <auro-menuoption value="person">Person</auro-menuoption>
      <auro-menuoption value="woman">Woman</auro-menuoption>
      <auro-menuoption value="man">Man</auro-menuoption>
      <auro-menuoption value="camera">Camera</auro-menuoption>
      <auro-menuoption value="tv">TV</auro-menuoption>
    </auro-menu>
  </auro-menu>
  <hr>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
  <hr>
  <auro-menu id="delta">
    <auro-menuoption value="cars">Cars</auro-menuoption>
    <auro-menuoption value="trucks">Trucks</auro-menuoption>
    <auro-menuoption value="boats">Boats</auro-menuoption>
    <auro-menuoption value="planes">Planes</auro-menuoption>
    <auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
  </auro-menu>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### An auro-menuoption element w/ disabled state

The `auro-menuoption` element supports the placement of the `disabled` attribute per option. A fully disabled list would be managed in an outer wrapping drop down menu element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-menu>
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window">New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption value="share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-menu>
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window">New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
  <hr>
  <auro-menuoption value="share" disabled>Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Menu with pre-selected menu option

The `auro-menu` element supports a pre-selected option via the `selected` attribute on the `auro-menuoption` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/preselect.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/preselect.html -->
  <auro-menu>
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window" selected>New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption value="share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/preselect.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/preselect.html -->

```html
<auro-menu>
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window" selected>New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
  <hr>
  <auro-menuoption value="share" disabled>Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Menu with restricted width and long option

The `auro-menu` element supports scenarios where the outer parent element of the menu constrains its width and there are options with text longer than the pull down menu will support. Truncated content will be illustrated with an ellipsis.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/restrictedWidth.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/restrictedWidth.html -->
  <auro-menu style="width: 300px">
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window">New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab">Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
    <hr>
    <auro-menuoption value="share">Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/restrictedWidth.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/restrictedWidth.html -->

```html
<auro-menu style="width: 300px">
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window">New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab">Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
  <hr>
  <auro-menuoption value="share">Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Menu with hidden options

The `auro-menuoption` element supports scenarios where the menu option needs to be hidden. e.g. the only visible menu options contain the `matchWord`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hidden.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hidden.html -->
  <auro-menu>
    <auro-menuoption value="new tab">New tab</auro-menuoption>
    <auro-menuoption value="new window">New window</auro-menuoption>
    <auro-menuoption value="open file">Open file</auro-menuoption>
    <auro-menuoption value="open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption value="close window">Close window</auro-menuoption>
    <auro-menuoption value="close tab" hidden>Close tab</auro-menuoption>
    <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption value="share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption value="print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hidden.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hidden.html -->

```html
<auro-menu>
  <auro-menuoption value="new tab">New tab</auro-menuoption>
  <auro-menuoption value="new window">New window</auro-menuoption>
  <auro-menuoption value="open file">Open file</auro-menuoption>
  <auro-menuoption value="open location">Open location</auro-menuoption>
  <hr>
  <auro-menuoption value="close window">Close window</auro-menuoption>
  <auro-menuoption value="close tab" hidden>Close tab</auro-menuoption>
  <auro-menuoption value="save page as...">Save page as...</auro-menuoption>
  <hr>
  <auro-menuoption value="share" disabled>Share</auro-menuoption>
  <hr>
  <auro-menuoption value="print">Print</auro-menuoption>
</auro-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Reset menu selection state

The `auro-menu` may be reset to a state with no menuoption selected by setting the `value` to `undefined`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/reset.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/reset.html -->
  <auro-menu id="resetExample">
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration" selected>Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
  </auro-menu>
  <br/><br/>
  <auro-button id="resetExampleBtn">RESET</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/reset.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/reset.js -->

```js
export function auroMenuResetExample() {
  const resetExampleBtnElem = document.querySelector('#resetExampleBtn');
  const resetExampleElem = document.querySelector('#resetExample');

  if (resetExampleElem && resetExampleBtnElem) {
    resetExampleBtnElem.addEventListener('click', () => {
      resetExampleElem.value = undefined;
    })
  }
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/reset.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/reset.html -->

```html
<auro-menu id="resetExample">
  <auro-menuoption value="stops">Stops</auro-menuoption>
  <auro-menuoption value="price">Price</auro-menuoption>
  <auro-menuoption value="duration" selected>Duration</auro-menuoption>
  <auro-menuoption value="departure">Departure</auro-menuoption>
  <auro-menuoption value="arrival">Arrival</auro-menuoption>
</auro-menu>
<br/><br/>
<auro-button id="resetExampleBtn">RESET</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
:host {
  --ds-auro-menu-divider-color: var(--ds-color-border-divider-default, $ds-color-border-divider-default);
  --ds-auro-menuoption-container-color: transparent;
  --ds-auro-menuoption-icon-color: transparent;
  --ds-auro-menuoption-text-color: var(--ds-color-text-primary-default, $ds-color-text-primary-default);
}
```
<!-- AURO-GENERATED-CONTENT:END -->
