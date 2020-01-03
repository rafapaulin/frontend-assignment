import ModalWindow from 'Components/Modal/Modal.vue';
import AdditionalNotes from 'Components/AdditionalNotes/AdditionalNotes.vue';

export default {
    components: {
        ModalWindow,
        AdditionalNotes
    },
    data() {
        return {
            showModal: false,

            cName: null,
            cSpend: null,
            minSpendAbility: null,
            maxSpendAbility: null,
            errors: {
                cName: null,
                cSpend: null,
                spendAb: null,
            }
        }
    },
    computed: {
        formValid() {
            return !this.errors.cName && !this.errors.cSpend && !this.errors.spendAb;
        },
        notes() {
            return this.$store.state.additionalNotes;
        }
    },
    methods: {
        notEmpty() {
            if (!this.cName || this.cName.length === 0)
                this.errors.cName = 'Company name must not be empty';
            else
                this.errors.cName = null;
        },
        validateCompSpend() {
            if (this.cSpend <= 0)
                this.errors.cSpend = 'Company spend must be greater than 0';
            else
                this.errors.cSpend = null;
        },
        validateSpendAbility() {
            if (this.minSpendAbility > this.maxSpendAbility)
                this.errors.spendAb = 'Min spend ability should not be greater than max spend ability';
            else
                this.errors.spendAb = null;
        }
    }
}
