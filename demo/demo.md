# auro-menu

## auro-menu use cases

The `auro-menu` element should be used in situations where users will select one option from a list of pre-defined options.
`auro-menu` will be used with `auro-dropdown`.

An auto-complete version of `auro-menu` can be found at `auro-auto-complete`.

To simulate the showing and hiding or `auro-menu` when it is used with `auro-dropdown`, buttons to add or remove the attribute "isHidden" for `auro-menu` are provided.

## auro-menu examples

### &lt;auro-menu indexselectedoption="0"&gt;

<div class="actions">
<span>attribute "isHidden" on &lt;auro-menu&gt;</span>
<button class="attributeChangeButton" onclick="addAttributeIsHidden('auroMenu1')" tabindex="-1">add</button>
<button class="attributeChangeButton" onclick="removeAttributeIsHidden('auroMenu1')" tabindex="-1">remove</button>
</div>

### Indented Example
<div class="exampleWrapper">
  <auro-menu id="auroMenu0" indexSelectedOption="5" ishidden>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Seattle Area (All Airports)</auro-menu-option>
    <auro-menu-option indented slot="listOfOptions" data-value="the value for option 2">Everett, WA (PAE-Paine Field)</auro-menu-option>
    <auro-menu-option indented slot="listOfOptions" data-value="the value for option 3">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menu-option>
    <div class="divider" slot="listOfOptions"></div>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Belgrade, Serbia (BEG-Belgrade)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Mahe Island, Seychelles (SEZ-Mahe Island)</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Sendair, Japan (SDJ-Sendai)</auro-menu-option>
    <div class="divider" slot="listOfOptions"></div>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 7">Seoul, Korea, Republic of (All Airports)</auro-menu-option>
    <auro-menu-option indented slot="listOfOptions" data-value="the value for option 8">Seoul, Korea, Republic of (GMP-Seoul Gimpo In..</auro-menu-option>
    <auro-menu-option indented slot="listOfOptions" data-value="the value for option 9">Seoul, Korea, Republic of (ICN-Seoul Incheon In..)</auro-menu-option>
    <div class="divider" slot="listOfOptions"></div>
  </auro-menu>
</div>


<div class="exampleWrapper">

  <button id="tabbableButtonAbove" class="tabbableButton" tabindex="0">tabbable button above</button>

  <auro-menu id="auroMenu1" indexSelectedOption="0" ishidden>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
  </auro-menu>

  <button id="tabbableButtonBelow" class="tabbableButton" tabindex tabindex="0">tabbable button below</button>

</div>

<auro-accordion lowProfile justifyRight>

  ```html
  <auro-menu id="auroMenu1" indexSelectedOption="0" ishidden>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
  </auro-menu>
  ```

</auro-accordion>

<br/>

***

### &lt;auro-menu indexselectedoption="5"&gt;

<div class="actions">
<span>attribute "isHidden" on &lt;auro-menu&gt;</span>
<button class="attributeChangeButton" onclick="addAttributeIsHidden('auroMenu2')" tabindex="-1">add</button>
<button class="attributeChangeButton" onclick="removeAttributeIsHidden('auroMenu2')" tabindex="-1">remove</button>
</div>

<div class="exampleWrapper">

  <button id="tabbableButtonAbove" class="tabbableButton" tabindex tabindex="0">tabbable button above</button>

  <auro-menu id="auroMenu2" indexSelectedOption="5" ishidden>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
  </auro-menu>

  <button id="tabbableButtonBelow" class="tabbableButton" tabindex tabindex="0">tabbable button below</button>

</div>

<auro-accordion lowProfile justifyRight>

  ```html
  <auro-menu id="auroMenu2" indexSelectedOption="5" ishidden>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
    <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
  </auro-menu>
  ```

</auro-accordion>

<br/>

***

### &lt;aParentContainer indexselectedoption="3"&gt;<br/>&lt;auro-menu &gt;

<div class="actions">
<span>attribute "isHidden" on &lt;auro-menu&gt;</span>
<button class="attributeChangeButton" onclick="addAttributeIsHidden('auroMenu3')" tabindex="-1">add</button>
<button class="attributeChangeButton" onclick="removeAttributeIsHidden('auroMenu3')" tabindex="-1">remove</button>
</div>

<div class="exampleWrapper">

  <button id="tabbableButtonAbove" tabindex="0">tabbable button above</button>

  <parentContainer indexSelectedOption="3">
    <auro-menu id="auroMenu3" ishidden>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </parentContainer>

  <button id="tabbableButtonBelow" tabindex="0">tabbable button below</button>

</div>

<auro-accordion lowProfile justifyRight>

  ```html
  <parentContainer indexSelectedOption="3">
    <auro-menu id="auroMenu3" ishidden>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 1">Stops</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 2">Price</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 3">Duration</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 4">Departure</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 5">Arrival</auro-menu-option>
      <auro-menu-option slot="listOfOptions" data-value="the value for option 6">Prefer Alaska</auro-menu-option>
    </auro-menu>
  </parentContainer>
  ```

</auro-accordion>