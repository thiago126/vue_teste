<template>
  <div class="products">
    <b-container>
      <b-row class="mt-4 mb-4">
        <b-col>
          <b-button
            variant="success"
            :to="{name: 'ProductsNew'}">
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
          class="p-1">
          <b-card
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;">
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
                    variant="primary">
                    View
                  </b-button>
                </b-col>
                <b-col>
                  <b-button
                    :to="{name:'ProductsEdit',params:{id:product.id}}"
                    variant="warning">
                    Edit
                  </b-button>
                </b-col>
                <b-col>
                  <b-button
                    variant="danger"
                    @click="productDelete(product)">
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
    import { productsIndex, productsDelete } from "../services/products";

    export default {
        name: 'Products',
        data:function(){
            return {
                products: {}
            };
        },
        beforeMount: function () {
          this.init();
        },
      methods:{
          init(){
            productsIndex('/products')
                    .then(response => {
                      this.products = response.data;
                    });
          },
          productDelete(product){
              Swal.fire({
                  title: 'Atenção!',
                  text: 'Deseja realmente apagar esse produto?',
                  type: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  cancelButtonText: 'Não',
                  confirmButtonText: 'Sim',
                }).then(response => {
                    if(response.value){
                      productsDelete(product.id).then(response => {
                        this.products.splice(this.products.indexOf(product), 1);
                        Swal.fire({
                          title: 'Sucesso!',
                          text: 'Produto deletado com sucesso!',
                          type: 'Success'
                        });
                      });
                    }
              });
          },
      }
    };
</script>
