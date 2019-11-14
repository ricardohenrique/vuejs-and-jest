// Import Vue and the component being tested
import Vue from 'vue'
import Products from '@/components/Products/Products.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Products', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Products.data).toBe('function')
    const defaultData = Products.data()
    expect(defaultData.message).toBe('PRODUCTS!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(Products).$mount()
    expect(vm.message).toBe('PRODUCTS!')
  })

})