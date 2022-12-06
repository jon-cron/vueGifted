import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
// import { logger } from "../utils/Logger.js";
import { bcwApi } from "./AxiosService.js"

class GiftsService{
async getGifts(){
const res = await bcwApi.get('')
// logger.log(res.data)
AppState.gifts = res.data.map(g => new Gift(g))
// logger.log('[gifts]',AppState.gifts);
}
}
export const giftsService = new GiftsService()