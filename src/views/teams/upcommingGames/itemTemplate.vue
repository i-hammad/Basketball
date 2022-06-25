<template>
  <div>
    <b-card @click="goToDetail()" no-body class="overflow-hidden mb-30" style="max-width: 540px">
      <b-row no-gutters class="align-items-center">
        <div class="col-3">
          <small>VS</small>
        </div>
        <b-col class="col-auto">
          <div class="img-cntr" v-if="model.logo">
            <b-card-img :src="model.logo" alt="Image" class="rounded-0"></b-card-img>
          </div>
        </b-col>
        <b-col>
          <b-card-body :title="model.name"> </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <!-- <div class="home">
      <span>{{ model.home.name }}</span>
      <img :src="model.home.logo" alt="" />
    </div>
    <div class="away">
      <span>{{ model.away.name }}</span>
      <img :src="model.away.logo" alt="" />
    </div> -->
  </div>
</template>
<script>
export default {
  props: ["model"],
};
</script>
<style scoped>
.mb-30 {
  margin-bottom: 30px;
}
.card {
  padding: 10px;
  margin-top: 30px;
}
.card .img-cntr {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.card .img-cntr img {
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card h4 {
  font-size: 20px;
  margin-bottom: 0;
}
</style>
