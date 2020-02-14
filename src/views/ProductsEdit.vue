<template>
  <div class="products">
    <b-container>
      <b-row>
        <b-col>
          <h3>Edit product</h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="4">
          <products-form :prop-form="form" @onSave="editProduct"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import { productsShow, productsEdit } from "../services/products";

    import ProductsForm from '../components/ProductsForm'

    export default {
        name: "ProductsEdit",
        components: {
          ProductsForm
        },
        data(){
            return {
                form:{}
            };
        },
        beforeMount() {
            this.loadProduct();
        },
        methods:{
            loadProduct(){
              this.form = productsShow(this.$route.params.id);
            },
            editProduct(form){
                productsEdit(this.$route.params.id, form);
                this.$router.push({name:'products'});
            }
        }
    };
</script>
