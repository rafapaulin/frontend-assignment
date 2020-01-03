import caret from 'Images/icon-caret.png';

export default {
    props: {
        itemName: {
            type: String
        },
        opts: {
            type: Array
        }
    },

    data() {
        return {
            open: false,
            images: {
                caret: caret
            }
        }
    }
}
