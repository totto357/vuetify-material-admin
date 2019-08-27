<template lang="pug">
v-app-bar(app fixed clipped-left height="64px")
  v-toolbar-title.primary--text Vuetify Material Admin
  v-app-bar-nav-icon.ml-3(@click="$window.drawer.toggle()")

  v-spacer

  template(v-if="$vuetify.breakpoint.mdAndUp")

    search.ml-2
    notification.ml-2

    v-btn.ml-2(icon)
      v-icon mdi-chart-line

    v-menu(offset-y bottom)
      template(#activator="{ on: menu }")
        v-list.py-0(two-line color="transparent" dense)
          v-list-item(v-on="menu")
            v-list-item-avatar.my-0(color="primary")
              span.white--text t
            v-list-item-content
              v-list-item-title totto357
              v-list-item-subtitle Administrator
            v-list-item-action
              v-icon mdi-chevron-down

      v-list(nav dense)
        v-list-item(link)
          v-list-item-content
            v-list-item-title hoge

    v-btn(icon)
      v-icon mdi-dots-vertical
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import Search from "./HeaderSearch.vue"
import Notification from "./HeaderNotification.vue"

@Component({
  components: {
    Search,
    Notification,
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
