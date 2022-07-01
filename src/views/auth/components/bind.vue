<template>
  <div class="bind">
    <div class="top">
      <div class="topNav">
        <van-nav-bar
          title="完善资料"
          left-arrow
          @click-left="goBack"
          @click-right="goHome"
        >
          <template #right>
            <van-icon name="wap-home-o" size="18" />
          </template>
        </van-nav-bar>
      </div>
      <p class="title">绑定关联信息</p>
      <div class="tips">
        <div>简单操作，轻松绑定关联信息</div>
        <div>绑定后可快速查缴费用</div>
      </div>
    </div>
    <main>
      <div class="cardBox">
        <!-- <div><i class="iconfont icon-yly_yirenzheng"></i></div> -->
        <div class="successText">
          查询到您的的信息与下列信息关联，请勾选您要绑定的信息
        </div>
        <div class="siteList">
          <van-radio-group v-model="radio">
            <van-cell-group :border="false">
              <van-cell
                v-for="(item, index) in list"
                :border="false"
                clickable
                @click="changeRadio(item, index)"
              >
                <template #icon>
                  <div class="icon">
                    <van-radio :name="index" />
                  </div>
                </template>
                <template #title>
                  <div>{{ item.name + ' | ' + item.tel }}</div>
                </template>
                <template #label>
                  <div>{{ item.address }}</div>
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </div>
    </main>
    <div></div>
    <div class="submit">
      <van-button color="#5e98fe" block @click="submit" v-if="radio !== ''">
        确定
      </van-button>
      <van-button disabled color="#5e98fe" block v-else>
        请选择想要绑定的信息
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bind',
  components: {},
  props: {},
  data() {
    return {
      radio: '',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '广东省广州市天河区珠江新城第一豪华小区1号楼1单元10楼1室',
        },
        {
          id: '2',
          name: '张三',
          tel: '13000000000',
          address: '广东省广州市天河区珠江新城第四豪华小区3号楼3单元13楼3室',
        },
      ],
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
    changeRadio(item, index) {
      this.radio = index
      this.currentlySelected = item
    },
    submit() {
      console.log('radio:', this.radio)
      console.log('当前选择:', this.currentlySelected)
      // 提示是否确定绑定
      this.$dialog
        .confirm({
          title: '绑定关联信息',
          message: '确定绑定关联信息吗？',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
        .then(() => {
          // on confirm
          this.$toast.success('绑定成功')
          this.$router.push({
            path: '/',
          })
        })
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
  font-size: 1rem;
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
  margin: 1.5rem;
}
.icon {
  // width: 1.5rem;
  // height: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
}
</style>
