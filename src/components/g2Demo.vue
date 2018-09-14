/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-08-19 22:10:34
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2018-08-28 18:15:50
 */
<template>
  <div>
    <g2-point :id="'point'" :type="'散点图'"></g2-point>
    <g2-histogram :id="'interval'"></g2-histogram>
    <g2-pie :id="'pie'"></g2-pie>
    <g2-radar :id="'radar'"></g2-radar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: []
    }
  },
  methods: {},
  mounted () {}
}
</script>
