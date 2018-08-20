<template>
  <div id="app">
        <!-- 引入组件head -->
        <Head></Head>
        <div class="wrap">
            <!-- 引入组件footer -->
            <Footer :data="product" :callback="callback"></Footer>
        <section>
             <Content :curProduct="curProduct"></Content>
        </section>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import Head from './components/common/Head';//头部
import Footer from './components/common/Footer';//左边
import Content from './components/common/Content';//右边
export default {
    name: 'App',
    data:function(){
       return {
            product:[],
            curProduct:[],
            callback:(res)=>{
                if(res){
                    console.log(res)
                     this.curProduct = res;
                } 
            },
       }
    },
    methods:{
        getData(){
            axios.get('/info').then(res=>{
                this.product = res.data;
                this.curProduct = res.data.list[0];
                // console.log(this.curProduct);
            })
        }
    },
    mounted(){
        this.getData()
    },
    components:{
        Head,
        Footer,
        Content
    }
}
</script>

<style>
*{
    padding:0;
    margin:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
html,body,#app{
    width:100%;
    height: 100%;
}
#app{
    display: flex;
    flex-direction: column;
}
.footer{
    width:25%;
    border-right: 1px solid #ccc;
    height: 100%;
}
.wrap{
  overflow: hidden;
  flex:1;
  display: flex;

}
section{
    overflow: hidden;
  flex:1;
  display: flex;
}
.footer  a{
    display: block;
    width:100%;
    height:50px;
    line-height:50px;
    text-align: center;
    color:#000;
}
</style>