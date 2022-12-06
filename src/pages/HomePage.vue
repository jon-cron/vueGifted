<template>
  <section class="row justify-content-center">
    <div class="card col-4 d-flex">
      <label for="form"><h1 class="text-center">Submit Gift</h1></label>
      <form @submit.prevent="postGift" id="form" class="" action="">
        <div class="form-group">
    <label for="url">URL</label>
    <input type="text" class="form-control" id="url" placeholder="url goes here" v-model="editable.url">
        </div>
        <div class="form-group">
    <label for="tag">Tag</label>
    <input type="text" class="form-control" id="tag" placeholder="write something funny" v-model="editable.tag">
        </div>
        <button class="btn btn-outline-success">Submit</button>
      </form>
    </div>
  </section>
  <section class="row">
    <SearchBar/>
  </section>
  <section class="row justify-content-evenly">
      <MyGiftsCard v-for="g in gifts" :gift="g"/>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    const editable = ref({})

    onMounted(()=>{
      getGifts()
      
    })
    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error)
      }
      async function getOneGift(){
        try {
          await giftsService.getOneGift()
        } catch (error) {
          logger.log(error)
        }
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
      editable,
   async postGift(){
    debugger
    await giftsService.postGift(editable.value)
    }
    }
  }
}
</script>

<style scoped lang="scss">


</style>
