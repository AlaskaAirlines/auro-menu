# Menu

The `auro-menu` element provides a list of options for a user to select from.

A list of options is created within the `<slot>` of the `auro-menu` element by using the `auro-menuoption` element to define options. Use a standard `<hr>` element to create dividers within the list of options.

The `auro-menu` element is designed for contextual menus, e.g. a dropdown menus. They are not intended to be used for navigation menus which have a different semantic meaning. The `auro-menu` element does not support hide/show functionality within its scope. This functionality will be managed by a wrapping element such as a drop-down menu composite element.

## Default

A default `auro-menu` element with nested `auro-menuoption` elements to generate a list.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/default.html) -->
  <!-- The below content is automatically added from ./partials/default.html -->
  <auro-menu>
    <auro-menuoption value="stops">Stops</auro-menuoption>
    <auro-menuoption value="price">Price</auro-menuoption>
    <auro-menuoption value="duration">Duration</auro-menuoption>
    <auro-menuoption value="departure">Departure</auro-menuoption>
    <auro-menuoption value="arrival">Arrival</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/default.html) -->
  <!-- The below code snippet is automatically added from ./partials/default.html -->
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

## Scroll

When setting the `max-height` of `auro-menu`, all of the overflowing content can be accessed via a scrollbar.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/scroll.html) -->
  <!-- The below content is automatically added from ./partials/scroll.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/scroll.html) -->
  <!-- The below code snippet is automatically added from ./partials/scroll.html -->
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

## noCheckmark

Applying the `noCheckmark` attribute will prevent the check icon from being shown on the selected option. The left padding to reserve space for the checkmark is also removed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/nocheckmark.html) -->
  <!-- The below content is automatically added from ./partials/nocheckmark.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/nocheckmark.html) -->
  <!-- The below code snippet is automatically added from ./partials/nocheckmark.html -->
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

## Using matchWord to highlight displayValue string parts

The `auro-menu` component supports the use of the `matchWord` attribute to highlight string parts of each menuoption that are equal to `matchWord`. The matching algorithm is case insensitive (e.g., `n` matches `N`).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/matchWord.html) -->
  <!-- The below content is automatically added from ./partials/matchWord.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/matchWord.js) -->
  <!-- The below code snippet is automatically added from ./partials/matchWord.js -->
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

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/matchWord.html) -->
  <!-- The below code snippet is automatically added from ./partials/matchWord.html -->
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

## Options with horizontal separator

To create a natural separation between options, simply use a `<hr>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/hr.html) -->
  <!-- The below content is automatically added from ./partials/hr.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/hr.html) -->
  <!-- The below code snippet is automatically added from ./partials/hr.html -->
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

## Nesting auro-menus to create sub-menus

The `auro-menu` element supports the placement of an `auro-menu` inside of another `auro-menu`. There is no technical limit to the level of nesting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/nestedMenu.html) -->
  <!-- The below content is automatically added from ./partials/nestedMenu.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/nestedMenu.html) -->
  <!-- The below code snippet is automatically added from ./partials/nestedMenu.html -->
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

## An auro-menuoption element w/disabled state

The `auro-menuoption` element supports the placement of the `disabled` attribute per option. A fully disabled list would be managed in an outer wrapping drop down menu element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/disabled.html) -->
  <!-- The below content is automatically added from ./partials/disabled.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/disabled.html) -->
  <!-- The below code snippet is automatically added from ./partials/disabled.html -->
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

## Menu with pre-selected menu option

The `auro-menu` element supports a pre-selected option via the `selected` attribute on the `auro-menuoption` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/preselect.html) -->
  <!-- The below content is automatically added from ./partials/preselect.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/preselect.html) -->
  <!-- The below code snippet is automatically added from ./partials/preselect.html -->
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

## Menu with restricted width and long option

The `auro-menu` element supports scenarios where the outer parent element of the menu constrains its width and there are options with text longer than the pull down menu will support. Truncated content will be illustrated with an ellipsis.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/restrictedWidth.html) -->
  <!-- The below content is automatically added from ./partials/restrictedWidth.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/restrictedWidth.html) -->
  <!-- The below code snippet is automatically added from ./partials/restrictedWidth.html -->
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

## Menu with hidden options

The `auro-menuoption` element supports scenarios where the menu option needs to be hidden. e.g. the only visible menu options contain the `matchWord`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/hidden.html) -->
  <!-- The below content is automatically added from ./partials/hidden.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/hidden.html) -->
  <!-- The below code snippet is automatically added from ./partials/hidden.html -->
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

## Reset menu selection state

The `auro-menu` may be reset to a state with no menuoption selected by setting the `value` to `undefined`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/reset.html) -->
  <!-- The below content is automatically added from ./partials/reset.html -->
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

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/reset.html) -->
  <!-- The below code snippet is automatically added from ./partials/reset.html -->
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

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/reset.js) -->
  <!-- The below code snippet is automatically added from ./partials/reset.js -->
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

</auro-accordion>


## Menuoption with custom event

The `auro-menuoption` element supports scenarios where a custom event should be fired in place of the standard `selectedOption`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/customEvent.html) -->
  <!-- The below content is automatically added from ./partials/customEvent.html -->
  <auro-menu id="customEvent">
    <auro-menuoption value="stops">555 Address Way Seattle, WA 99999</auro-menuoption>
    <auro-menuoption value="price">333 Some Street Seattle, WA 99999</auro-menuoption>
    <auro-menuoption event="mycustomevent">Add new address</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/customEvent.js) -->
  <!-- The below code snippet is automatically added from ./partials/customEvent.js -->
  ```js
  export function auroMenuCustomEventExample() {
    let menuCustomEventEl = document.querySelector('auro-menu#customEvent');
  
    if (menuCustomEventEl) {
      menuCustomEventEl.addEventListener('mycustomevent', () => {
        console.warn('My Custom Event Fired');
        alert(`My Custom Event Fired`);
      });
    }
  }
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/customEvent.html) -->
  <!-- The below code snippet is automatically added from ./partials/customEvent.html -->
  ```html
  <auro-menu id="customEvent">
    <auro-menuoption value="stops">555 Address Way Seattle, WA 99999</auro-menuoption>
    <auro-menuoption value="price">333 Some Street Seattle, WA 99999</auro-menuoption>
    <auro-menuoption event="mycustomevent">Add new address</auro-menuoption>
  </auro-menu>
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
