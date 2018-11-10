<template>
<v-checkbox
  :label="name"
  v-model="checked">
  <span slot="append">{{ modifierDisplay }}</span>
</v-checkbox>
</template>

<style scoped>
span {
  margin-top: 3px;
  margin-left: 10px;
}
</style>


<script>
export default {
  name: 'skill-display',
  props: ['name', 'attr'],
  data() {
    return {
      checked: this.$store.state.proficientSkills.includes(this.name.toLowerCase()),
    };
  },
  computed: {
    modifier: function () {
      const attr = this.$store.state.attr[this.attr];
      return attr && attr[1];
    },
    modifierDisplay: function () {
      const modifier = this.modifier;
      if (isNaN(modifier)) {
        return '';
      }

      const sign = modifier >= 0 ? '+' : '';
      const bonus = this.$store.state.profBonus || 2;
      const total = modifier + (this.checked ? bonus : 0);

      return sign + total;
    }
  },
  watch: {
    checked: function (isChecked) {
      this.$store.commit({
        type: (isChecked ? 'ADD_PROF_SKILL' : 'REMOVE_PROF_SKILL'),
        skill: this.name,
      })
    }
  }
}
</script>
