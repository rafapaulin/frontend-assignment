<template>
    <div class="backdrop" v-if="showModal">
        <div class="modal-content">
            <i class="close" :style="{'background-image': `url(${iconClose})`}" @click="close"></i>
            <slot></slot>
        </div>
    </div>
</template>
<script src="./Modal"></script>
