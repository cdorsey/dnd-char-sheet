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
    <v-dialog light v-model="expDialog">
      <v-card>
        <v-layout column wrap>
          <v-flex>
            <v-btn color="info" @click="adjustdExp(10)">+10</v-btn>
            <v-btn color="info" @click="adjustdExp(100)">+100</v-btn>
            <v-btn color="info" @click="adjustdExp(1000)">+1000</v-btn>
          </v-flex>
          <v-flex>
            <v-text-field
              readonly
              full-width
              class="text-xs-center display-3"
              :value="dExpDisplay"
            />
          </v-flex>
          <v-flex>
            <v-btn color="info" @click="adjustdExp(-10)">-10</v-btn>
            <v-btn color="info" @click="adjustdExp(-100)">-100</v-btn>
            <v-btn color="info" @click="adjustdExp(-1000)">-1000</v-btn>
          </v-flex>
          <v-flex class="my-2"/>
          <v-flex class="px-2">
            <v-btn block color="success" @click="updateExp()">Save</v-btn>
            <v-btn block color="error" @click="closeExpDialog()">Cancel</v-btn>
          </v-flex>
          <v-flex>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
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

const mapToStore = bindMapToStore(this);

export default {
  data() {
    return {
      expDialog: false,
      dExp: 0,
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
    dExpDisplay: function () {
      const modifier = this.dExp >= 0 ? '+' : ''

      return modifier + this.dExp;
    },
  },
  methods: {
    openExpModal: function () {
      this.expDialog = true;
    },
    adjustdExp: function (n) {
      this.dExp += n;
    },
    updateExp: function () {
      this.$store.commit({
        type: 'UPDATE_EXP',
        amount: this.dExp,
      });

      this.closeExpDialog();
    },
    closeExpDialog: function() {
      this.expDialog = false;
    },
  },
}
</script>
