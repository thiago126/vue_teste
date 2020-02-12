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
          <b-form @submit.prevent="save">
            <b-form-group
              id="sku"
              label="Product SKU:"
              label-for="sku"
              description="">
              <b-container>
                <b-row>
                  <b-col
                    cols="10"
                    class="p-0">
                    <b-form-input
                      id="sku"
                      v-model="form.sku"
                      type="text"
                      required
                      placeholder="Enter product SKU"
                      name="sku" />
                  </b-col>

                  <b-col
                    cols="2"
                    class="p-0">
                    <b-button variant="danger">
                      123
                    </b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>
            <b-form-group
              id="name"
              label="Product name:"
              label-for="name"
              description="">
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                required
                name="name"
                placeholder="Enter product name" />
            </b-form-group>
            <b-form-group
              id="description"
              label="Description name:"
              label-for="description"
              description="">
              <b-form-textarea
                id="description"
                v-model="form.description"
                type="text"
                required
                name="description"
                placeholder="Enter product description" />
            </b-form-group>
            <b-form-group
              id="image"
              label="Image URL:"
              label-for="image"
              description="">
              <b-form-input
                id="image"
                v-model="form.image"
                type="text"
                required
                placeholder="Enter product image url" />
            </b-form-group>
            <b-form-group>
              <b-button
                variant="primary"
                type="submit">
                Save
              </b-button>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    //teste 5
    import axios from 'axios';
    import { productsStore } from "../services/products";

    export default {
        name: 'ProductsNew',
        data:function(){
            return {
                form: {
                    id: Math.floor((Math.random() * 10000)),
                    name:'',
                    description:'',
                    sku:'',
                    image:'https://i0.wp.com/claudianosilva.com.br/wp-content/uploads/2017/11/Helbor-Wide-S%C3%A3o-Paulo.jpg?resize=818%2C417&ssl=1'
                }
            };
        },
        methods: {
            save:function(){
                productsStore(this.form);
                this.$router.push({name:'products'});
            }
        }
    };
</script>
