<template>
 <component
  :is="store.currentComponent"
  @select-feedback-type="handleSelectFeedbackType"
  @next="next"
 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useStore from '../../hooks/store'
import useNavigation, { Navigation } from '../../hooks/navigation'
import { StoreState, SetFeedbackType } from '../../store'

interface SetupReturn {
    store: StoreState;
    next: Navigation['next'];
    handleSelectFeedbackType(type: string): void;
}

export default defineComponent({
  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()
    function handleSelectFeedbackType (type: string): void {
      SetFeedbackType(type)
    }
    return {
      store,
      next,
      handleSelectFeedbackType

    }
  }
})
</script>
