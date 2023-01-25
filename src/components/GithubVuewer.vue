<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubArquivos :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubArquivos from './GithubArquivos';
  export default {
    components: {
      GithubRepo,
      GithubArquivos,
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>
