import layout from "../components/layout";
import helloWorld from "../components/HelloWorld";
import teams from "../views/teams";
import detail from "../views/teams/detail";

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      { path: "", name: "home", component: helloWorld, meta: {
        title: "Home"
      } },
      { path: "search", name: "teams", component: teams, meta: {
        title: "Search Teams"
      } },
      { path: "detail/:teamId/:season/:leagueId", name: "detail", component: detail, meta: {
        title: "Team Stats"
      } },
    ],
  },
  //   { path: "/:notFound(.*)*", component: NotFound },
];
export default routes;
