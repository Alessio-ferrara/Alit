export { default as CardComponent } from '../../components/CardComponent.vue'
export { default as CarouselComponent } from '../../components/CarouselComponent.vue'
export { default as CustomPage } from '../../components/CustomPage.vue'
export { default as EventsList } from '../../components/EventsList.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GoogleMap } from '../../components/GoogleMap.vue'
export { default as GridCards } from '../../components/GridCards.vue'
export { default as LandscapeCardComponent } from '../../components/LandscapeCardComponent.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as RowGridComponent } from '../../components/RowGridComponent.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
