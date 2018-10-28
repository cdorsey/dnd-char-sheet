<template>
  <v-app>
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
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      drawer: null,
      navigation: [
        {
          display: 'Basic',
          route: '/basic'
        }
      ]
    }
  },
  methods: {
    toggleDrawer: function() {
      this.drawer = !this.drawer;
    }
  }
}
</script>
