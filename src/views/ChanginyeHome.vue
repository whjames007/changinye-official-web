<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="headerOne">
            <img style="height: 60px;" src="/static/logo103.png">
          </el-col>
          <el-col :span="headerTwo">
            <div style="font-size:18px; padding: 15px;">{{$t('message.enterpriseName')}}</div>
          </el-col>
          <el-col :span="headerThree">
            <el-menu default-active="11" mode="horizontal" @select="handleSelect">
              <el-submenu index="11">
                <template slot="title">产品介绍</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">公司简介</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="13">
                <template slot="title">联系我们</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="14">
                <template slot="title">合作伙伴</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="headerFour">
            <div style="padding: 15px;">
              <img style="height: 30px;" :src="localeFlag">
            </div>
          </el-col>
          <el-col :span="headerFive">
            <div style="padding: 10px;">
              <el-select
                clearable
                v-model="currentLanguage"
                :placeholder="$t('message.selectCountry')"
                @change="changeLanguage"
                style="width: 100%"
              >
                <el-option
                  v-for="item in langList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <img :src="item.flag" style="width:24px;">
                  <span>{{ item.label }}</span>
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div>
        </div>

        <div>
          <el-carousel height="760px" :interval="1000">
            <el-carousel-item v-for="item in bannerList" :key="item">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>{{$t('message.enterpriseName')}}</div>
        <div>
          <el-card class="box-card">
            <div v-for="item in customerList" :key="item.id">
              <img :src="item.customer">
            </div>
          </el-card>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script src="@/views/js/ChanginyeHome.js"></script>
<style scoped src="@/views/css/ChanginyeHome.css"></style>
