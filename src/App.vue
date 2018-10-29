<template>
  <v-app :dark="!localAppTheme">
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="item in navigation"
          :key="item.display"
          :to="item.route"
          >
          <v-list-tile-content>{{ item.display }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="primary">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>D&D 5e Character Sheet</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-switch class="float-right" v-model="localAppTheme">
          <v-icon slot="label">mdi-theme-light-dark</v-icon>
        </v-switch>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
</style>


<script>
export default {
  data() {
    return {
      drawer: null,
      localAppTheme: this.appTheme,
      navigation: [
        {
          display: 'Basic',
          route: '/basic'
        }
      ]
    }
  },
  computed: {
    appTheme: {
      get() {
        return this.$store.state.appTheme;
      },
      set(value) {
        this.$store.commit({
          type: 'SET_THEME',
          appTheme: value,
        });
      }
    }
  },
  methods: {
    toggleDrawer: function() {
      this.drawer = !this.drawer;
    },
    isDark: function () {
      return this.appTheme;
    }
  },
  watch: {
    localAppTheme: function(value) {
      // Yes, this is stupid. But for some reason the computed value isn't being updated and passed to v-app, so
      // here we are.
      this.appTheme = value;
    },
  },
  beforeCreate() {
    this.$store.commit('INITIALIZE_STATE');
  },

}
</script>
