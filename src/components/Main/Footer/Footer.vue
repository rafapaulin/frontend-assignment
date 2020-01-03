<template>
    <footer>
        <div class="container flex jcsb">
            <div class="left-pane">
                <div class="links">
                    <nav class="footer-links" v-if="footerLinks">
                        <ul>
                            <li
                                :key="i"
                                v-for="(link, i) in footerLinks"
                            >
                                <a :href="link.link">{{ link.label }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="copyright">
                    <span>© Copyright 2017, Intrincately, Inc. All Rights Reserved</span>
                </div>
            </div>
            <div class="right-pane">
                <nav class="legal" v-if="legalLinks">
                    <ul>
                        <li
                            :key="i"
                            v-for="(link, i) in legalLinks"
                        >
                            <a :href="link.link">{{ link.label }}</a>
                        </li>
                    </ul>
                </nav>
                <nav class="social" v-if="socialLinks">
                    <ul>
                        <li
                            :key="i"
                            v-for="(link, i) in socialLinks"
                        >
                            <a :href="link.link" class="v-adjust"><img :src="link.icon"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>
<script src="./Footer"></script>
