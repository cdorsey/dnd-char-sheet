<template>
  <v-layout row wrap>
    <v-flex
      v-for="attr in attrs" :key="attr"
      xs6 md4 lg2 class="mb-5"
    >
      <attr-display
        xs6 md4 lg2 class="px-2"
        :attr="attr"
      />
    </v-flex>
    <v-flex xs6 md5 offset-md1
      v-for="skill in skills" :key="skill[0]"
    >
      <skill-display
        :name="skill[0]"
        :attr="skill[1]"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import AttrDisplay from '../components/_AttrDisplay.vue'
import SkillDisplay from '../components/_SkillDisplay.vue'

export default {
  components: {
    AttrDisplay,
    SkillDisplay,
  },
  data() {
    return {
      attrs: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
      skills: [
        ['Acrobatics', 'dex'],
        ['Animal Handling', 'wis'],
        ['Arcana', 'int'],
        ['Athletics', 'str'],
        ['Deception', 'cha'],
        ['History', 'int'],
        ['Insight', 'wis'],
        ['Intimidation', 'cha'],
        ['Investication', 'int'],
        ['Medicine', 'wis'],
        ['Nature', 'int'],
        ['Perception', 'wis'],
        ['Performance', 'cha'],
        ['Persuassion', 'cha'],
        ['Religion', 'int'],
        ['Sleight of Hand', 'dex'],
        ['Stealth', 'dex'],
        ['Survival', 'wis'],
      ]
    }
  }
}
</script>
