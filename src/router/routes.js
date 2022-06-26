import layout from "../components/layout";
import teams from "../views/teams";
import detail from "../views/teams/detail";

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      { path: "", name: "teams", component: teams, meta: {
        title: "Search Teams"
      } },
      { path: "detail/:teamId/:season/:leagueId", name: "detail", component: detail, meta: {
        title: "Team Stats"
      } },
    ],
  },
];
export default routes;
