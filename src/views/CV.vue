<template>
  <div class="education ma-5">
    <!-- education -->
    <div class="education_section">
      <h1>Education</h1>
      <h3
        class="grey--text text--darken-2"
      >I have a mixed education and haved studied a variety of topics, generally focused around engineering industries. Over the years I have obtained a number of qualifications, most notably those listed in the section below.</h3>
      <h2 class="mt-5">Qualifications</h2>
      <v-list>
        <v-list-tile class="my-4" v-for="qualification in education" :key="qualification.text">
          <v-list-tile-action>
            <v-icon>class</v-icon>
          </v-list-tile-action>
          <v-list-title-content>
            <v-list-tile-tile>
              {{qualification.school}} -
              <strong>{{qualification.date}}</strong>
              -
              {{qualification.course}} -
              <strong>{{qualification.grade}}</strong>
            </v-list-tile-tile>
          </v-list-title-content>
        </v-list-tile>
      </v-list>
    </div>
    <!-- cv and cover letter -->
    <div class="cv mt-5">
      <h1>CV and Cover Letter</h1>
      <h3
        class="grey--text text--darken-2"
      >Please use the links below to download my CV and Cover Letter.</h3>
      <div class="cv-buttons mt-3">
        <v-btn flat depressed large class="info">CV</v-btn>
        <v-btn flat depressed large class="secondary">Cover Letter</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          school: "University of Greenwich",
          date: "2015-18",
          course: "BEng Software Engineering",
          grade: "First Class"
        },
        {
          school: "Alchemea College of Audio Engineering",
          date: "2012",
          course: "Live Sound Diploma",
          grade: "Distinction"
        },
        {
          school: "Hereford College of Technology",
          date: "2010-12",
          course: "NC Manufacturing Engineering",
          grade: "Merit"
        },
        {
          school: "HGTA/Painter Brothers",
          date: "2008-2012",
          course: "Advanced Apprenticeship in Engineering",
          grade: "Fullfilled"
        },
        {
          school: "Whitecross High School",
          date: "2006",
          course: "GCSE",
          grade: " 8 A-C Grade GCSEs"
        }
      ]
    };
  }
};
</script>


