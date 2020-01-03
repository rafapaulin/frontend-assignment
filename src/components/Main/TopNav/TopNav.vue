<template>
    <nav class="top-nav flex v-align">
        <figure class="logo medium v-adjust">
            <img :src="images.logo" alt="Intricately">
        </figure>
        <form>
            <input
                :style="{'background-image': `url(${images.searchIcon})`}"
                type="search"
                placeholder="Search Companies"
            >
        </form>
        <span>OR</span>
        <button>new smartlist</button>
        <div class="menu">
            <dropdown
                itemName="Prospect"
                :opts="[
                    {label: 'Option 1', link: '#'},
                    {label: 'Option 2', link: '#'},
                    {label: 'Option 3', link: '#'},
                ]"
            />
            <dropdown
                itemName="Alert"
                :opts="[
                    {label: 'Option 1', link: '#'},
                    {label: 'Option 2', link: '#'},
                    {label: 'Option 3', link: '#'},
                ]"
            />
            <dropdown
                itemName="Learn"
                :opts="[
                    {label: 'Option 1', link: '#'},
                    {label: 'Option 2', link: '#'},
                    {label: 'Option 3', link: '#'},
                ]"
            />
        </div>

        <div class="right-pane flex v-align">
            <figure class="small v-adjust">
                <img :src="images.browser" alt="Browser">
            </figure>
            <figure class="small v-adjust">
                <img :src="images.user" alt="User">
            </figure>
        </div>
    </nav>
</template>
<script src="./TopNav"></script>
