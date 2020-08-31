<template>
  <a-col :span="8">
    <a-card title="total cases" :bordered="true">
      <p>{{ series.data }}</p>
      <apexchart
        type="area"
        height="150"
        width="232"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </a-card>
  </a-col>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart : VueApexCharts ,
  },
  data() {
    return {
      series: [{
        data : this.$store.state.dataSeries
      }],
      chartOptions: {
        grid : {
          show : false
        },
        xaxis : {
          labels : {
            show : false
          }
        },
        yaxis : {
          labels : {
            show : false
          }
        },
        tooltip : {
          enabled : false
        },
        chart : {
          toolbar : {
            show : false
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'round',
          colors: undefined,
          width: 3,
          dashArray: 0,      
        },
        title: {
          text : this.$store.state.totalCases
        },

        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        }
      }
    }
  }
}
</script>

<style></style>
