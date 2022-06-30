<template>
  <div class="selectSite">
    <div class="top">
      <van-search
        v-model="value"
        placeholder="请输入缴费单位"
        @search="onSearch"
      >
        <template #left>
          <div class="region" @click="show = true">
            <span>{{ areaValue }}</span> <van-icon name="arrow-down" />
          </div>
          <van-popup v-model="show" round position="bottom">
            <van-area
              title="请选择所在地区"
              :area-list="areaList"
              @confirm="areaConfirm"
            />
          </van-popup>
        </template>
      </van-search>
    </div>
    <main>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </main>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
export default {
  name: 'selectSite',
  components: {},
  props: {},
  data() {
    return {
      areaList,
      value: '',
      areaValue: '请选择地区',
      show: false,

      list: [],
      oldList: [],
      loading: false,
      finished: true,
      refreshing: false,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSearch(value) {
      console.log(value)
    },
    areaConfirm(value) {
      this.areaValue = value[2].name
      //
      this.listName = `${value[0].name}${value[1].name}${value[2].name}`
      this.oldList = [
        `${this.listName}XX1小区`,
        `${this.listName}XX2小区`,
        `${this.listName}XX3小区`,
        `${this.listName}XX4小区`,
      ]
      //
      console.log(this.areaValue)
      this.list = []
      this.show = false
      this.finished = false
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        this.list = this.oldList
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1)
        // }
        this.loading = false

        // if (this.list.length >= 40) {
        this.finished = true
        // }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
  },
}
</script>

<style scoped lang="less">
.region {
  margin-right: 1rem;
}
</style>
