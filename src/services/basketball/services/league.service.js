import BasketballBaseService from '../basketballBase.service';
import {
    apiEndPoints
} from '../constants'

export default class LeagueService extends BasketballBaseService {
    constructor() {
        super({})
    }
    getLeagues(param) {
        return this.get(apiEndPoints.leagues.getLeagues , false, param.data, param.config);
    }
}