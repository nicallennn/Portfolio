 <template>
  <div class="web-app">
    <div class="pa-5 description white">
      <h1>Web Application Development</h1>
      <h3 class="grey--text text--darken-2">HTML, CSS, JS, PHP, Bootstrap, SQL, MySql Database.</h3>
    </div>

    <div class="flex pa-5">
      <h2>Description</h2>
      <p
        class="mb-4"
      >Produced a ridesharing application. Users were able to sign up, create journey posts including pick-up point and drop-off point (selected from google maps api), dates, times, etc. Implemented search algorithms allowing users to select start and end points and see journeys filtered on criteria such as Euclidean distance to start/end points, start/end time etc.</p>
    </div>

    <div class="flex pa-5 white">
      <h2>Images</h2>
      <p class="mb-4">Below are a few of images of the final application.</p>
      <!-- show large images here -->
      <div class="font-weight-bold hidden-sm-and-down">
        <p class>Account Page</p>
        <img src="@/assets/project-images/webapp/account.png" width="800">
        <p class="mt-5">Create Post</p>
        <img src="@/assets/project-images/webapp/create.png" width="800">
        <p class="mt-5">Search for Journeys</p>
        <img src="@/assets/project-images/webapp/search.png" width="800">
      </div>
      <!-- show small images here -->
      <div class="font-weight-bold hidden-md-and-up">
        <p class="mt-5">Account Page</p>
        <img src="@/assets/project-images/webapp/account.png" width="300">
        <p class="mt-5">Create Post</p>
        <img src="@/assets/project-images/webapp/create.png" width="300">
        <p class="mt-5">Search for Journeys</p>
        <img src="@/assets/project-images/webapp/search.png" width="300">
      </div>
    </div>
    <!-- What next? -->
    <div class="cv pa-5">
      <h2>What next?</h2>
      <h3
        class="grey--text text--darken-2 mb-3"
      >Use the buttons below to view the project source code on Github or navigate to the next project.</h3>
      <v-btn @click="openGit" small class="ml-0 info">Source on Github</v-btn>
      <v-btn to="/sem" small class="secondary">Next Project</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openGit: () => {
      window.open("https://github.com/nicallennn/YR3_WEB_APP_CW", "_blank");
    }
  }
};
</script>