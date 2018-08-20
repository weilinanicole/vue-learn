<template>
    <footer>
      <router-link to='/'><img src="../assets/img_index.png" alt=""><span>Index</span></router-link>
      <router-link to='/vip'><img src="../assets/img_vip.png" alt=""><span>vip</span></router-link>
      <router-link to='/shopping'><img src="../assets/img_shopping.png" alt=""><span>shopping</span>
             <i id='on' v-if="num">{{num}}</i>
      </router-link>
      <router-link to='/my'><img src="../assets/img_my.png" alt=""><span>my</span></router-link>
    </footer>
</template>
<script>
import Dispatch from '../js/dispatch.js'
export default {
    data(){
        return {
           num:''
        }
    },
    mounted(){
        Dispatch.on(this,'data',res=>{
            let storage=window.localStorage.getItem('storageData');
            if(storage){
                
            }
            let str=0;
            for(let i=0;i<res.length;i++){
                str+=res[i].count
            }
            this.num=str;
        })
    }
}
</script>
