export const teams = Object.freeze({
  namespace: "teams",
  getters: {
    getAllTeams: "getAllTeams",
    getAllStats: "getAllStats",
    getTeamStats: "getTeamStats",
    getTotalGamesPlayed: "getTotalGamesPlayed",
    getAllUpcommingGames: "getAllUpcommingGames",
    getPointsAgainst: "getPointsAgainst",
    getPointsFor: "getPointsFor",
    getSelectedSeason: "getSelectedSeason",
    getSelectedLeague: "getSelectedLeague"
  },
  actions: {
    get_Teams: "getTeams",
    get_Statistics: "getStatistics",
    get_UpcommingGames: "getUpcommingGames",
    select_Season: "selectSeason",
    select_League: "selectLeague"
  },
});

export const seasonFilter = Object.freeze({
  namespace: "seasonFilter",
  getters: {
    getAllSeasons: "getAllSeasons",
  },
  actions: {
    get_Seasons: "getSeasons"
  },
});
export const league = Object.freeze({
  namespace: "league",
  getters: {
    getAllLeagues: "getAllLeagues",
  },
  actions: {
    get_Leagues: "getLeagues"
  },
});