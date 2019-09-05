<template>
  <div class="products">
    <b-container>
      <b-row class="mt-4 mb-4">
        <b-col>
          <b-button
            variant="success"
            :to="{name: 'ProductsNew'}"
          >
            New product
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>Products list</h3>
        </b-col>
      </b-row>
      <b-row>
        <div
          v-for="product in products"
          :key="product.id"
          b-col
          class="p-1"
        >
          <b-card
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
          >
            <b-card-title>
              {{ product.name }}
            </b-card-title>
            <b-card-text>
              {{ product.description }}
            </b-card-text>
            <b-card-body>
              <b-row>
                <b-col>
                  <b-button
                          :to="{path:'products/'+product.id}"
                          variant="primary"
                  >
                    View
                  </b-button>
                </b-col>
                <b-col>
                  <b-button
                          :to="{name:'ProductsEdit',params:{id:product.id}}"
                          variant="warning"
                  >
                    Edit
                  </b-button>
                </b-col>
                <b-col>
                  <b-button
                          variant="danger"
                  >
                    Delete
                  </b-button>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import { productsIndex } from "../services/products";

    export default {
        name: 'Products',
        data:function(){
            return {
                products: {}
            };
        },
        created: function () {
            var vm = this;
            productsIndex('/products')
                    .then(function (response) {
                        vm.products = response.data;
                    });
        }
    };
</script>
