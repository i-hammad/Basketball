import LmsBaseService from '../lmsBase.service';
import {
    apiEndPoints
} from '../constants'

export default class TeamService extends LmsBaseService {
    constructor() {
        super({})
    }
    getTeams(param) {
        return this.get(apiEndPoints.teams.getTeams , false, param.data, param.config);
    }
    getStatistics(param) {
        return this.get(apiEndPoints.teams.getStatistics , false, param.data, param.config);
    }
    getUpcommingGames(param) {
        return this.get(apiEndPoints.teams.getUpcommingGames , false, param.data, param.config);
    }
}