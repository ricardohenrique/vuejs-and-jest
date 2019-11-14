<template>
  <div>
      <span>{{ message }}</span>
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <b>{{ product.id }}</b> : {{ product.name }}
        </li>
      </ul>
  </div>
</template>

<script>
  import ProductsService from '../../services/Products.service.js';
  export default {
    name: 'Products',
    data () {
      return {
        message: 'PRODUCTS!',
        products: ProductsService.getProducts(),    
      }
    },
    created () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>