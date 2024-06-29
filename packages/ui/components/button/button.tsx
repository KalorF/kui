import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import { componentName } from '@utils/componentsUtils'
import classNames from '@utils/classname'
import style from './button.module.scss'

export type BtnType = {
  type: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info'
  size: 'large' | 'default' | 'small' | 'tiny'
  disabled: boolean
  class: string
  style: string
}

const BtnProps = {
  type: {
    type: String as PropType<BtnType['type']>,
    default: 'primary'
  },
  size: {
    type: String as PropType<BtnType['size']>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => {
      return {}
    }
  }
}

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: componentName('button'),
  props: { ...BtnProps },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const className = computed(() => {
      const size = props.size
      const type = props.type
      return (
        classNames({
          [style['btn-base']]: true,
          [style[`btn-base_${size}`]]: true,
          [style[`btn-base_${type}`]]: true,
          [style[`btn-base_${type}_disabled`]]: props.disabled
        }) + (props.class ? ` ${props.class}` : '')
      )
    })
    return () => (
      <>
        <button
          style={props.style}
          onClick={() => emit('click')}
          disabled={props.disabled}
          class={className.value}
        >
          {slots.default?.()}
        </button>
      </>
    )
  }
})
