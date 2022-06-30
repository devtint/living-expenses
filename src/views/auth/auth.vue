<template>
  <div class="auth">
    <div class="top">
      <div class="topNav">
        <van-nav-bar
          title="身份认证"
          left-arrow
          @click-left="goBack"
          @click-right="goHome"
        >
          <template #right>
            <van-icon name="wap-home-o" size="18" />
          </template>
        </van-nav-bar>
      </div>
      <p class="title">身份认证</p>
      <div class="tips">
        <div>为您的隐私安全</div>
        <div>请通过您预留的手机号码进行身份验证</div>
      </div>
    </div>
    <main>
      <div class="cardBox">
        <div class="loginPhone">
          <van-form @submit="onSubmit">
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field
              v-model="tel"
              clearable
              type="tel"
              placeholder="请输入手机号码"
              :rules="phoneRules"
            />
            <van-field
              v-model="sms"
              type="number"
              center
              clearable
              placeholder="请输入短信验证码"
              :rules="smsRules"
            >
              <template #button>
                <van-button
                  size="small"
                  native-type="button"
                  color="#5e98fe"
                  :disabled="idDisabled"
                  @click.native="getCode"
                >
                  {{
                    count === '' ? '发送验证码' : count + 's后重试'
                  }}</van-button
                >
              </template>
            </van-field>
            <van-button
              class="submit"
              block
              color="#5e98fe"
              native-type="submit"
              >提交</van-button
            >
          </van-form>
        </div>
      </div>
    </main>
    <success-vue ref="success"></success-vue>
  </div>
</template>

<script>
import successVue from './components/success.vue'
export default {
  name: 'auth',
  components: {
    successVue,
  },
  props: {},
  data() {
    return {
      count: '',
      tel: '',
      sms: '',
      phoneRules: [
        {
          required: true,
          message: '请输入手机号',
        },
        {
          // 自定义校验规则
          validator: value => {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
              value
            )
          },
          message: '请输入正确格式的手机号码',
          trigger: 'onBlur',
        },
      ],
      smsRules: [
        {
          required: true,
          message: '请输入验证码',
        },
        {
          // 自定义校验规则
          validator: value => {
            return /^\d{4}$/.test(value)
          },
          message: '请输入正确格式的验证码',
          trigger: 'onBlur',
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
    // 获取验证码
    getCode() {
      // var that = this
      //做操作,获取手机号判断手机号是否为空，获取验证码
      if (this.tel == '') {
        Toast.fail('手机号码不得为空')
        return false
      }
      this.Timmer()
      //发请求
      getSmsCode({
        _csrf: this.token,
        mobile: this.tel,
      })
        .then(res => {
          //请求成功
          var result = res.data.rs
          if (result == '1') {
            this.$toast.fail('验证码发送成功,请注意查收')
          } else {
            Toast.fail(result)
            return false
          }
        })
        .catch(err => {
          //请求失败
          console.log('error:' + err)
        })
    },
    Timmer() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.idDisabled = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.idDisabled = false
            clearInterval(this.timer)
            this.timer = null
            this.count = ''
          }
        }, 1000)
      }
    },
    onSubmit(event) {
      console.log(event)
      this.$refs.success.showSuccess()
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
.loginPhone {
  margin: 1.5rem;
}
.cardBox {
  width: 90%;
  // height: 10rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 15px #e2e0e7;
  margin: -3.5rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
