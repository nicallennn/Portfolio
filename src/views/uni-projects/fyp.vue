<template>
  <div class="yyp">
    <div class="pa-5 description white">
      <h1>Final Year Project</h1>
      <h3
        class="grey--text text--darken-2"
      >Blockchain, Ethereum, Solidity, Smart Contracts, Web3.js, HTML, CSS, JS, Bootstrap.</h3>
    </div>

    <div class="flex pa-5">
      <h2>Description</h2>
      <p
        class="mb-4"
      >Produced a decentralized accounting system, allowing users to perform accounting functions such as quoting, invoicing, making payments in the Ether cryptocurrency, paying staff, recording expenses etc. The frontend of the app was produced using HTML, CSS, Bootstrap, JS and the business logic was implemented via a series of Solidity smart contracts, deployed to the Ethereum blockchain. For this project I received a mark of 81%.</p>
    </div>

    <div class="flex pa-5 white">
      <h2>Images</h2>
      <p class="mb-4">Below are a number of images of the final application.</p>
      <!-- show large images here -->
      <div class="font-weight-bold hidden-sm-and-down">
        <p>Overview of the final UI</p>
        <img src="@/assets/project-images/fpy/fyp_job.png" width="800">

        <p class="mt-5">Smart Contract Functions - Paying Jobs</p>
        <img src="@/assets/project-images/fpy/contract_functions_2.png" width="800">

        <p class="mt-5">Unit Test Code - Using Mocha JS</p>
        <img src="@/assets/project-images/fpy/fyp_testing.png" width="800">

        <p class="mt-5">JS Functions</p>
        <img src="@/assets/project-images/fpy/js_functions.png" width="800">
      </div>
      <!-- show small images here -->
      <div class="font-weight-bold hidden-md-and-up">
        <p>Overview of the final UI</p>
        <img src="@/assets/project-images/fpy/fyp_job.png" width="300">

        <p class="mt-5">Smart Contract Functions - Paying Jobs</p>
        <img src="@/assets/project-images/fpy/contract_functions_2.png" width="300">

        <p class="mt-5">Unit Test Code - Using Mocha JS</p>
        <img src="@/assets/project-images/fpy/fyp_testing.png" width="300">

        <p class="mt-5">JS Functions</p>
        <img src="@/assets/project-images/fpy/js_functions.png" width="300">
      </div>
    </div>
    <!-- cv and cover letter -->
    <div class="cv pa-5">
      <h2>What next?</h2>
      <h3
        class="grey--text text--darken-2 mb-3"
      >Use the buttons below to view the project source code on Github or navigate to the next project.</h3>
      <v-btn @click="openGit" small class="ml-0 info">Source on Github</v-btn>
      <v-btn to="/oo" small class="secondary">Next Project</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openGit: () => {
      window.open(
        "https://github.com/nicallennn/YR3_FINAL_YEAR_PROJECT_BLOCKCHAIN",
        "_blank"
      );
    }
  }
};
</script>
