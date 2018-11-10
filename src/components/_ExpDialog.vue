<template>
    <v-dialog persistent :value="this.dialogValue" max-width="500px" :return-value="this.dialogValue">
      <v-card>
        <v-layout column wrap>
          <v-flex class="btn-container">
            <v-btn v-for="i in [1, 2, 3]" :key="i"
              color="info" class="grow" @click="adjustdExp(Math.pow(-10, i))">{{ Math.pow(10, i) }}</v-btn>
          </v-flex>
          <v-flex>
            <v-text-field
              readonly
              full-width
              class="text-xs-center display-3"
              :value="dExpDisplay"
            />
          </v-flex>
          <v-flex class="btn-container">
            <v-btn v-for="i in [1, 2, 3]" :key="i"
              color="info" class="grow" @click="adjustdExp(Math.pow(-10, i))">{{ -Math.pow(10, i) }}</v-btn>
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

.btn-container {
  display: flex;
}

.grow {
  flex-grow: 1;
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
