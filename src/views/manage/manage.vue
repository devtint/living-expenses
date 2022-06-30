<template>
  <div class="manage">
    <div class="topNav">
      <van-nav-bar
        title="物业费缴纳"
        left-arrow
        @click-left="goBack"
        @click-right="goHome"
      >
        <template #right>
          <van-icon name="wap-home-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <main>
      <select-site></select-site>
    </main>
  </div>
</template>

<script>
import selectSite from './components/selectSite.vue'
export default {
  name: 'manage',
  components: {
    selectSite,
  },
  props: {},
  data() {
    return {}
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

<style scoped lang="less"></style>
