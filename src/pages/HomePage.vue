<template>
  <section class="row">
    <div class="col-6">
      <form action="">
        <div class="form-group">
          <input class="form-control" type="">
          <button class="btn btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  </section>
  <section class="row justify-content-evenly">
      <MyGiftsCard v-for="g in gifts" :gift="g"/>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    onMounted(()=>{
      getGifts()
      
    })
    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error)
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
      
    }
  }
}
</script>

<style scoped lang="scss">


</style>
