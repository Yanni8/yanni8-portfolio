<template>
    <div class="ma-8 h-fit px-4" id="github-stats-wrapper">
        <h1 class="text-4xl mb-5">Private Github Stats</h1>
        <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
        <div class="flex flex-wrap justify-evenly">

            <github-stats-card :in-viewport="isVisible" title="Public Repos" :value="githubStats['public_repos']"></github-stats-card>
            <github-stats-card :in-viewport="isVisible" title="Follower" :value="githubStats['followers']"></github-stats-card>
            <github-stats-card :in-viewport="isVisible" title="Following" :value="githubStats['following']"></github-stats-card>

            <github-stats-card :in-viewport="isVisible" title="Public Repos" :value="repos.length"></github-stats-card>
            <github-stats-card :in-viewport="isVisible" title="Stars Earned" :value="stars"></github-stats-card>
            <github-stats-card :in-viewport="isVisible" title="Joined Orgs" :value="orgs.length"></github-stats-card>

        </div>
    </div>
</template>
<script lang="ts">

import GithubStatsCard from '@/components/GithubStatsCard.vue';
import githubService from '../services/github.service';

export default {
    name: "GithubStats",
    data() {
        return {
            githubStats: {},
            repos: [],
            orgs: [],
            isVisible: false
        };
    },
    methods: {
        getRepos() {
            githubService.getStats()
                .then(data => this.githubStats = data);
            githubService.getPrivateRepos()
                .then(data => this.repos = data);
            githubService.getOrgs()
                .then(data => this.orgs = data);
        }
    },
    created() {
        this.getRepos();
    },
    components: { GithubStatsCard },
    mounted() {
        const element = document.getElementById("github-stats-wrapper");
        const observer = new IntersectionObserver(entries => {
            this.isVisible = entries[0].isIntersecting;
        });

        observer.observe(element);
    },
    computed:{
        stars(){
            let stars = 0;
            this.repos.forEach(repo => stars += repo['stargazers_count']);
            return stars;
        }
    }
}
</script>