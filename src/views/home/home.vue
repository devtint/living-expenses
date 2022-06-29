<template>
  <div class="home">
    <div class="top">
      <div class="top-left">
        <div class="topLogo">生活缴费</div>
      </div>
      <img class="topImg" src="./images/top.png" alt="" />
    </div>
    <div class="main">
      <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '80%' }"
        :close-on-click-overlay="false"
        :overlay="false"
        get-container=".home"
      >
        <div class="payList">
          <!-- 圆角卡片 -->
          <div class="roundCard">
            <van-grid :column-num="3" :gutter="10" :border="false" clickable>
              <van-grid-item>
                <template #icon>
                  <i class="iconfont icon-wuyejiaofei"></i>
                </template>
                <template #text>
                  <span class="grid-text">物业费</span>
                </template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  <i class="iconfont icon-shui"></i>
                </template>
                <template #text><span class="grid-text">污水费</span></template>
              </van-grid-item>
              <van-grid-item>
                <template #icon>
                  <i class="iconfont icon-shangpu"></i>
                </template>
                <template #text
                  ><span class="grid-text">商铺缴费</span></template
                >
              </van-grid-item>
            </van-grid>
          </div>
          <div class="roundCard-2">
            <van-grid
              direction="horizontal"
              :column-num="3"
              :gutter="10"
              :border="false"
              clickable
            >
              <van-grid-item to="/help">
                <template #icon>
                  <van-icon name="question-o" size="1.1rem" />
                </template>
                <template #text>
                  <span class="grid-text">帮助</span>
                </template>
              </van-grid-item>
              <van-grid-item to="/order">
                <template #icon>
                  <van-icon name="balance-list-o" size="1.1rem" />
                </template>
                <template #text>
                  <span class="grid-text">缴费记录</span>
                </template>
              </van-grid-item>
              <van-grid-item to="/my">
                <template #icon>
                  <van-icon name="manager-o" size="1.1rem" />
                </template>
                <template #text>
                  <span class="grid-text">我的</span>
                </template>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="footer-box">
          <img class="footer" src="./images/bottom.png" alt="" />
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { useHomeStore } from '@/store/home'
export default {
  name: 'home',
  components: {},
  props: {},
  data() {
    return {
      message: 'Hello Vue!',
      show: true,
      payListShow: true,
    }
  },
  computed: {
    name() {
      return useHomeStore().getName
    },
  },
  watch: {},
  created() {
    this.message = this.name
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.home {
  height: 22vh;
  background: #1475ff;

  .topLogo {
    height: 6vh;
    line-height: 6vh;
    font-size: 1.2rem;
    margin-left: 0.8rem;
    color: #fbf57baa;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  }

  .topImg {
    // margin-top: 6vh;
    width: 100%;
  }
  .roundCard {
    width: 96%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-top: 1.5rem;
    .grid-text {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }
    /deep/ .van-grid-item {
      border-radius: 50%;
    }
    /deep/ .van-grid-item__content {
      border-radius: 10px;
      box-shadow: 1px 3px 10px #e2e0e7;
    }
  }
  .roundCard-2 {
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-top: 1rem;
    .grid-text {
      font-size: 1rem;
      margin-left: 0.3rem;
    }
  }
  .footer-box {
    // 盒子居中
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 90%;
    border: 0.1px solid #e2e0e7;
    border-radius: 5%;
    border-radius: 10px;
    box-shadow: 1px 2px 10px #e2e0e7;

    .footer {
      width: 90%;
      // 图片居中
      display: block;
      margin: 1rem auto;
    }
  }
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
