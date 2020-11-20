import { shallowMount } from '@vue/test-utils'
import Eg from '../../src/Eg'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Eg, {
      props: { msg }
    }).vm.


    expect(wrapper.text()).toMatch(msg)
  })
})
