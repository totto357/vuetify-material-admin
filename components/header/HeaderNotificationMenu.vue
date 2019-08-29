<template lang="pug">
v-menu(bottom left)
  template(#activator="{ on }")
    v-btn(icon v-on="on")
      v-badge(
        :value="hasNotifications"
        right
        overlap
        color="error"
      )
        template(#badge="")
          span {{ notifications.length }}
        v-icon mdi-bell

  v-card(flat)
    v-list.pb-0
      v-subheader Today's messages
      notification-message(v-for="notification, index in notifications" :key="index" :notification="notification")

    v-list
      v-subheader Options
      v-list-item(link dense)
        v-list-item-content
          v-list-item-title View all messages
        v-list-item-action
          v-icon mdi-arrow-right
      v-list-item(link dense)
        v-list-item-content
          v-list-item-title Mark as read
        v-list-item-action
          v-icon mdi-arrow-right

</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

import NotificationMessage, { Notification } from "./HeaderNotificationMessage.vue"

@Component({
  components: {
    NotificationMessage,
  }
})
export default class extends Vue {
  notifications: Notification[] = [
    {
      color: "warning",
      message: "Testing functionality...",
      user: {
        name: "Alex Anistor",
        color: "warning",
      }
    },
    {
      color: "primary",
      message: "Reviewing last changes...",
      user: {
        name: "Alicia Adell",
        color: "primary",
      }
    },
  ]

  get hasNotifications() {
    return this.notifications.length > 0
  }
}
</script>
