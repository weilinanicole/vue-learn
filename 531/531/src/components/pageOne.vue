<template>
     <div class="default" v-if="onoff">
         <div v-for="(item,index) in firstAll" :key='index'>
            <ul v-for="(val,keys) in item" :key='keys' v-if="val.carName&&val.price">
                <li>{{val.carName}}</li>
                <li><span>{{val.price}}</span><i>X</i></li>
            </ul>
         </div>
      </div>
      <Index :clickTop='clickTop' :sortData='sortData' :brandData='brandData'  @child='child' v-else/>
</template>

<script>
export default {

}
</script>

<style>

</style>
