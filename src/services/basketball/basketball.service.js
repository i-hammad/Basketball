import TeamService from "./services/team.service";
import SeasonService from "./services/season.service"
import LeagueService from "./services/league.service";

export default class basketballService {
  get teamService() {
    if (!this._TeamService) {
      this._TeamService = new TeamService();
    }
    return this._TeamService;
  }
  get seasonService() {
    if (!this._SeasonService) {
      this._SeasonService = new SeasonService();
    }
    return this._SeasonService;
  } 
  get leagueService() {
    if (!this._LeagueService) {
      this._LeagueService = new LeagueService();
    }
    return this._LeagueService;
  }
}
