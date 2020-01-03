<template>
  <div class="dropdown">
    <a
        href="#"
        @mouseenter="open = true"
        @mouseleave="open = false"
    >{{ itemName }}<i class="caret" :style="{'background-image': `url(${images.caret})`}"></i>
    </a>
    <ul
        @mouseenter="open = true"
        @mouseleave="open = false"
        v-if="opts.length > 0"
        :class="{open: open}"
    >
        <li :key="i" v-for="(item, i) in opts"><a :href="item.link">{{ item.label }}</a></li>
    </ul>
  </div>
</template>

<script src="./Dropdown"></script>
