<template>
  <div class="education">
    <!-- education and work history -->
    <div class="education_section white pa-5">
      <h1>Education and Work History</h1>
      <h3
        class="grey--text text--darken-2"
      >I have studied and worked in various areas of engineering. Below you will find a list of obtained qualifications and work history.</h3>
    </div>
    <!-- qualifications -->
    <div class="pa-5 grey lighten-4">
      <h2>Qualifications</h2>
      <v-list class="grey lighten-4">
        <v-list-tile class="my-3" v-for="qualification in education" :key="qualification.text">
          <v-list-tile-action>
            <v-icon>class</v-icon>
          </v-list-tile-action>
          <v-list-title-content>
            <v-list-tile-tile>
              <span class="hidden-xs-only">
                {{qualification.school}} -
                <strong>{{qualification.date}}</strong>
                -
              </span>
              {{qualification.course}} -
              <strong>{{qualification.grade}}</strong>
            </v-list-tile-tile>
          </v-list-title-content>
        </v-list-tile>
      </v-list>
    </div>
    <!-- work history -->
    <div class="work-history pa-5 white">
      <h2 class="mb-4">Work History</h2>
      <p>
        <strong>{{work[0].company}}</strong>
        -
        {{work[0].date}}
        <br>
        Responsibilities: {{work[0].duties}}
      </p>
      <p>
        <strong>{{work[1].company}}</strong>
        -
        {{work[1].date}}
        -
        <strong>{{work[1].role}}</strong>
        <br>
        Responsibilities: {{work[1].duties}}
      </p>
      <p>
        <strong>{{work[2].company}}</strong>
        -
        {{work[2].date}}
        -
        <strong>{{work[2].role}}</strong>
        <br>
        Responsibilities: {{work[2].duties}}
      </p>
      <p>
        <strong>{{work[3].company}}</strong>
        -
        {{work[3].date}}
        -
        <strong>{{work[3].role}}</strong>
        <br>
        Responsibilities: {{work[3].duties}}
      </p>
    </div>

    <!-- hobbies -->
    <div class="hobbies pa-5">
      <h2>Hobbies</h2>
      <p>I enjoy a number of different hobbies, top of which is music production. I have been producing ambient flavours of electronic music since my late teens and have a lot of interest in analogue synthesisers, and a lot of love for the Ableton Live software. I have more recently been gaining interest in the realms of video and have been producing animated visuals using Resolume.</p>

      <p>When not playing around with audio and video, I do a lot of hobby programming and self-studying, mostly via Udemy’s online courses. Of late most of my time has been spent learning various JS frameworks as well as experimenting with Artificial Neural Networks and Deep Learning ML techniques.</p>
    </div>

    <References/>
    <!-- cv and cover letter -->
    <!-- <div class="cv pa-5">
      <h2>CV and Cover Letter</h2>
      <h3
        class="grey--text text--darken-2"
      >Please use the links below to download my CV and Cover Letter.</h3>
      <CvButtons/>
    </div>-->
  </div>
</template>

<script>
import CvButtons from "@/components/Cv-buttons";
import References from "@/components/References";

export default {
  components: { CvButtons, References },
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
      ],
      work: [
        {
          company: "Freelance Audio Engineer/Technical Manager",
          date: " 2012-2018",
          role: "",
          duties:
            "Working for various event/sound/lighting/video companies as well as multiple venues across London including Conway Hall, Camden Center, LGA, Studio Spaces, Shoreditch Studios, Kachette, LGA, Roca Gallery, Royal Horticultural Halls, and many more. Producing and managing events such as Lewisham Peoples Day 15-17, Alevi 15-17, Glastonbury Shangri-la 13-16, Boomtown Devil Kicks 2013-16."
        },
        {
          company: "PF Events",
          date: "2014-2018 ",
          role: "Technical Manager/Events Professional",
          duties:
            "Leasing with clients, creating quotes, conducting site visits, writing schedules, booking staff/logistics/external services/sub-hires and producing purchase orders, generating site-plans/acoustic models, overseeing and managing the installation and operation of staging, PA systems, lighting and AV equipment."
        },
        {
          company: "Centre Stage",
          date: "2013-2014",
          role: "Sound/Lighting/AV Engineer",
          duties:
            "Assisting in the day-to-day activities of a small to medium-size sound and lighting company based in North London. Various roles including preparing equipment for events, installing and operating sound, lighting and AV equipment, working in venues such as the Camden Centre in Kings Cross, mixing bands at live events around London, stage management at community events in Newham."
        },
        {
          company: "Painter Brothers Ltd ",
          date: "2008-2012",
          role: "Fabrication/Welding Engineer",
          duties:
            "Reading from engineering drawings and producing/fabricating steelwork, largely for electricity transmission towers and substations. Operating various CNC machines, drills, saws, oxy- acetylene cutting equipment, welding equipment, presses. Assembling steel structures at ground level."
        }
      ]
    };
  }
};
</script>


