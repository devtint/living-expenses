<!-- 订单页面 -->
<template>
  <div class="orders">
    <div class="topNav">
      <van-nav-bar
        title="缴费记录"
        fixed
        placeholder
        left-arrow
        @click-left="goBack"
        @click-right="goHome"
      >
        <template #right>
          <van-icon name="wap-home-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="tabs">
      <van-tabs v-model="active" swipeable animated sticky offset-top="2rem">
        <van-tab title="全部">
          <orders-list this-tab="0"></orders-list>
        </van-tab>
        <van-tab title="待付款">
          <orders-list this-tab="1"></orders-list>
        </van-tab>
        <van-tab title="待缴费">
          <orders-list this-tab="2"></orders-list>
        </van-tab>
        <!-- <van-tab title="已取消">
          <orders-list this-tab="3"></orders-list>
        </van-tab> -->
      </van-tabs>
    </div>
  </div>
</template>

<script>
import OrdersList from './components/OrdersList.vue'

export default {
  name: 'orders',
  components: {
    OrdersList,
  },
  props: {},
  data() {
    return {
      active: 0,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style scoped lang="less">
.orders {
  background-color: #f9f9f9;
}
.van-cell {
  padding: 1rem;
}
</style>
