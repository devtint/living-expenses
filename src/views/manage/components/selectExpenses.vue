<template>
  <div class="selectExpenses">
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }">
      <div class="top">
        <div class="topNav">
          <van-nav-bar
            title="可选缴费"
            left-arrow
            @click-left="goBack"
            @click-right="goHome"
          >
            <template #right>
              <van-icon name="wap-home-o" size="18" />
            </template>
          </van-nav-bar>
        </div>
        <h3 class="title">
          查询到您有如下可缴费用,请勾选您要缴纳的费用，进行缴费
        </h3>
      </div>
      <main>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              :key="index"
              :title="item.value"
              clickable
              @click="radioChange(item.value, index)"
            >
              <template #right-icon>
                <van-radio :name="index" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <div class="submit">
          <van-button color="#5e98fe" block @click="submit">
            去缴费
          </van-button>
        </div>
      </main>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'selectExpenses',
  components: {},
  props: {},
  data() {
    return {
      show: false,
      list: [
        { value: '2022年物业费(全年)' },
        { value: '2022年6月物业费' },
        { value: '2022年7月物业费' },
      ],
      radio: 0,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showExpenses(item) {
      this.show = true
      console.log('缴费小区:', item)
      this.site = item
    },
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push({
        path: '/',
      })
    },
    radioChange(value, index) {
      console.log('选择的缴费项目:', `${this.site}-${value}`)
      this.radio = index
    },
    submit() {
      console.log('点击了缴费按钮')
      console.log(
        '已选择的缴费项目:',
        `${this.site}-${this.list[this.radio].value}`
      )
      this.$router.push({
        path: '/confirm',
        query: {
          site: this.site,
          expenses: this.list[this.radio].value,
        },
      })
    },
  },
}
</script>

<style scoped lang="less">
.title {
  font-size: 16px;
  color: #333;
  width: 70%;
  text-align: center;
  top: 0;
  left: 0;
  margin: 1rem auto;
}
.submit {
  width: 90%;
  text-align: center;
  margin: 1.5rem auto;
}
</style>
