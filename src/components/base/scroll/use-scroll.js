import BScroll from '@better-scroll/core'

import { onMounted, ref, onUnmounted } from 'vue'

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
