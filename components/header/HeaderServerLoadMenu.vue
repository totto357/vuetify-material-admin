<template lang="pug">
v-menu(bottom left)
  template(#activator="{ on }")
    v-btn(icon v-on="on")
      v-icon mdi-chart-line

  v-card(flat width="300px")
    v-list
      v-subheader Server Load
      server-load-item(
        v-for="serverLoad, index in serverLoads"
        :key="index"
        :value="serverLoad"
      )
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import ServerLoadItem, { ServerLoad } from "./HeaderServerLoadItem.vue"

@Component({
  components: {
    ServerLoadItem,
  }
})
export default class extends Vue {
  serverLoads: ServerLoad[] = [
    {
      date: "Today",
      value: 93,
      color: "error",
    },
    {
      date: "Yesterday",
      value: 30,
      color: "success",
    },
    {
      date: "Lastweek",
      value: 74,
      color: "warning",
    },
  ]
}
</script>
