<template>
    <div class="wrap">
          <header>
              <ul>
                  <li><span>北京</span><i class="icon iconfont icon-angle-down"></i></li>
                  <li><input type="text" placeholder="搜索您想要的车"><i class="icon iconfont icon-fangdajing"></i></li>
                  <li><i class="icon iconfont icon-gongzuo"></i></li>
              </ul>
              <ol>
                  <li>智能排序</li>
                  <li>品牌</li>
                  <li>价格</li>
                  <li>筛选</li>
                  <li>保卖车</li>
              </ol>
          </header>
          <div class="ban"><img src="../img/banner.png"></div>
          <section>
             <dl v-for="(item,index) in data" :index='index'>
                 <dt><img :src="item.img"></dt>
                 <dd>
                     <h1>{{item.title}}</h1>
                     <h2>{{item.theme}}</h2>
                     <p><span>{{item.price}}</span><span>{{item.first}}</span></p>
                 </dd>
             </dl>
          </section>
          <footer>
              <li>
                  <i class="icon iconfont icon-shouye"></i>
                  <span>首页</span>
              </li>
              <li>
                  <i class="icon iconfont icon-daishouhuo-01"></i>
                  <span>买车</span>
              </li>
              <li>
                  <i class="icon iconfont icon-zhifu-01"></i>
                  <span>卖车</span>
              </li>
              <li>
                  <i class="icon iconfont icon-wode"></i>
                  <span>我的</span>
              </li>
          </footer>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            data:[]
        }
    },
    methods:{
        getData:function(){
            var data=[];
            axios.get('../../src/data/data.json')
            .then(function(response){
                for(let i=0;i<response.data.data.length;i++){
                    data.push(response.data.data[i])
                }

            })
            .catch(function(err){
                console.log(err)
            })
            this.data=data;
        }
    },
    mounted:function(){
        this.getData()
    }
}
</script>

