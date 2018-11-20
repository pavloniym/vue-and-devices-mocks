# Vue and Devices Mocks

Vector devices mockups
Includes:
* iphone
* ipad
* ipad-mini
* mac-browser

### Installation
```bash
npm install vue-and-devices-mocks # OR yarn add vue-and-devices-mocks
```

### Basic usage
* Import `device` component from `vue-and-devices-mocks`
* Register it as component
* Use it in your template
* Add props and content

```vue
<template>
    <device v-bind="$data">
        // ... your awesome content here
    </device>
</template>

<script>
    import device from 'vue-and-devices-mocks'
    export default {
        components: {device},
        data() {
            return {
                type: 'iphone',
                scale: 7,
                width: null,
                height: null,
                skins: ['black', 'noShadow']
            }
        },
    }
</script>
```


### Props
#### type
* Type: `String`
* Default: `null`

Device type: `iphone`, `ipad`, `ipad-mini`, `browser`

---

#### scale
* Type: `Number`
* Default: `1`

Scale number, from 1 to 30

---

#### width
* Type: `String`
* Default: `null`

Custom content width

---

#### height
* Type: `String`
* Default: `null`

Custom content height

---

#### skins
* Type: [`String`, `Array`]
* Default: `null`

Device skins: `dark`, `inverted`, 'noShadow', `touch`

---


### Slots
### default
Default slot where you should render your device's content

---