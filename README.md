# puncher v2.0.3

> A nice punching of characters and images.

***Note*** This library depends on jquery, class-component and cc-event.

# Usage

```html
<script src="path/to/jquery"></script>
<script src="path/to/class-component"></script>
<script src="path/to/cc-event"></script>
<script src="path/to/puncher"></script>

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

# LICENSE

MIT
