<template lang="html">
  <div>
    <b-form-group label="Label" invalid-feedback="Name is required">
      <b-input-group>
        <b-form-input v-model="field.label" @input="input" required>
        </b-form-input>
        <b-form-input
          required
          v-model="field.name"
          :readonly="readonly"
          @dblclick="toogleReadOnly"
        >
        </b-form-input>
      </b-input-group>
    </b-form-group>
    <b-row>
      <b-col sm="6">
        <b-form-group
          label="Cacher le label"
          label-cols="6"
          label-cols-md="6"
          label-cols-sm="3"
        >
          <b-form-checkbox
            size="lg"
            v-model="field.label_hidden"
          ></b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          label="Afficher le champs dans les resultats"
          label-cols="6"
          label-cols-md="6"
          label-cols-sm="3"
        >
          <b-form-checkbox
            size="lg"
            v-model="field.display_field"
          ></b-form-checkbox>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { snakeCase } from "snake-case";
export default {
  name: "compositeHeaderField",
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {
    //
  },
  data() {
    return {
      readonly: true,
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    input() {
      if (
        this.readonly &&
        (this.field.label.length <= 32 || this.field.name.length <= 32)
      ) {
        this.field.name = snakeCase(this.field.label);
      }
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
