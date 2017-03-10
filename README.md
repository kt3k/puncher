# puncher v7.0.0

> Punching characters and images.

***Note*** This library depends on jquery, class-component and cc-event.

# Usage

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/class-component.js"></script>
<script src="path/to/cc-event.js"></script>
<script src="path/to/puncher.js"></script>

<div class="puncher" unit-dur="120">Hello, world! <img src="foo.png" /></div>
```

This prints `Hello, world!` letter by letter and the image "foo.png". Each letter displays with 120ms delay from the previous letter. This timing is configurable with the `unit-dur` attributes of the above example. The image tag (or any other tag) counts as a single character.

### Via npm

In command line:

    npm install jquery class-component cc-event @kt3k/puncher

In script:

```js
global.jQuery = require('jquery')
require('class-component')
require('cc-event')
require('@kt3k/puncher')
```

In html:

```html
<div class="puncher" unit-dur="120">Hello, world! <img src="foo.png" /></div>
```

This prints `Hello, world!` letter by letter and the image "foo.png". Each letter displays with 120ms delay from the previous letter. This timing is configurable with the `unit-dur` attributes of the above example. The image tag (or any other tag) counts as a single character.

# API Reference

```html
<dic class="puncher" unit-dur="120"></div>
```

## Attributes

### unit-dur

`unit-dur` means the unit duration of punching of characters.

## Events

### event 'puncher.start'

When this event is triggered on the element, the punching starts.

### event 'puncher.started'

This event is triggered when the punching starts.

### event 'puncher.ended'

This event is triggered when the punching ends.

### event 'puncher.appended'

This event is triggered on the appended element when it's appended.

# LICENSE

MIT
