<template>
  <Playground />
  <Widget />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Playground from './Playground/index.vue'
import Widget from './Widget/index.vue'

export default defineComponent({
  components: {
    Playground,
    Widget
  }
})
</script>
