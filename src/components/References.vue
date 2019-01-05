<template>
  <!-- references -->
  <div class="references white pa-5">
    <h2>References</h2>

    <p>I am able to provide both work and acedemic references. I also have public references on my Zinc profile, a cryptographically proofed referencing system.</p>

    <v-btn @click="openZinc" small class="mx-0 secondary">View Zinc Profile</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    openZinc: () => {
      window.open("http://zinc.work/user/nicallennn", "_blank");
    }
  }
};
</script>

