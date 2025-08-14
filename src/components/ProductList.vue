<template>
  <!-- 画面全体のレイアウトコンテナ -->
  <v-container>
   
    <!-- 中央揃え -->
    <v-row justify="center">
     
      <!-- 幅を指定したカラム：モバイルで全幅、タブレットサイズ以上で幅6 -->
      <v-col cols="12" md="6" class="text-center">
       
        <!-- タイトル表示 -->
        <h2 class="text-h5 font-weight-bold text-center mb-4">
          商品一覧
        </h2>
  
        <!-- 商品リストを表示する Vuetify のリストコンポーネント -->
        <v-list
          class="text-center d-flex flex-column align-center"
          two-line
          dense
        >
          <!-- 商品データを1件ずつ表示 -->
          <v-list-item
            v-for="item in products"
            :key="item.id"
          >
            <!-- 商品情報を表示するブロック -->
            <v-list-item-content>
             
              <!-- 商品名 -->
              <v-list-item-title>{{ item.id }} : {{ item.name }}</v-list-item-title>
             
              <!-- 価格と数量を表示 -->
              <v-list-item-subtitle>
                {{ item.price }}円 / {{ item.quantity }}本
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
        <v-text-field v-model="form.ID" label="ID"/>
        <v-text-field v-model="form.Name" label="名前"/>
        <v-text-field v-model="form.Quantity" label="個数"/>
        <v-text-field v-model="form.Price" label="値段"/>

        <v-btn class="mr-4" color="#A3D8F6" @click="register">
          登録
        </v-btn>

        <v-btn color="#A3D8F6" to="/purchase" tag="router-link">在庫管理へ</v-btn>

       

       {{ form.ID }}
      </v-col>
    </v-row>
  </v-container>
</template>
 
 
<script>
    export default {
      data() {
        return {
          form:{
            ID:"",
            Name:"",
            Quantity:"",
            Price:""
          }
        }
      },

        computed: {
            // VueXのstateから商品リストを取得
            products() {
                return this.$store.state.product.products; 
            },
        },
 
        methods: {
            // ボタン押下でmutationをcommitする
            addToCart(product) {
                this.$store.commit('product/addToCart', product); 
            },
            async productlist() {
              await this.$store.dispatch('product/fetchData')
              console.log("test")
            },
            async register() {
              this.$store.dispatch('product/insertProduct', this.form)
              console.log(this.form)
              this.form = { ID: '', Name: '', Quantity: '', Price: '' };
            }

        },
        mounted() {
          this.productlist();
        }
    }
</script>

<style>
  
</style>