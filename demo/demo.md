# auro-menu

## auro-menu use cases

The `auro-menu` element should be used in situations where users will select one option from a list of pre-defined options.
`auro-menu` will be used with `auro-dropdown`.


###  pre-selected option on unknown parent element; icon;

<div class="exampleWrapper">
  <auro-thing indexSelectedOption="3">
    <auro-menu id="auroMenu2" icon>
      <auro-menu-option data-value="Stops">Stops</auro-menu-option>
      <auro-menu-option disabled data-value="Price">(disabled) Price</auro-menu-option>
      <auro-menu-option data-value="Duration">Duration</auro-menu-option>
      <auro-menu-option data-value="Departure">Departure</auro-menu-option>
      <auro-menu-option data-value="Arrival">Arrival</auro-menu-option>
    </auro-menu>
  </auro-thing>
</div>

### pre-selected option on element, icon;

<div class="exampleWrapper">
  <auro-menu id="auroMenu2" indexSelectedOption="2" icon>
    <auro-menu-option data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option disabled data-value="Price">(disabled) Price</auro-menu-option>
    <auro-menu-option data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option data-value="Arrival">Arrival</auro-menu-option>
  </auro-menu>
</div>

### pre-selected option on element; no icon

<div class="exampleWrapper">
  <auro-menu id="auroMenu2" indexSelectedOption="2">
    <auro-menu-option data-value="Stops">Stops</auro-menu-option>
    <auro-menu-option disabled data-value="Price">(disabled) Price</auro-menu-option>
    <auro-menu-option data-value="Duration">Duration</auro-menu-option>
    <auro-menu-option data-value="Departure">Departure</auro-menu-option>
    <auro-menu-option data-value="Arrival">Arrival</auro-menu-option>
  </auro-menu>
</div>

### Submenu Example

<div class="exampleWrapper">
  <auro-menu id="auroMenu0" indexSelectedOption="5">
    <auro-menu-option data-value="option 1">Option 1</auro-menu-option>
    <auro-sub-menu>
      <auro-menu-option data-value="option 2">Option 2</auro-menu-option>
      <auro-menu-option data-value="option 3">Option 3</auro-menu-option>
    </auro-sub-menu>
    <auro-menu-option data-value="option 4">Option 4</auro-menu-option>
    <auro-menu-option data-value="option 5">Option 5</auro-menu-option>
    <auro-menu-option data-value="option 6">Option 6</auro-menu-option>
    <auro-menu-option data-value="option 7">Option 7</auro-menu-option>
    <auro-menu-option data-value="option 8">Option 8</auro-menu-option>
  </auro-menu>
</div>
