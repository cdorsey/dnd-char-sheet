<template>
    <v-dialog :value="this.dialogValue">
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
            <v-btn block color="error" @click="close()">Cancel</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
</template>

<style scoped>
input {
  max-height: none;
  text-align: inherit;
}
</style>


<script>
export default {
  name: 'exp-dialog',
  props: ['dialog-value'],
  data() {
    return {
      dExp: 0,
    }
  },
  methods: {
    adjustdExp: function (n) {
      this.dExp += n;
    },
    updateExp: function () {
      this.$store.commit({
        type: 'UPDATE_EXP',
        amount: this.dExp,
      });

      this.close();
    },
    close: function() {
      this.$emit('close-exp-dialog');

      this.dExp = 0;
    },
  },
  computed: {
    dExpDisplay: function () {
      const modifier = this.dExp >= 0 ? '+' : ''

      return modifier + this.dExp;
    },
  },
}
</script>
