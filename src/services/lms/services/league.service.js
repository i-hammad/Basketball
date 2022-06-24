import LmsBaseService from '../lmsBase.service';
import {
    apiEndPoints
} from '../constants'

export default class LeagueService extends LmsBaseService {
    constructor() {
        super({})
    }
    getLeagues(param) {
        return this.get(apiEndPoints.leagues.getLeagues , false, param.data, param.config);
    }
}