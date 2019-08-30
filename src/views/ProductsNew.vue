<template>
    <div class="products">
        <b-container>
            <b-row>
                <b-col>
                    <h3>New product</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-form>
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
                                    type="text"
                                    required
                                    placeholder="Enter product SKU"
                                    v-model="form.sku"
                            ></b-form-input>
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
                                    type="text"
                                    required
                                    placeholder="Enter product name"
                                    v-model="form.name"
                            ></b-form-input>
                    </b-form-group>
                    <b-form-group
                            id="description"
                            label="Description name:"
                            label-for="description"
                            description=""
                    >
                        <b-form-textarea
                                id="description"
                                type="text"
                                required
                                placeholder="Enter product description"
                                v-model="form.description"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-form-group
                            id="image"
                            label="Image URL:"
                            label-for="image"
                            description=""
                    >
                        <b-form-input
                                id="image"
                                type="text"
                                required
                                placeholder="Enter product image url"
                                v-model="form.image"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-button @click="save" variant="primary">
                            Save
                        </b-button>
                    </b-form-group>
                </b-form>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios'

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
            }
        },
        created: function () {
            var vm = this
            axios.get('http://localhost:3333/products')
                .then(function (response) {
                    vm.products = response.data;
                })
        },
        methods: {
            save:function(){
                //let vm = this;
                axios.post('http://localhost:3333/products')
                    .then(function (response) {
                        console.log(response.data);
                    })
            }
        }
    }
</script>
