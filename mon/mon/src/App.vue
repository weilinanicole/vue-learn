<template>
  <div id="app">
    <header>
      <
      <span>选择城市</span>
    </header>
    <section>
      <Box :toBox='toBox' @del='del'/>
      <List :cityData='cityData' @store='store'/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Box from './components/Box.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  data(){
    return {
      cityData:[],
      toBox:[]
    }
  },
  methods:{
    store(fromList){
      this.toBox=fromList
    },
    del(del){
      for(let i=0;i<this.toBox.length;i++){
        if(this.toBox[i]==del){
           this.toBox[i].isActive=false
           this.toBox.splice(this.toBox.indexOf(del),1)
        }
      }
    }
  },
  mounted(){
    axios.get('/data')
    .then((res)=>{
      for(let i=0;i<res.data.cityArr.length;i++){
        for(let j=0;j<res.data.cityArr[i].city.length;j++){
           res.data.cityArr[i].city[j].isActive=false
         }
      }
      console.log(res.data.cityArr)
      this.cityData=res.data.cityArr
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  components:{
    Box,
    List
  }
}
</script>


