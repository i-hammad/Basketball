<template>
  <div>
    <search @onSearch="getTeams"></search>
    <loader :id="loaderId"></loader>
    <div class="row" v-if="getAllTeams.length">
      <div v-for="(team, index) in getAllTeams" :key="index">
        <item-template class="col-md-4" :model="team" :route-params="model"></item-template>
      </div>
    </div>
    <div v-else-if="showNoRecordFound">
      <span>no Record found</span>
    </div>
  </div>
</template>
<script>
import { teams as teamsStoreKeys } from "../../store/keys";
import { mapGetters, mapActions } from "vuex";
import itemTemplate from "./itemTemplate";
import search from "../search/index.vue";
export default {
  name: "HelloWorld",
  components: {
    itemTemplate,
    search,
  },
  data() {
    return {
      model: Object,
      loaderId: "teamsLoaderId",
      showNoRecordFound: false
    };
  },
  computed: {
    ...mapGetters(teamsStoreKeys.namespace, teamsStoreKeys.getters),
  },
  methods: {
    ...mapActions(teamsStoreKeys.namespace, teamsStoreKeys.actions),
    getTeams(model) {
      this.model = model;
      this.get_Teams({
        data: model,
        config: {
          loader: {
            show: true,
            id: this.loaderId,
          },
        },
      }).then(() => {
        this.showNoRecordFound = true
      })
      .catch(() => {
        this.showNoRecordFound = true
      })
    },
  },
};
</script>
