import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
// import { logger } from "../utils/Logger.js";
import { bcwApi } from "./AxiosService.js"

class GiftsService{
async getGifts(){
const res = await bcwApi.get('')
// logger.log(res.data)
AppState.gifts = res.data.map(g => new Gift(g))
// logger.log('[gifts]',AppState.gifts);
}
async getOneGift(id){
 let gift = AppState.gifts.find(g => g.id == id)
 gift.opened = true
 let giftIndex = AppState.gifts.indexOf(gift)
  const res = await bcwApi.put(`/${id}`, gift)
  logger.log(res.data)
  let openedGift = new Gift(res.data)
  AppState.gifts.splice(giftIndex, 1, openedGift)

}
async postGift(value){
  const res = await bcwApi.post('', value)
  logger.log(res.data)
}
}
export const giftsService = new GiftsService()