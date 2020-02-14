<template>
    <div>
        <p>Products</p>
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
                    <b-button 
                    variant="danger"
                    @click="gerarSku">
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
    </div>
</template>

<script>
    export default {
        name: 'ProductsForm',
        props: ['propForm'],
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
        beforeMount(){
          Object.assign(this.form, this.propForm)
        },
        mount(){
          this.gerarSku();
        },
        methods: {
            save(){
                this.$emit('onSave', this.form);
            },
            gerarSku(){
                const sku = Math.floor((Math.random() * 1000));
                this.form.sku = sku;
                const forms = document.getElementsByTagName('input')
                //forms.map(result => console.log(result))
                console.log(forms)
            },
            productBloqued(){
                const forms = document.getElementsByTagName('input')
                const forms2 = document.getElementsByTagName('textarea')

                const forms3 = {...forms, ...forms2}
                //forms.map(res => console.log(res))
                //forms.setAttribute("disabled", "disabled")
                console.log(forms)
            }
        }
    }
</script>

<style>
    
</style>