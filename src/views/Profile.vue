<template>
  <div class="profile">
    <!-- automate this text on screen -->
    <div class="pa-5 white">
      <h1>{{title}}</h1>
      <h3
        class="grey--text text--darken-2"
      >Here you will find information about myself and several software projects completed at university.</h3>
      <!-- The projects consist of a wide range of technologies and are listed in the menu to the left. If this menu is not visible, please hit the symbol in the top left corner. -->
    </div>

    <!-- about me -->
    <div class="about-me ma-5">
      <h2>Some things about me.</h2>
      <div>
        <p>I am a creative person with great passion for team working and problem solving. I learnt from a young age how to design and build using engineering principles and have 10 years work experience in the fields of Manufacturing Engineering, Audio Engineering and Technical Event Management.</p>

        <p>I have always had great interest in software development and have recently completed a BEng Software Engineering degree, awarded with First Class Honours by the University of Greenwich in June 2018. During my time at university I studied many technologies and programmed in a variety of languages including C, C#, Java, SQL, PHP, VHDL, ASM. In addition to this, I produced several web applications using the LAMP stack and have more recently been experimenting with various JavaScript technologies/frameworks such as Node, Vue, and React - backed by NoSql databases such as MongoDB.</p>

        <p>I am very much open to working with new technologies and am looking for the potential to grow from a graduate to an expert. As a new developer with no real commercial experience (I have done a few days work experience at a start-up, and completed a couple of websites for friends etc.), I would ideally be looking to enter into a position with some kind of training plan and mentorship. I am however very motivated and able to learn by myself, and therefore feel confident I would be able to get up to speed quickly, and be able to find solutions to problems independently if/when required.</p>
      </div>
    </div>

    <!-- key skills -->
    <div class="key-skills white pa-5">
      <h2>Key Skills</h2>
      <v-list>
        <v-list-tile class="my-3" v-for="skill in keyskills" :key="skill.text">
          <v-list-tile-action>
            <v-icon>vpn_key</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{skill.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>

    <!-- what next -->
    <div class="hobbies pa-5">
      <h2>What next?</h2>
      <p>Check out my education and work history, accessible via the buttons below or the navigation menu to the left. If you have come to my site via a link on my CV and are just here to look at some of my past projects, select a project from the side menu or click the projects button below.</p>
      <v-btn to="/cv" small class="ml-0 info">Education &amp; Work</v-btn>
      <v-btn to="/fyp" small class="secondary">Projects</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to my online portfolio.",
      keyskills: [
        {
          text:
            "Excellent communication, time management, team working, and problem solving skills."
        },
        {
          text:
            "Strong understanding and academic experience programming in languages such as C, Java, C#, JS, Solidity."
        },
        {
          text:
            "Full-Stack development of Web Applications using LAMP/MEVM stack."
        },
        { text: "Working knowledge of Git/Github." },
        {
          text:
            "Comfortable working from the command line and experienced using various CLI tools."
        },
        {
          text:
            "Knowledgeable of blockchain technologies, with focus on Ethereum."
        }
      ]
    };
  },
  methods: {
    openZinc: () => {
      window.open("http://zinc.work/user/nicallennn", "_blank");
    }
  }
};
</script>
