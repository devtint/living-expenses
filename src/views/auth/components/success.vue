<template>
  <div class="success">
    <van-popup v-model="show" position="top" :style="{ height: '100%' }">
      <div class="top">
        <div class="topNav">
          <van-nav-bar
            title="认证完成"
            left-arrow
            @click-left="goBack"
            @click-right="goHome"
          >
            <template #right>
              <van-icon name="wap-home-o" size="18" />
            </template>
          </van-nav-bar>
        </div>
        <p class="title">认证完成</p>
        <div class="tips">
          <div>为更好地给您提供服务</div>
          <div>认证完成后可绑定关联信息,下次缴费无法再验证哦</div>
        </div>
      </div>
      <main>
        <div class="cardBox">
          <div><i class="iconfont icon-yly_yirenzheng"></i></div>
          <div class="successText">认证成功</div>
        </div>
      </main>
      <div>
        <van-radio-group v-model="radio">
          <van-cell-group :border="false">
            <van-cell
              :border="false"
              title="绑定关联信息，下次缴费无需再验证"
              clickable
              @click="radio = '1'"
            >
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell
              :border="false"
              title="不关联信息，直接去缴费"
              clickable
              @click="radio = '2'"
            >
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="submit">
        <van-button color="#5e98fe" block @click="submit"> 下一步 </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'success',
  components: {},
  props: {},
  data() {
    return {
      show: false,
      radio: '1',
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showSuccess() {
      this.show = true
    },
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push({
        path: '/',
      })
    },
    submit() {
      if (this.radio === '1') {
        this.$router.push({
          path: '/bind',
        })
      } else {
        this.$router.push({
          path: '/pay',
        })
      }
    },
  },
}
</script>

<style scoped lang="less">
.top {
  padding: 0.5rem 0.5rem 5rem 0;
  background: #5e98fe;
  color: #fff;
  .van-nav-bar {
    background-color: #5e98fe;
    /deep/ .van-nav-bar__title {
      color: white;
    }
    /deep/ .van-icon {
      color: white;
    }
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
}
.title {
  font-size: 1.5rem;
  color: #333;
  margin: 1.5rem;
  color: #fff;
}
.tips {
  margin: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.687);
}
.cardBox {
  width: 90%;
  // height: 10rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 15px #e2e0e7;
  margin: -3.5rem auto 2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // 上下布局
  flex-direction: column;
  font-size: 1.5rem;
  color: #333;
  background-color: #fff;

  .van-icon {
    margin-right: 0.5rem;
  }
}
.submit {
  width: 90%;
  // top: 0;
  margin: 0 auto;
  margin-top: 1.5rem;
}
.successText {
  margin-bottom: 1.5rem;
}
</style>
