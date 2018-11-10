<template>
<v-text-field
  :label="attr.toUpperCase()"
  v-model.number.lazy="value"
  :suffix="modifierDisplay"
/>
</template>

<script>
export default {
  name: 'attr-display',
  props: ['attr'],
  data() {
    return {}
  },
  computed: {
    value: {
      get() {
        return this.$store.state.attr[this.attr][0];
      },
      set(newValue) {
        this.$store.commit({
          type: 'UPDATE_ATTR',
          attr: this.attr,
          value: newValue,
          modifier: Math.floor((newValue - 10) / 2)
        });
      }
    },
    modifier: function () {
      return this.$store.state.attr[this.attr][1];
    },
    modifierDisplay: function () {
      const value = this.modifier;
      const sign = value > 0 ? '+' : '';

      return !isNaN(value) ? `(${sign}${value})` : '';
    }
  },
}
</script>
