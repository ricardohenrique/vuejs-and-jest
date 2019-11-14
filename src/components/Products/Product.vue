<template>
  <div>
      <h2>{{ getProduct() }}</h2>
      <h3>{{ product }}</h3>
  </div>
</template>

<script>
  import ProductsService from '../../services/Products.service.js';

  export default {
    name: 'Product',
    data () {
      return {
        product: ProductsService.getProduct(this.$route.params.id)
      }
    },
    created () {
    },
    computed: {
    },
    methods: {
      getProduct(){
        return ProductsService.getProduct(this.$route.params.id)
      }
    }
  }
</script>