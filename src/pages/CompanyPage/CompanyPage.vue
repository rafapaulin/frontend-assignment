<template>
    <main class="company-page">
        <header>
            <figure><img :src="logo" :alt="name"></figure>
            <hgroup>
                <h1>{{ name }}</h1>
                <div class="flex v-align">
                    <i :style="{'background-image': `url(${images.locationIcon})`}"></i><span>{{ location }}</span>
                </div>
            </hgroup>
        </header>
        <p>{{ desc }}</p>
        <div class="row">
            <div class="col half">
                <div class="card-list">
                    <header>
                        <h2>Activities</h2>
                    </header>
                    <div class="card" :key="i" v-for="(activity, i) in activities">
                        <div class="date">{{ activity.datetime | moment('from', 'now') }}</div>
                        <figure class="status-icon"><img :src="activity.icon"></figure>
                        <div class="desc">
                            <span>{{ activity.desc }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col half">
                <div class="card-list">
                    <header>
                        <h2>Similar Companies</h2>
                    </header>
                    <div class="card ph">
                        <img :src="images.similar">
                    </div>
                </div>
                <div class="card-list">
                    <header>
                        <h2>Company spend history</h2>
                    </header>
                    <div class="card ph">
                        <img :src="images.graph">
                    </div>
                </div>
                <div class="card-list">
                    <header>
                        <h2>Company spend history</h2>
                    </header>
                    <div class="card ph">
                        <img :src="images.history">
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ activities[0].datetime | moment('from', 'now') }} -->
    </main>
</template>
<script src="./CompanyPage"></script>
