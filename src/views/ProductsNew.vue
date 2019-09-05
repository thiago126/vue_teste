<template>
  <div class="products">
    <b-container>
      <b-row>
        <b-col>
          <h3>New product</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-form @submit.prevent="save">
          <b-form-group
            id="sku"
            label="Product SKU:"
            label-for="sku"
            description=""
          >
            <b-row>
              <b-col class="col-9">
                <b-form-input
                  id="sku"
                  v-model="form.sku"
                  type="text"
                  required
                  placeholder="Enter product SKU"
                  name="sku"
                  v-validate="'required|min:4'"
                />
              </b-col>

              <b-col class="col-3">
                <b-button variant="danger">
                  123
                </b-button>
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group
            id="name"
            label="Product name:"
            label-for="name"
            description=""
          >
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              required
              name="name"
              v-validate="'required'"
              placeholder="Enter product name"
            />
          </b-form-group>
          <b-form-group
            id="description"
            label="Description name:"
            label-for="description"
            description=""
          >
            <b-form-textarea
              id="description"
              v-model="form.description"
              type="text"
              required
              name="description"
              v-validate="'required'"
              placeholder="Enter product description"
            />
          </b-form-group>
          <b-form-group
            id="image"
            label="Image URL:"
            label-for="image"
            description=""
          >
            <b-form-input
              id="image"
              v-model="form.image"
              type="text"
              required
              placeholder="Enter product image url"
            />
          </b-form-group>
          <b-form-group>
            <b-button
              variant="primary"
              type="submit"
            >
              Save
            </b-button>
          </b-form-group>
        </b-form>
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
                    name:'',
                    description:'',
                    sku:'',
                    image:''
                }
            };
        },
        created: function () {
            var vm = this;
            axios.get('http://localhost:3333/products')
                .then(function (response) {
                    vm.products = response.data;
                });
        },
        methods: {
            save:function(){
                //teste git
                //let vm = this;
                /*axios.post('http://localhost:3333/products')
                    .then(function (response) {
                        console.log(response.data);
                    });*/
                this.$validator.validate().then(resp => {
                  if(resp){
                    productsStore(this.form).then(response => {
                      console.log(response);
                      this.$router.push({name:'products'});
                    });
                  }
                });
            }
        }
    };
</script>
