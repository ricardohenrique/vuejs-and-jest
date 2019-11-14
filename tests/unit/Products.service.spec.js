// Import Vue and the component being tested
import Vue from 'vue'
import ProductsService from '../../src/services/Products.service.js'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('ProductsService', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('Assert return get product', () => {
    expect(typeof ProductsService.getProduct(1)).toBe('object')
  })

  it('Assert return get product', () => {
    expect(typeof ProductsService.getProductByName('Product 1')).toBe('object')
  })

  it('Assert return get products', () => {
    expect(typeof ProductsService.getProducts()).toBe('object')
  })

})