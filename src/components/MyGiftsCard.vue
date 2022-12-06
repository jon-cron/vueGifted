<template>
    <div v-if="gift.opened == false" class="col-3 col-md-2 m-2 selectable" @click="getOneGift(gift.id)">
      <img :title="gift.tag" class="img-fluid" src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
    </div>
    <div v-else class="col-3 col-md-2 m-2">
      <img :title="gift.tag" class="img-fluid" :src="gift.url" alt="">
    </div>
</template>


<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";


export default{
  props: {gift: Gift},
setup(){
  return{
    async getOneGift(id){
      try {
        await giftsService.getOneGift(id)
        
      } catch (error) {
        logger.log(error)
      }
    }
  }
}
}
</script>