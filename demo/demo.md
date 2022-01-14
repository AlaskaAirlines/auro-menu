# auro-menu

## auro-menu use cases

The `auro-menu` element should be used in situations where users will select one option from a list of pre-defined options.
`auro-menu` will be used with `auro-dropdown`.


### Submenu Example

<div class="exampleWrapper">
  <auro-menu id="auroMenu0" indexSelectedOption="5">
    <auro-menu-option slot="listOfOptions" data-value="option 1">Option 1</auro-menu-option>
    <auro-sub-menu slot="listOfOptions">
      <auro-menu-option data-value="option 2">Option 2</auro-menu-option>
      <auro-menu-option data-value="option 3">Option 3</auro-menu-option>
    </auro-sub-menu>
    <auro-menu-option slot="listOfOptions" data-value="option 4">Option 4</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="option 5">Option 5</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="option 6">Option 6</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="option 7">Option 7</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="option 8">Option 8</auro-menu-option>
  </auro-menu>
</div>

### index selected option 2;

<div class="exampleWrapper">
  <auro-menu id="auroMenu2" indexSelectedOption="2" checkmark>
    <auro-menu-option slot="listOfOptions" data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option disabled slot="listOfOptions" data-value="Price">(disabled) Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="Arrival">Arrival</auro-menu-option>
  </auro-menu>
</div>


