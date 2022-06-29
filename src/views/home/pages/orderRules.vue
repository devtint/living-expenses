<template>
  <div class="orderRules">
    <div class="nav">
      <van-nav-bar title="帮助中心" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="tabs">
      <!-- <van-tabs v-model="active" sticky> -->
      <!-- <van-tab title="订单取消规则"> -->
      <h4>常见问题说明</h4>
      <div class="cancelRules">
        <div class="cancelRulesContent">
          <div class="listTitle">1.缴费信息有误？</div>
          <div class="value">*查询缴费信息有误，请联系所属费用管理单位；</div>
          <div class="listTitle">2.系统使用问题</div>
          <div class="value">
            *如在系统使用过程中发现使用问题，可反馈给我们，由此给您带来的不便，我们深表歉意。
          </div>
          <div class="listTitle">3.联系我们</div>
          <div>*其它未尽之事，如有需要，请联系：0776-XXXXX</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderRules',
  components: {},
  props: {},
  data() {
    return {
      active: 0,
      tbody: [],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped lang="less">
.thead {
  /deep/ .van-grid-item__content--center {
    background: #f6f6f6;
  }
}
h4 {
  font-size: 18px;
  color: #333;
  margin: 1rem;
}
.cancelRulesContent {
  margin: 1rem;
  // font-size: 0.28rem;
  color: #666;
  .listTitle {
    font-size: 1.1rem;
    color: #333;
    margin: 1rem 0;
  }
  .value {
    margin-bottom: 0.5rem;
  }
}
</style>
