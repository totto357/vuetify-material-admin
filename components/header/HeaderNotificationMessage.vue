<template lang="pug">
.ma-2
  v-card(tile outlined)
    v-list-item(two-line dense link)
      v-sheet(
        tile
        :color="notification.color"
        width="4px"
        height="100%"
        style="position: absolute; left: -1px;"
      )
      v-list-item-content
        v-list-item-title {{ notification.user.name }}
        v-list-item-subtitle {{ notification.message }}
      v-list-item-avatar.my-0(:color="notification.user.color")
        span.white--text {{ notification.user.name.charAt(0) }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

export interface Notification {
  color: string,
  message: string,
  user: {
    name: string,
    avatar?: string,
    color: string,
  }
}

@Component({})
export default class extends Vue {

  @Prop({ required: true })
  notification: Notification;

}
</script>
