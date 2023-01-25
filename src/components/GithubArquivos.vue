<template>
    <div>
      <v-row>
        <v-col cols="12">
          <span v-for="pasta in pastasabertas" :key="pasta"><v-btn @click="listaArquivos(pasta)"> > {{ pasta }} </v-btn></span>
            <v-simple-table>
              <template v-slot:default>
                
                <thead>
                  <tr>
                    <th class="text-left">Type</th>
                    <th class="text-left">Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="arquivo in arquivos" :key="arquivo.number">
                    <td>{{ arquivo.type }}</td>
                    <td v-if="arquivo.type=='dir'"><v-btn @click="listaArquivos(arquivo.path)">{{ arquivo.path }}</v-btn></td>
                    <td v-else>{{ arquivo.name }}</td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        arquivos: [],
        pastasabertas: [],
        loading: false,
        temmais: false,
      }),
      methods: {
        async listaArquivos(path){
          this.arquivos = []
          this.loading = true
          const maisarquivos = await api.listaArquivos(this.repo.owner.login, this.repo.name, path)
          this.arquivos = this.arquivos.concat(maisarquivos)
          if (!this.pastasabertas.includes(path)) {
            this.pastasabertas.push(path)
          }
          else {
            for (let index in this.pastasabertas) {
              if (this.pastasabertas.indexOf(path) == index) {
                this.pastasabertas.splice(parseInt(index) + 1, this.pastasabertas.length)
              }
            }
          }
          this.loading = false
          this.temmais = maisarquivos.length > 0
        }
      },
      watch: {
        repo(){
          this.arquivos = []
          if (this.repo) {
            this.temmais = false
            this.listaArquivos('')
          } else {
            this.arquivos = []
            this.temmais = false
          }
        }
      }
    }
  </script>
  