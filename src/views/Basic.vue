<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        label="Character Name"
        v-model.lazy="name"
      />
    </v-flex>
    <v-flex xs10>
      <v-text-field
        label="Class"
        v-model.lazy="className"
      />
    </v-flex>
    <v-flex xs2>
      <v-text-field
        readonly
        label="Level"
        v-model.number.lazy="level"
      />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="Background"
        v-model.lazy="background"
      />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="Race"
        v-model.lazy="race"
      />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="Alignment"
        v-model.lazy="alignment"
      />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        readonly
        label="Experience"
        :value="experience"
        @focus="openExpModal()"
      />
    </v-flex>
    <exp-dialog
      @close-exp-dialog="closeExpModal()"
      :dialog-value="expDialog"
    />
  </v-layout>
</template>

<style>
.v-dialog input {
  max-height: none !important;
  text-align: inherit;
}
</style>


<script>
import bindMapToStore from '../mapToStore'
import ExpDialog from '../components/_ExpDialog.vue'

const mapToStore = bindMapToStore(this);

export default {
  components: {
    ExpDialog,
  },
  data() {
    return {
      expDialog: false,
    }
  },
  computed: { ...mapToStore([
      {
        propName: 'name',
        storeProp: 'name',
        mutation: 'CHANGE_NAME',
      },
      {
        propName: 'className',
        storeProp: 'characterClass',
        mutation: 'CHANGE_CLASS'
      },
      {
        propName: 'background',
        storeProp: 'background',
        mutation: 'CHANGE_BACKGROUND',
      },
      {
        propName: 'race',
        storeProp: 'race',
        mutation: 'CHANGE_RACE',
      },
      {
        propName: 'alignment',
        storeProp: 'alignment',
        mutation: 'CHANGE_ALIGNMENT',
      },
    ]),
    experience: function () {
      return this.$store.state.experience;
    },
    level: function () {
      return this.$store.state.level;
    },
  },
  methods: {
    openExpModal: function () {
      this.expDialog = true;
    },
    closeExpModal: function() {
      this.expDialog = false;
    }
  },
}
</script>
