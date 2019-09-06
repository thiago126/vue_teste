<template>
  <div class="products">
    <b-container>
      <b-row>
        <b-col>
          <h3>New product</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-form @submit.prevent="editProduct">
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
                  v-validate="'required|min:4'"
                  type="text"
                  required
                  placeholder="Enter product SKU"
                  name="sku"
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
              v-validate="'required'"
              type="text"
              required
              name="name"
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
              v-validate="'required'"
              type="text"
              required
              name="description"
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
    import { productsShow, productsEdit } from "../services/products";

    export default {
        name: "ProductsEdit",
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
                productsShow(this.$route.params.id).then(response => {
                    this.form = response.data;
                });
            },
            editProduct(){
                productsEdit(this.$route.params.id, this.form).then(response => {
                    this.$router.push({name:'products'});
                }).catch(error => {
                    console.log('Erro', error);
                });
            }
        }
    };
</script>

<style scoped>

</style>
