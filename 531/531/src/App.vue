<template>
  <div id="app">
    <header>
      <div class="title">
        <li><span>阿拉善盟</span>V</li>
        <li><input type="text"><i class="icon iconfont icon-fangdajing"></i></li>
        <li><i class="icon iconfont icon-fangdajing"></i></li>
      </div>
      <nav>

        <li @click='sort'>排序</li>
        <li @click='brand'>品牌v</li>
        <li>价格v</li>
        <li>筛选v</li>
      </nav>
    </header>
    <section>
      <!-- 默认显示所有的数据 -->
      <router-view></router-view>
      <!-- <div class="default" v-if="onoff">
         <div v-for="(item,index) in firstAll" :key='index'>
            <ul v-for="(val,keys) in item" :key='keys' v-if="val.carName&&val.price">
                <li>{{val.carName}}</li>
                <li><span>{{val.price}}</span><i>X</i></li>
            </ul>
         </div>
      </div>
      <Index :clickTop='clickTop' :sortData='sortData' :brandData='brandData'  @child='child' v-else/> -->
    </section>
    <footer>
      <router-link to="/">
        <span>首页</span>
      </router-link>
      <router-link to="/two">
        <span>买车</span>
      </router-link>
      <router-link to="/three">
        <span>卖车</span>
      </router-link>
      <router-link to="/four">
         <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Index from './components/index.vue'


export default {
  name: 'App',
  data(){
    return {
      onoff:true,
      sum:[],//总数据
      firstAll:[],//首页默认数据
      clickTop:'',//最高最低两个数据["价格最高","价格最低"]
      sortData:[],//排序后的数据
      brandData:[]//品牌数据
    }
  },
  methods:{
    getData(){
      axios.get('/login')
      .then((res)=>{
        this.sum=res.data
        for(let i=0;i<res.data.length;i++){
          for(let j=0;j<res.data[i].length;j++){
            this.firstAll.push(res.data[i][j].carList)
          }
        }
      })
      .catch((err)=>{
      })
    },
    sort(){
       this.onoff=false;
       this.clickTop=["价格最高","价格最低"];
    },
    child(ind){
      this.onoff=false;
      let newArr=[];
      for(let i=0;i<this.sum.length;i++){
          for(let j=0;j<this.sum[i].length;j++){
            for(let m=0;m<this.sum[i][j].carList.length;m++){
                if(this.sum[i][j].carList[m].price){
                  newArr.push(this.sum[i][j].carList[m]);
                }
            }
          }
      }
      if(ind=='价格最低'){
        newArr.sort(function(a,b){
              return a.price.slice(0,4)-b.price.slice(0,4)              
        })
      }else{
        newArr.sort(function(a,b){
              return b.price.slice(0,4)-a.price.slice(0,4)              
        })
      }
      this.sortData=newArr
    },

    brand(){
      this.onoff=false;
      for(let i=0;i<this.sum.length;i++){
          for(let j=0;j<this.sum[i].length;j++){
            if(this.brandData.indexOf(this.sum[i][j].carClass)==-1){
              this.brandData.push(this.sum[i][j].carClass)
            }
          }
      }
    }
  },
  mounted(){
    this.getData()
  },
  components:{
    Index
  }
}

</script>

