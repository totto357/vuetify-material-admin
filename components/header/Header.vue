<template lang="pug">
v-app-bar(app fixed clipped-left height="64px")
  v-toolbar-title.primary--text Vuetify Material Admin
  v-app-bar-nav-icon.ml-3(@click="$window.drawer.toggle()")

  v-spacer

  //- template(v-if="$vuetify.breakpoint.mdAndUp")
  template

    search.ml-2
    notification-menu.ml-2
    server-load-menu.ml-2
    profile-menu

    v-btn(icon)
      v-icon mdi-dots-vertical
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import Search from "./HeaderSearch.vue"
import NotificationMenu from "./HeaderNotificationMenu.vue"
import ServerLoadMenu from "./HeaderServerLoadMenu.vue"
import ProfileMenu from "./HeaderProfileMenu.vue"

@Component({
  components: {
    Search,
    NotificationMenu,
    ServerLoadMenu,
    ProfileMenu,
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>
