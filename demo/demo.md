# auro-menu

## auro-menu use cases

The `auro-menu` element should be used in situations where users will select one option from a list of pre-defined options.
`auro-menu` will be used with `auro-dropdown`.

An auto-complete version of `auro-menu` can be found at `auro-auto-complete`.

## auro-menu demo

<div class="exampleWrapper">

  <button id="tabbableButtonAbove" tabindex="0">tabbable button above</button>

  <auro-menu>
    <li slot="listOfOptions" data-value="the value for option 1">Stops</li>
    <li slot="listOfOptions" data-value="the value for option 2">Price</li>
    <li slot="listOfOptions" data-value="the value for option 3">Duration</li>
    <li slot="listOfOptions" data-value="the value for option 4">Departure</li>
    <li slot="listOfOptions" data-value="the value for option 5">Arrival</li>
    <li slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</li>
  </auro-menu>

  <button id="tabbableButtonBelow" tabindex="0">tabbable button below</button>

</div>

  ```html
  <auro-menu>
    <li slot="listOfOptions" data-value="the value for option 1">option 1</li>
    <li slot="listOfOptions" data-value="the value for option 2">option 2</li>
    <li slot="listOfOptions" data-value="the value for option 3">option 3</li>
    <li slot="listOfOptions" data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</li>
    <li slot="listOfOptions" data-value="departures">Departures</li>
    <li slot="listOfOptions" data-value="arrivals">Arrivals</li>
  </auro-menu>
  ```

</auro-accordion>