<template>
  <v-app>
    <v-app-bar
      app
      color="#A3D8F6"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVRet7wPwk9xAjNmdufs2JzVETBp66GAuxgSv6s1W0YhP_-h-vpugY-P5qGE3zKVKfm9jYy_4Eh8x012orm6tsCGxvc1Q5CBwAZgeL0HNaXlrnyK5AfDaDGiyrHEP1pgrM7Pwqpd4Ukpk/s800/drink_petbottle_tsumetai.png"
          transition="scale-transition"
          width="40"
        />
        <!--
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        -->
      </div>

      <v-spacer></v-spacer>
                <v-btn text to="/" tag="router-link">Home</v-btn>
      <v-btn text to="/purchase" tag="router-link">在庫</v-btn> <!-- 購入ビューを追加 -->
      <!--不要
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

