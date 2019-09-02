<template>
    <div class="products">
        <b-container>
            <b-row class="mt-4 mb-4">
                <b-col>
                    <b-button variant="success" to="/products/new">New product</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h3>Products list</h3>
                </b-col>
            </b-row>
            <b-row>
                <div b-col class="p-1" v-for="product in products">
                    <b-card
                            :img-src="product.image"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                        <b-card-title>
                            {{ product.name }}
                        </b-card-title>
                        <b-card-text>
                            {{ product.description }}
                        </b-card-text>

                        <b-button v-bind:to="{path:'products/'+product.id}" variant="primary">Product view</b-button>
                    </b-card>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'products',
        data:function(){
            return {
                products: {},
                teste: 'hahahaha'
            }
        },
        created: function () {
            var vm = this
            axios.get('http://localhost:3333/products')
                .then(function (response) {
                    vm.products = response.data;
                });
        }
    }
</script>
