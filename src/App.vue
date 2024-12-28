<template>
  <baidu-map class="map" :zoom="13" :center="{ lat: 24.93685520002406, lng: 102.72960724248914 }" :mapStyle="mapStyle">
    <bm-polyline :path="subwayPath" strokeColor="#908eff" :strokeWeight="3" :strokeOpacity="0.8" />
    <bm-marker v-for="(item, index) in position" :key="index" :position="{ lng: item.lng, lat: item.lat }"
      :icon="{ url: svg, size: { width: 20, height: 20 } }" :title="item.name" @click="onClick(item.name)"
      @mouseover="mouseover(item.name)"></bm-marker>

  </baidu-map>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { mapStyle } from './config/mapstyle';
import svg from './assets/circle.svg'

const position = [
  {
    "lat": 24.93685520002406,
    "lng": 102.72960724248914,
    "name": "宝丰"
  },
  {
    "lat": 24.94518065022431,
    "lng": 102.71484044736825,
    "name": "滇池国际会展中心"
  },
  {
    "lat": 24.95089171011791,
    "lng": 102.70309725876238,
    "name": "福保"
  },
  {
    "lat": 24.96748509148531,
    "lng": 102.69972915208437,
    "name": "金家河"
  },
  {
    "lat": 24.97905248779048,
    "lng": 102.69958030286143,
    "name": "庄家塘立交桥"
  },
  {
    "lat": 24.981114390325047,
    "lng": 102.68666204081836,
    "name": "兴体路"
  },
  {
    "lat": 24.98226868347136,
    "lng": 102.67704594982887,
    "name": "渔户村"
  },
  {
    "lat": 24.98976947963619,
    "lng": 102.6705962060999,
    "name": "迎海路"
  },
  {
    "lat": 25.0006030095599,
    "lng": 102.67108362666946,
    "name": "大坝"
  },
  {
    "lat": 25.009848583765788,
    "lng": 102.6806862430763,
    "name": "广福路西口"
  },
  {
    "lat": 25.016549885537007,
    "lng": 102.691412190523,
    "name": "福海"
  },
  {
    "lat": 25.020032841397395,
    "lng": 102.69692958296346,
    "name": "金兰路"
  },
  {
    "lat": 25.026833849570078,
    "lng": 102.70484958332013,
    "name": "严家地"
  },
  {
    "lat": 25.038412620870698,
    "lng": 102.70632505011977,
    "name": "弥勒寺"
  },
  {
    "lat": 25.044383645186997,
    "lng": 102.71234827839274,
    "name": "五一路"
  },
  {
    "lat": 25.050956522560586,
    "lng": 102.7139787028928,
    "name": "华山西路"
  },
  {
    "lat": 25.060881042679217,
    "lng": 102.71912168159683,
    "name": "圆通山"
  },
  {
    "lat": 25.0630066086809,
    "lng": 102.72958649163185,
    "name": "火车北站"
  },
  {
    "lat": 25.061109999416775,
    "lng": 102.73609210996352,
    "name": "穿金路"
  },
  {
    "lat": 25.059619154341885,
    "lng": 102.74761970524706,
    "name": "石闸"
  },
  {
    "lat": 25.066870434750605,
    "lng": 102.75476985778191,
    "name": "白龙寺"
  },
  {
    "lat": 25.07519197095745,
    "lng": 102.76079191825771,
    "name": "世博园"
  }
]

// 获取站点坐标
const subwayPath = computed(() => position.map(item => ({ lng: item.lng, lat: item.lat })))

const onClick = (name: string) => {
  console.log(`click ${name}`)
}

const mouseover = (name: string) => {
  console.log(`mouseover ${name}`)
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100vh;
}

.custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
}
</style>