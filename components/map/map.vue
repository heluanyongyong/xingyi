<template>
  <div>
    <no-ssr>
      <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
          <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
          <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        </el-amap>
      </div>
    </no-ssr>
  </div>
</template>

<style>
  .amap-page-container {
    height: 600px;
  }
</style>


<script>
export default {
  data () {
    return {
      zoom: 17,
      center: [114.06798073351291, 22.63000532679801],
      marker: {
        position: [114.06798073351291, 22.63000532679801],
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      },
      mywindow: {
        position: [114.06798073351291, 22.63000532679801],
        content: '<h4>深圳星移网络科技有限公司</h4><div class="text item" style="font-size:14px">地址：深圳市龙岗坂田云里智能园3栋C4室</div>',
        visible: true,
        events: {
          close () {
            this.mywindow.visible = false
          }
        }
      },
      plugin: [
        {       
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance)
            }
          }        
        }
      ]
    }
  }
}
</script>

<!-- <template>
  <div>
    <no-ssr>
      <div class="amap-wrapper">
        <el-amap :vid="'amap-vue'"></el-amap>
      </div>
    </no-ssr>
  </div>
</template>
<style>
.amap-wrapper {
  width: 1200px;
  height: 800px;
}
</style>
<script>
export default{
}
</script> -->
<!-- <template>
  <section style="height: 600px;">
    <no-ssr>
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :events="events">
        <el-amap-marker style="width:1200px" v-for="(marker, index) in markers" :position="marker.position"
                        :key="index" :vid="index" :events="marker.events"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius"
                        :fill-opacity="0.5" fill-color="#ffb5b3" stroke-color="#ffb5b3">
        </el-amap-circle>
      </el-amap>
    </no-ssr>
  </section>
</template>
<style>
#container {width:1200px; height: 180px; } 
</style>
<script>
  import * as _ from 'lodash';
export default {
  data() {
    let self = this;
    return {
      center: [114.06798073351291, 22.63000532679801],
      events: {
        init(map) {
          let markers = _.cloneDeep(self.markers);
          markers.forEach((item, index) => {
            AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
              item = new SimpleMarker({
                iconLabel: {
                  innerHTML: index,
                  style: {
                    color: '#fff'
                  }
                },
                iconStyle: '#1995f5',
                map: map,
                position: item.position
              });
            });
          });
        }
      },
      lng: 0,
      lat: 0,
      plugin: [{
        pName: 'Geolocation',
        events: {
          click: (o) => {
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.$nextTick();
              }
            });
          }
        },
        buttonPosition: 'LT'
      }],
      markers: [
        {
          position: [114.06798073351291, 22.63000532679801],
          events: {
            click: () => {
              this.$router.push({path: '/single/250'});
            }
          },
          visible: true,
          clickable: true
        },
        {
          position: [114.06798073351291, 22.63000532679801],
          events: {
            click: () => {
              this.$router.push({path: '/single/250'});
            }
          },
          visible: true,
          clickable: true
        }
      ],
      circle: {
        center: [114.06798073351291, 22.63000532679801],
        radius: 6000
      }
    };
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  }
};
</script> -->