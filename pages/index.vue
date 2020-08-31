<template>
  <a-layout class="container" id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout style="order: 1;">
      
    </a-layout>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 24px; height: auto;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />

        <a-row :gutter="16">
          <cases />
          <recovers />
          <deathes />
        </a-row>

      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 0', padding: '24px', background: '#fff', minHeight: '280px', flexGrow: '2' }"
        @click="fch"
      >
       

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import cases from "../components/totalCases"
import recovers from "../components/totalRecovers"
import deathes from "../components/totalDeathes"

export default {
  components: {
    cases,
    recovers,
    deathes
  },
    data() {
      return {
        collapsed: false,
        totalRecovered: this.$store.state.totalRecovered,
        totalDeath: this.$store.state.totalDeath,
      };
    },
    methods: {
      fch() {
      //   var requestOptions = {
      //   method: 'GET',
      //   redirect: 'follow'
      // };

      // fetch("https://api.covid19api.com/summary", requestOptions)
      //   .then(response => response.json())
      //   .then(result => {
      //     this.totalCases = result.Countries.map(item => item.TotalConfirmed).reduce((red , cur) => red + cur)
      //     this.totalRecovered = result.Countries.map(item => item.TotalRecovered).reduce((red , cur) => red + cur)
      //     this.totalDeath = result.Countries.map(item => item.TotalDeaths).reduce((red , cur) => red + cur)
      //   })
      //   .catch(error => console.log('error', error));
      }

    },
  }
</script>

<style>
.container {
  min-height: 100vh;
  background: rgb(184, 184, 243);
}



  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

</style>
