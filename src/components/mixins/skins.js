export default {
    props: {
        skins: {
            type: [String, Array],
            default: false
        }
    },

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

            return skin;
        }
    }
}