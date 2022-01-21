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
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/default.html) -->
  <!-- The below code snippet is automatically added from ./partials/default.html -->
  ```html
  <auro-menu>
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
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
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab">Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share">Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/hr.html) -->
  <!-- The below code snippet is automatically added from ./partials/hr.html -->
  ```html
  <auro-menu>
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab">Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share">Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Am auro-menuoption element w/disabled state

The `auro-menuoption` element supports the placement of the `disabled` attribute per option. A fully disabled list would be managed in an outer wrapping drop down menu element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/disabled.html) -->
  <!-- The below content is automatically added from ./partials/disabled.html -->
  <auro-menu>
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/disabled.html) -->
  <!-- The below code snippet is automatically added from ./partials/disabled.html -->
  ```html
  <auro-menu>
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Menu with pre-selected menu option

The `auro-menu` element supports a pre-selected menu option via the `selectOption` attribute. NOTE: The value of the pre-selected node is based on a `0` index.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./partials/preselect.html) -->
  <!-- The below content is automatically added from ./partials/preselect.html -->
  <auro-menu selectOption="2">
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/preselect.html) -->
  <!-- The below code snippet is automatically added from ./partials/preselect.html -->
  ```html
  <auro-menu selectOption="2">
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab" disabled>Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as...</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share" disabled>Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
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
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab">Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share">Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./partials/restrictedWidth.html) -->
  <!-- The below code snippet is automatically added from ./partials/restrictedWidth.html -->
  ```html
  <auro-menu style="width: 300px">
    <auro-menuoption data-value="New tab">New tab</auro-menuoption>
    <auro-menuoption data-value="New window">New window</auro-menuoption>
    <auro-menuoption data-value="Open file">Open file</auro-menuoption>
    <auro-menuoption data-value="Open location">Open location</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Close window">Close window</auro-menuoption>
    <auro-menuoption data-value="Close tab">Close tab</auro-menuoption>
    <auro-menuoption data-value="Save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Share">Share</auro-menuoption>
    <hr>
    <auro-menuoption data-value="Print">Print</auro-menuoption>
  </auro-menu>
  ```
  <!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
