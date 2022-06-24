<template>
  <div class="hello">
    <router-link to="/search">Search for Teams</router-link>
  </div>
</template>

<script>
import {
  teams as teamsStoreKeys,
} from "../store/keys";
import { mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(teamsStoreKeys.namespace, teamsStoreKeys.actions),
    getTeams() {
      this.get_Teams({
        data: {
          search: 'boston'
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
