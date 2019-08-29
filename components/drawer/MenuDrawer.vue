<template lang="pug">
v-navigation-drawer(
  :value="true"
  app
  clipped
  dark
  permanent
  width="230"
  mini-variant-width="68"
  :expand-on-hover="$window.drawer.mini"
)
  v-list(nav dense)
    template(v-for="menu, index in menus")
      v-list-group(
        v-if="menu.children"
        :key="index"
        :prepend-icon="menu.icon"
        :value="false"
        no-action
        color="primary lighten-3"
      )
        template(#prepend-icon="")
          v-list-item-icon.my-0
            v-avatar(size="36")
              v-icon {{ menu.icon }}
        template(#activator="")
          v-list-item-title {{ menu.name }}
        template(#default="")
          v-list-item(v-for="child, i in menu.children" :key="i" link)
            v-list-item-title {{ child.name }}

      v-list-item(
        v-else
        :key="index"
        link
      )
        v-list-item-icon
          v-icon() {{ menu.icon }}
        v-list-item-content
          v-list-item-title {{ menu.name }}

</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({})
export default class extends Vue {
  menus = [
    {
      name: "Dashboard",
      icon: "mdi-home",
      link: "",
    },
    {
      name: "Email",
      icon: "mdi-email",
      link: "",
      children: [
        { name: "Inbox", link: "" },
        { name: "Compose", link: "" },
        { name: "Reply", link: "" },
        { name: "View message", link: "" },
      ],
    },
    {
      name: "Layouts",
      icon: "mdi-view-compact-outline",
      link: "",
    },
    {
      name: "UI elements",
      icon: "mdi-puzzle",
      link: "",
      children: [
        { name: "Colors", link: "" },
        { name: "Typography", link: "" },
        { name: "Cards", link: "" },
        { name: "Buttons", link: "" },
        { name: "Lists", link: "" },
        { name: "Tabs", link: "" },
        { name: "Accordions", link: "" },
        { name: "Messages", link: "" },
        { name: "Off-canvas", link: "" },
        { name: "Grid", link: "" },
        { name: "Icon", link: "" },
      ],
    },
    {
      name: "Tables",
      icon: "mdi-table",
      link: "",
      children: [
        { name: "Static tables", link: "" },
        { name: "Dynamic tables", link: "" },
        { name: "Responsive tables", link: "" },
      ],
    },
    {
      name: "Forms",
      icon: "mdi-file-document-box",
      link: "",
      children: [
        { name: "Form basic", link: "" },
        { name: "Form advanced", link: "" },
        { name: "Form layouts", link: "" },
        { name: "Editors", link: "" },
        { name: "Form validation", link: "" },
        { name: "Form wizard", link: "" },
      ],
    },
  ]
}
</script>

<style lang="stylus" scoped></style>
