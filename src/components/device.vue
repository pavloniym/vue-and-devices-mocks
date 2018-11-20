<template>

    <div class="device__container">
        <div class="device" :class="[`device--scale-${scale}`].concat(skinsClasses, deviceClasses)">
            <div class="device__header"></div>
            <div class="device__content" :style="{width, height}">
                <slot/>
            </div>
            <div class="device__footer"></div>
        </div>
    </div>

</template>

<script>

    const props = {
        type: {
            type: String,
            default: null
        },
        scale: {
            type: Number,
            default: 1
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        },
        skins: {
            type: [String, Array],
            default: false
        }
    };

    export default {
        props,
        computed: {

            /**
             * Create device--black class
             *
             * @returns {*}
             */
            skinsClasses() {
                let skin = [];
                let skins = Array.isArray(this.skins) ? this.skins : [this.skins];

                if(skins.find(s => s === 'black')) skin.push('device--black');
                if(skins.find(s => s === 'inverted')) skin.push('device--inverted');
                if(skins.find(s => s === 'noShadow')) skin.push('device--no-shadow');
                if(skins.find(s => s === 'touch')) skin.push('device--touch');

                return skin;
            },


            /**
             * Detect type and add device's classes
             *
             * @returns {*}
             */
            deviceClasses() {
                switch (this.type) {
                    default:
                    case 'iphone':
                        return ['device--iphone'];

                    case 'ipad':
                        return ['device--ipad'];

                    case 'ipad-mini':
                        return ['device--ipad-mini'];

                    case 'browser':
                        return ['device--browser'];
                }

            }
        }

    }

</script>