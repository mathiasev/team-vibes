<template>
  <div id="vibe-picker">
    <form @submit.prevent="submitForm">
      <label for="comments">Comments</label>
      <input
        type="text"
        name="vibe"
        v-model="vibe.comments"
        id="comments"
        placeholder="Comments"
      />
      <div id="vibes">
        <label for="-20">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="-20"
          />-20</label
        >
        <label for="-15">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="-15"
          />-15</label
        >
        <label for="-10">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="-10"
          />-10</label
        >
        <label for="-5"
          ><input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="-5"
          />-5</label
        >
        <label for="-1">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="-1"
          />-1</label
        >
        <label for="0"
          ><input type="radio" name="vibe" v-model="vibe.vibe" value="0" />0
        </label>
        <label for="+1">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="+1"
          />+1</label
        >
        <label for="+5">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="+5"
          />+5</label
        >
        <label for="+10">
          <input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="+10"
          />+10</label
        >
        <label for="+15"
          ><input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="+15"
          />+15</label
        >
        <label for="+20"
          ><input
            type="radio"
            name="vibe"
            v-model="vibe.vibe"
            value="+20"
          />+20</label
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "vibe-picker",
  data: () => ({
    vibe: {
      vibe: null,
      comments: "",
    },
  }),
  methods: {
    ...mapActions("vibes", ["addVibe"]),

    submitForm: function() {
      this.addVibe({
        user: "mathiasev",
        vibe: parseInt(this.vibe.vibe),
      });
    },
  },
};
</script>

<style scoped>
#vibe-picker {
  min-height: 20rem;
  border: 1px solid #4c4c4c;
}

#vibes {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 2rem;
  border-top: 1px solid #4c4c4c;
  border-bottom: 1px solid #4c4c4c;
}

#vibes label + label {
  border-left: 1px solid #4c4c4c;
}
</style>
