<template lang="pug">
v-menu(offset-y bottom)

  //- Activator
  template(#activator="{ on }")
    v-list.py-0(two-line color="transparent" dense)
      v-list-item(v-on="on")
        v-list-item-avatar.my-0(:color="profile.color")
          span.white--text {{ profile.name.charAt(0) }}
        v-list-item-content
          v-list-item-title {{ profile.name }}
          v-list-item-subtitle {{ profile.role }}
        v-list-item-action
          v-icon mdi-chevron-down

  //- Default
  template(#default="")
    v-list
      v-subheader Config
      v-list-item(link dense)
        v-list-item-content
          v-list-item-title My profile
      v-list-item(link dense)
        v-list-item-content
          v-list-item-title My blog
        v-list-item-action.my-0
          v-chip(small color="error") 16
      v-list-item(link dense)
        v-list-item-content
          v-list-item-title My appointments

      v-divider.my-2

      v-list-item(link dense)
        v-list-item-action.my-0
          v-icon mdi-lock
        v-list-item-content
          v-list-item-title Lock
      v-list-item(link dense)
        v-list-item-action.my-0
          v-icon(color="error") mdi-power
        v-list-item-content
          v-list-item-title Logout
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

export interface UserProfile {
  name: string,
  avatar?: string,
  color?: string,
  role: string,
}

@Component({})
export default class extends Vue {
  profile: UserProfile = {
    name: "Hosozawn",
    color: "primary",
    role: "Administator",
  }

}
</script>

<style lang="stylus" scoped></style>
