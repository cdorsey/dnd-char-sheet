function mapToStore(mappings) {
  return mappings.reduce((obj, mapping) => {
    obj[mapping.propName] = {
      get() {
        return this.$store.state[mapping.storeProp];
      },
      set(value) {
        const mutation = {};
        mutation.type = mapping.mutation;
        mutation[mapping.storeProp] = value;

        this.$store.commit(mutation);
      },
    };

    return obj;
  }, {});
}

export default function (that) {
  return mapToStore.bind(that);
}
