<template>
  <base-card>
    <section>
      <h2>Register as a coach now!</h2>
    </section>
    <coach-form></coach-form>
  </base-card>
</template>
<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: { CoachForm },
};
</script>

<style scoped></style>
