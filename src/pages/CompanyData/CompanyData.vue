<template>
    <main class="company-data">
        <form>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero blanditiis molestias veniam fugit sapiente fugiat! Tempore repellendus reiciendis autem rerum id, repellat maxime quos laboriosam aperiam facilis deleniti illo!</p>
            <div class="form-group half" :class="{invalid: errors.cName}">
                <label>Company name</label>
                <input type="text" v-model="cName" @blur="notEmpty" name="cName">
                <span v-if="errors.cName" class="error-msg">{{ errors.cName }}</span>
            </div>
            <div class="form-group half" :class="{invalid: errors.cSpend}">
                <label>Company spend</label>
                <input
                    type="text"
                    v-model="cSpend"
                    placeholder="e.g. $150,000"
                    name="cSpend"
                    @blur="validateCompSpend"
                    v-currency
                >
                <span v-if="errors.cSpend" class="error-msg">{{ errors.cSpend }}</span>
            </div>
            <div class="form-group half" :class="{invalid: errors.spendAb}">
                <label>Company spend ability</label>
                <div class="double-input">
                    <input v-currency type="text" v-model="minSpendAbility" placeholder="e.g. $150,000" @blur="validateSpendAbility">
                    <input v-currency type="text" v-model="maxSpendAbility" placeholder="e.g. $300,000" @blur="validateSpendAbility">
                </div>
                <span v-if="errors.spendAb" class="error-msg">{{ errors.spendAb }}</span>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea :value="notes" readonly @click="showModal = true"></textarea>
            </div>
        </form>
        <modal-window :showModal="showModal" @close="showModal = false">
            <additional-notes @close="showModal = false" />
        </modal-window>
    </main>
</template>

<script src="./CompanyData"></script>
