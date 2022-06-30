<template>
  <div class="confirm">
    <div class="topNav">
      <van-nav-bar
        title="核实缴纳信息"
        left-arrow
        @click-left="goBack"
        @click-right="goHome"
      >
        <template #right>
          <van-icon name="wap-home-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <van-cell-group>
      <van-cell :title="payee" />
    </van-cell-group>
    <main>
      <van-cell-group>
        <van-field label="业主姓名" :value="list.name" readonly />
        <van-field label="门牌号" :value="list.number" readonly />
        <van-field label="费用明细" :value="list.feeDetailed" readonly />
        <van-field label="缴费金额" readonly>
          <template #input>
            <div style="color: #f91416">
              ￥<span>{{ list.totalPrice }}</span>
            </div>
          </template>
        </van-field>
      </van-cell-group>
      <div class="submit">
        <van-button color="#5e98fe" block @click="submit">
          确定支付
        </van-button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  components: {},
  props: {},
  data() {
    return {
      payee: '广西南宁和祥物业服务有限责任公司',
      list: {
        name: '张三',
        number: '2-4-702',
        feeDetailed: this.$route.query.expenses,
        totalPrice: '570.90',
      },
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
    submit() {
      this.$router.push({
        path: '/pay',
        query: {
          id: this.$route.query.id,
          name: this.$route.query.name,
          number: this.$route.query.number,
          expenses: this.$route.query.expenses,
          totalPrice: this.$route.query.totalPrice,
        },
      })
    },
  },
}
</script>

<style scoped lang="less">
.submit {
  width: 90%;
  text-align: center;
  margin: 1.5rem auto;
}
</style>
