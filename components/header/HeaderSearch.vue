<template lang="pug">
.d-flex.justify-end
  transition(name="fade")
    v-text-field(
      v-show="isActive"
      v-model="query"
      ref="search"
      style="flex: 0 1 250px"
      solo
      clearable
      hide-details
      height="32px"
      placeholder="Enter your keyword"
      @keyup.enter="enter"
    )

  v-btn.ml-2(icon @click="toggle")
    v-icon mdi-magnify
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({})
export default class extends Vue {
  isActive = false
  query = ""

  toggle() {
    this.isActive = !this.isActive
    this.$nextTick(() => {
      (this.$refs.search as HTMLElement).focus()
    })
  }

  enter() {
    this.isActive = false
    this.query = ""
  }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition: all .1s

.fade-enter, .fade-leave-to
  flex-basis: 0px !important
</style>
