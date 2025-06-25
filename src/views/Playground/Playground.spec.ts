import { shallowMount, VueWrapper } from '@vue/test-utils'
import Playground from './index.vue'

describe('<Playground />', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(Playground)
  })

  it('should render component correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should display welcome message', () => {
    expect(wrapper.text()).toContain('Bem-vindo ao Playground 🚀')
  })

  it('should render the Widget component', () => {
    const widget = wrapper.findComponent({ name: 'Widget' })
    expect(widget.exists()).toBe(true)
  })

  it('should display the current year', () => {
    const year = new Date().getFullYear()
    expect(wrapper.text()).toContain(`Widget © ${year}`)
  })
})
