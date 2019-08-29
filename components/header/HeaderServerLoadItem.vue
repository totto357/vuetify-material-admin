<template lang="pug">
v-list-item.px-0(link two-line dense)
  v-list-item-content
    v-list-item-title.px-3.font-weight-regular
      v-row(no-gutters justify="space-between")
        .d-flex
          span Server Load
          span.font-weight-bold.ml-1 {{ value.date }}
        .d-flex
          span.font-weight-bold {{ value.value }}%
    v-list-item-subtitle.px-1.mt-1
      v-progress-linear(
        height="4"
        rounded
        background-opacity=".2"
        :color="value.color"
        :value="value.value"
      )
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

export interface ServerLoad {
  date: string,
  value: number,
  color: string,
}

@Component({ })
export default class extends Vue {

  @Prop({ required: true })
  value: ServerLoad

}
</script>
