<template lang="pug">
v-app#app
  vm-drawer
  vm-header

  v-content
    v-container.pa-0(fluid)
      nuxt
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import VmDrawer from "~/components/drawer/Drawer.vue"
import VmHeader from "@/components/header/Header.vue"

@Component({
  components: {
    VmDrawer,
    VmHeader,
  }
})
export default class extends Vue {}
</script>

<style lang="stylus" scoped>
#header
  border-bottom: 1px solid #ddd;

</style>

