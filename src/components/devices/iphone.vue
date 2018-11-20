<template>

    <div class="device__container">
        <div class="device" :class="[`device--scale-${scale}`].concat(skinsClasses)">
            <div class="device__header"></div>
            <div class="device__content" :style="{width, height}">
                <slot/>
            </div>
            <div class="device__footer"></div>
        </div>
    </div>

</template>

<script>

    import scale from './../mixins/scale'
    import sizes from './../mixins/sizes'
    import skins from './../mixins/skins'

    export default {
        mixins: [scale, sizes, skins]
    }

</script>

<style scoped lang="scss">

    @import "../../assets/scss/devices/device";

    @for $i from 1 through 30 {

        .device--scale-#{$i} {
            &.device {
                border-radius: 50px  * $scale * $i;

                .device__header {
                    top: 45px * $scale * $i;
                    margin-left: -30px * $scale  * $i;
                    width: 60px * $scale  * $i;
                    height: 6px * $scale  * $i;
                    border-radius: 3px * $scale  * $i;

                    &:before {
                        top: -1px * $scale  * $i;
                        left: -18px * $scale  * $i;
                        width: 8px * $scale  * $i;
                        height: 8px * $scale  * $i;
                        border-radius: 4px * $scale  * $i;
                    }

                    &:after {
                        top: -25px * $scale  * $i;
                        margin-left: -6px * $scale  * $i;
                        width: 12px * $scale  * $i;
                        height: 12px * $scale  * $i;
                        border-radius: 6px * $scale * $i;
                    }
                }

                .device__content {
                    width: 320px * $scale * $i;
                    height: 568px * $scale * $i;
                    border-radius: 3px * $scale * $i;
                    margin: 80px * $scale * $i 15px * $scale * $i 80px * $scale * $i 15px * $scale * $i;
                }

                .device__footer {
                    bottom: 10px * $scale * $i;
                    margin-left: -30px * $scale * $i;
                    width: 60px * $scale * $i;
                    height: 60px * $scale * $i;
                    border-radius: 30px * $scale * $i;
                    &:after {
                        margin-left: -10px * $scale * $i;
                        margin-top: -10px * $scale * $i;
                        width: 20px * $scale * $i;
                        height: 20px * $scale * $i;
                        border-radius: 5px * $scale * $i;
                    }
                }

            }
        }
    }

</style>