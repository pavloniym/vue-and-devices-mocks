<template>
    <section class="section hero">
        <div class="hero-body container">
            <div class="columns">
                <div class="column has-text-centered">
                    <device v-bind="props" :skins="activeSkins"/>
                </div>
                <div class="column">

                    <h1 class="title">Vue and Devices Mocks</h1>
                    <div class="tags">
                        <a class="tag" href="https://github.com/PavelShar/vue-and-devices-mocks">github</a>
                        <a class="tag" href="https://github.com/PavelShar/vue-and-devices-mocks#vue-and-devices-mocks">docs</a>
                    </div>

                    <div class="field">
                        <label class="label">Device</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select v-model="props.type">
                                    <option v-for="(i,k) in types" :key="k" :selected="k === props.type">
                                        {{i}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Scale</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Device scale"
                                   v-model.number="props.scale">
                        </div>
                        <p class="help">Set device scale from 1 to 30</p>
                    </div>

                    <div class="field">
                        <label class="label">Sizes</label>
                        <div class="control">
                            <input class="input"
                                   type="text"
                                   placeholder="Custom width in px ..."
                                   v-model="props.width">
                            <input class="input"
                                   type="text"
                                   :style="{marginTop: '0.2em'}"
                                   placeholder="Custom height in px ..."
                                   v-model="props.height">
                        </div>
                        <p class="help">Use custom width and height size for fine tweaking</p>
                    </div>

                    <div class="field">
                        <label class="label">Skins</label>
                        <div class="control">
                            <div v-for="(i,k) in skins.all" :key="k">
                                <label class="checkbox" >
                                    <input type="checkbox" v-model="skins.active[i]">
                                    {{i}}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <div>
                            Mockups created by <a href="https://codepen.io/lucasmotta/" target="_blank">Lucas Motta</a>
                        </div>
                        <div>
                            Adapted for Vue by <a href="https://github.com/PavelShar" target="_blank">Paul Sharypov</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>

    import device from '../../src/components/index'

    export default {
        components: {device},
        data() {
            return {
                types: ['iphone', 'ipad', 'ipad-mini', 'browser'],
                skins: {
                    all: ['black', 'inverted', 'noShadow', 'touch'],
                    active: {
                        black: false,
                        inverted: false,
                        noShadow: false,
                        touch: false,
                    }
                },
                props: {
                    type: 'iphone',
                    scale: 10,
                    width: null,
                    height: null,
                }

            }
        },


        computed: {
            activeSkins() {
                return Object.keys(this.skins.active).filter(s => this.skins.active[s]);
            }
        }
    }
</script>
