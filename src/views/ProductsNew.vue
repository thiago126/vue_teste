<template>
  <div class="products">
    <b-container>
      <b-row>
        <b-col>
          <h3>New product</h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="4">
          <products-form @onSave="save"/>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    //teste 5
    import axios from 'axios';
    import { productsStore } from "../services/products";

    import ProductsForm from '../components/ProductsForm';

    export default {
        name: 'ProductsNew',
        components: {
          ProductsForm
        },
        mounted(){
          console.log(this.form);
        },
        methods: {
          save(form){
                productsStore(form);
                this.$router.push({name:'products'});
            }
        }
    };
</script>
