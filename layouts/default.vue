<template lang="pug">
v-app#app
  menu-drawer
  vm-header

  v-content
    v-container.pa-0(fluid)
      nuxt
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import MenuDrawer from "~/components/drawer/MenuDrawer.vue"
import VmHeader from "@/components/header/Header.vue"

@Component({
  components: {
    MenuDrawer,
    VmHeader,
  }
})
export default class extends Vue {}
</script>

<style lang="stylus" scoped>
#header
  border-bottom: 1px solid #ddd;

</style>

