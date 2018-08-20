<template>
    <div class="wrap"> 
       <div class='listBox' v-for="(item,index) in arr" :index='index'>
         <p :id='item.num'>{{item.num}}</p>
            <li :id='datas.id' v-for="(datas,indexs) in item.newArr" :index='indexs'>
              <img :src="datas.Cover">
              <span>{{datas.Name}}</span>
            </li>
      </div>

      <ol>
        <li v-for="(value,key) in spellingWrap" :key='key'><a :href='"#"+value' @click="click">{{value}}</a></li>
      </ol> 
      <!-- <input type="text" v-model="username">
      <input type="password" v-model="password"> -->
  </div>
</template>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  font-size:.14rem;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color:#333;
}
body,html,.wrap{
  width: 100%;
  height: 100%;
}
html{
  font-size:625%;
}
.wrap{
  padding:0 .1rem;
}
.listBox{
  width: 95%;
}
.listBox>p{
  width: 100%;
  height: .3rem;
  line-height: .3rem;
  border-bottom:1px solid #ccc;
}
.listBox>li{
  width: 100%;
  height:.5rem;
  border-bottom:1px solid #ccc;
  display:flex;
  align-items: center;

}
.listBox>li>img{
  width: .4rem;
  margin-right:.1rem;
}
.listBox>li>span{
  font-size:.16rem;
}
ol{
  position:fixed;
  right:0;
  top:50%;
  width: 5%;
  transform: translate3d(0,-50%,0);
  text-align: center;
}
ol>li{
  margin:0 auto;
  height: .2rem;
  line-height:.2rem;
  text-align: center
}
</style>

<script>
import axios from 'axios'
export default {
    data:function(){
      return {
        spellingWrap:[],
        arr:[]
      }
    },
    methods:{
      getData:function(e){
            let spellingWrap=[];
            let arr=[];
            axios.get('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand')
            .then(function(response){
              let data= response.data.data;
          
              data.forEach(element => {
                if(spellingWrap.indexOf(element.Spelling.slice(0,1))==-1){
                   spellingWrap.push(element.Spelling.slice(0,1));
                     arr.push({
                        'num':element.Spelling.slice(0,1),
                        'newArr':[]
                    })
                }
                for(let i=0;i<arr.length;i++){
                  if(arr[i].num===element.Spelling.slice(0,1)){
                    arr[i].newArr.push({'Name':element.Name,'Cover':element.CoverPhoto,'id':element.MasterID})
                  }
                }
              });  
         console.log(arr)
            })
            .catch(function(err){
              console.log(err)
            });  
            
            this.spellingWrap=spellingWrap;
            this.arr=arr;
      },
      click:function(){
        console.log(location.hash.slice(1))
      }
    },
    mounted:function(){
      this.getData()
    }
  }
</script>

