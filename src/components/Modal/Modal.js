import iconClose from 'Images/icon-close.png';

export default {
    props: {
        showModal: Boolean,
    },

    data() {
        return {
            iconClose: iconClose
        };
    },

    methods: {
        close() {
            this.$emit('close');
        }
    }
}
