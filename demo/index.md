<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Menu

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-menu>` element provides a list of options for a user to select from.

A list of options is created within the `<slot>` of the `<auro-menu>` element by using the `<auro-menuoption>` element to define options. Use a standard `<hr>` element to create dividers within the list of options.

The `<auro-menu>` element is designed for contextual menus, e.g. a dropdown menus. They are not intended to be used for navigation menus which have a different semantic meaning. The `<auro-menu>` element does not support hide/show functionality within its scope. This functionality will be managed by a wrapping element such as a drop-down menu composite element.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-menu use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-menu>` element should be used in situations where users may:

* A user needs to select one option from a list of options.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

A basic `auro-menu` element with nested `auro-menuoption` elements to generate a list.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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
Having a closing statement about your example helps to really complete the thought with your reader.

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-menu` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroMenu.register(name)` method and pass in a unique name.

```js
import { AuroMenu } from '../src/auro-menu.js';
import { AuroMenuOption } from '../src/auro-menuoption.js';

AuroMenu.register('custom-menu');
AuroMenuOption.register('custom-menuoption');
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom.html -->
  <custom-menu>
    <custom-menuoption value="stops">Stops</custom-menuoption>
    <custom-menuoption value="price">Price</custom-menuoption>
    <custom-menuoption value="duration">Duration</custom-menuoption>
    <custom-menuoption value="departure">Departure</custom-menuoption>
    <custom-menuoption value="arrival">Arrival</custom-menuoption>
  </custom-menu>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom.html -->

```html
<custom-menu>
  <custom-menuoption value="stops">Stops</custom-menuoption>
  <custom-menuoption value="price">Price</custom-menuoption>
  <custom-menuoption value="duration">Duration</custom-menuoption>
  <custom-menuoption value="departure">Departure</custom-menuoption>
  <custom-menuoption value="arrival">Arrival</custom-menuoption>
</custom-menu>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
