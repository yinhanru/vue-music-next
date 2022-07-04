<template>
  <div class="recommend">
    <slider-page v-if="sliders.length" :sliders = sliders></slider-page>
  </div>
</template>
<script>
import { getRecommend } from '@/service/recommend'
import SliderPage from '@/components/base/slider/slider.vue'

export default {
  name: 'recommendTab',
  components: {
    SliderPage
  },
  data() {
    return {
      sliders: []
    }
  },
  async created() {
    const result = await getRecommend()
    console.log(result)
    this.sliders = result.sliders
  }
}
</script>
<style lang="scss" scoped>
</style>
