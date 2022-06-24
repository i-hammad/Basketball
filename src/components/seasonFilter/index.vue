<template>
    <div>
        <div v-if="getAllSeasons.length">{{getAllSeasons}}</div>
    </div>
</template>
<script>
import { seasonFilter as seasonsStoreKeys } from "../../store/keys";
import { mapGetters, mapActions } from "vuex";
export default {
    mounted() {
        this.getSeasons()
    },
     computed: {
     ...mapGetters(seasonsStoreKeys.namespace, seasonsStoreKeys.getters),
  },
  methods: {
      ...mapActions(seasonsStoreKeys.namespace, seasonsStoreKeys.actions),
      getSeasons() {
          this.get_Seasons({})
      }
  }
}
</script>