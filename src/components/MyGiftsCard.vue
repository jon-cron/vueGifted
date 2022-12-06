<template>
    <div class="col-3 col-md-2 m-2 selectable">
      <img class="img-fluid" :src="gift.url" alt="">
    </div>
</template>


<script>
import { Gift } from "../models/Gift.js";


export default{
  props: {gift: Gift},
setup(){
  return{

  }
}
}
</script>