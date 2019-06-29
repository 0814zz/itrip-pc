<template>
  <div>
    <el-table :data="chartRows" style="width: 100%">
      <el-table-column label="统计项（平均/合计）" prop="name" width="180">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="趋势图" prop="chart" header-align="center">
        <template slot-scope="scope">
          <div :id="`main${scope.$index}`" style="width: 1300px;height:250px;"></div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    mounted() {

      getChart(i)
      {
        let myChart = echarts.init(document.getElementById('main' + i))
        let key = this.chartRows[0].cells.map((x) => {
          return x.key
        })

      let value = this.chartRows[i].cells.map((x) => {
        return x.value
      })
      let option = {
        xAxis: {
          type: 'category',
          data: key,
          axisLabel: {
            interval: 0,                    //坐标轴太长，全部显示标签
            fontSize: 10,
            showMinLabel: true,     //起始标签
            showMaxLabel: true     //结束标签
          },
          axisLine: {
            lineStyle: {
              width: 0                       //隐藏轴线
            }
          },
          axisTick: {
            show: false                    //隐藏刻度线
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              width: 0
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          data: value,
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          }
        }]
      }
      myChart.setOption(option)
    }
    getAllChart()
      {
        for (let i = 0; i < 5; i++) {
          this.getChart(i)
        }
      }
  }
  }
</script>

<style scoped>

</style>
