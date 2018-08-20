<template>
    <div class="list">
        <div class="citys" v-for="(item,index) in cityData" :key='index'>
            <h2>{{item.letter}}</h2>
            <ul>
                <li v-for="(val,keys) in item.city" :key='keys' @click='storeData(val)' :class='{"on":val.isActive}'>{{val.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            store:[]
        }
    },
    methods:{
        storeData(val){
            if(this.store.indexOf(val)==-1){
                val.isActive=true
                 this.store.push(val);  
            }else{
                 val.isActive=false
                 this.store.splice(this.store.indexOf(val),1)
            }
            this.$emit('store',this.store)    
        }
    },
    props:['cityData']
}
</script>



