<template lang="pug">
v-navigation-drawer(
  :value="true"
  app
  clipped
  dark
  permanent
  width="200"
  mini-variant-width="68"
  :expand-on-hover="$window.drawer.mini"
)
  v-list(dense nav)
    v-list-item(link)
      v-list-item-icon
        v-avatar(size="36" color="white")
          v-icon(color="primary") mdi-home
      v-list-item-content
        v-list-item-title Dashboard

    v-list-item(link)
      v-list-item-icon
        v-avatar(size="36")
          v-icon mdi-menu
      v-list-item-content
        v-list-item-title fuga
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({})
export default class extends Vue {}
</script>

<style lang="stylus" scoped></style>
