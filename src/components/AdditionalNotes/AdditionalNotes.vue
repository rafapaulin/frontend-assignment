<template>
    <div class="additional-notes">
        <div class="form-group">
            <label>Additional Notes</label>
            <textarea v-model="notes"></textarea>
        </div>
        <button @click="saveAdditionalNotes">Save</button>
    </div>
</template>
<script src="./AdditionalNotes"></script>
