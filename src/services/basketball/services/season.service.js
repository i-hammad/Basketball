import BasketballBaseService from '../basketballBase.service';
import {
    apiEndPoints
} from '../constants'

export default class SeasonService extends BasketballBaseService {
    constructor() {
        super({})
    }
    getSeasons(param) {
        return this.get(apiEndPoints.seasons.getSeasons , false, param.data, param.config);
    }
}