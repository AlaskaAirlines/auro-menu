# auro-menu

The `auro-menu` element should be used in situations where users will select one option from a list of pre-defined options.
`auro-menu` will be used with `auro-dropdown`.


###  Default example with options

<div class="exampleWrapper">
  <auro-thing>
    <auro-menu>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption data-value="Price">Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    </auro-menu>
  </auro-thing>
</div>

###  Disabled option

<div class="exampleWrapper">
  <auro-thing>
    <auro-menu>
      <auro-menuoption data-value="Stops">Stops</auro-menuoption>
      <auro-menuoption disabled data-value="Price">(disabled) Price</auro-menuoption>
      <auro-menuoption data-value="Duration">Duration</auro-menuoption>
      <auro-menuoption data-value="Departure">Departure</auro-menuoption>
      <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
    </auro-menu>
  </auro-thing>
</div>

### Pre-selected option on element

<div class="exampleWrapper">
  <auro-menu id="auroMenu2" indexSelectedOption="2">
    <auro-menuoption data-value="Stops">Stops</auro-menuoption>
    <auro-menuoption data-value="Price">Price</auro-menuoption>
    <auro-menuoption data-value="Duration">Duration</auro-menuoption>
    <auro-menuoption data-value="Departure">Departure</auro-menuoption>
    <auro-menuoption data-value="Arrival">Arrival</auro-menuoption>
  </auro-menu>
</div>
