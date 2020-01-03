export default {
    data() {
        return {
            notes: null
        }
    },
    methods: {
        saveAdditionalNotes() {
            this.$store.commit('setAdditionalNotes', this.notes);
            this.$emit('close');
        }
    }
}
