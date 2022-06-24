import LmsBaseService from '../lmsBase.service';
import {
    apiEndPoints
} from '../constants'

export default class SeasonService extends LmsBaseService {
    constructor() {
        super({})
    }
    getSeasons(param) {
        return this.get(apiEndPoints.seasons.getSeasons , false, param.data, param.config);
    }
}