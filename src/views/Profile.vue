<template>
  <div class="profile ma-5">
    <!-- automate this text on screen -->
    <h1>Welcome to my online portfolio.</h1>
    <div class="grey--text text--darken-2">
      <h3>Here you will find information about myself and several software projects completed at university.</h3>
      <!-- The projects consist of a wide range of technologies and are listed in the menu to the left. If this menu is not visible, please hit the symbol in the top left corner. -->
    </div>

    <!-- about me -->
    <div class="about-me mt-5">
      <h2>Some things about me.</h2>
      <div>
        <p>I am a creative person with great passion for team working and problem solving. I learnt from a young age how to design and build using engineering principles and have 10 years work experience in the fields of Manufacturing Engineering, Audio Engineering and Technical Event Management.</p>

        <p>I have always had great interest in software development and have recently completed a BEng Software Engineering degree, awarded with First Class Honours by the University of Greenwich in June 2018. During my time at university I studied many technologies and programmed in a variety of languages including C, C#, Java, SQL, PHP, VHDL, ASM. In addition to this, I produced several web applications using the LAMP stack and have more recently been experimenting with various JavaScript technologies/frameworks such as Node, Vue, and React - backed by NoSql databases such as MongoDB.</p>

        <p>I am very much open to working with new technologies and am looking for the potential to grow from a graduate to an expert. As a new developer with no real commercial experience (I have done a few days work experience at a start-up, and completed a couple of websites for friends etc.), I would ideally be looking to enter into a position with some kind of training plan and mentorship. I am however very motivated and able to learn by myself, and therefore feel confident I would be able to get up to speed quickly, and be able to find solutions to problems independently if/when required.</p>
      </div>

      <!-- key skills -->
      <div class="key-skills mt-5 hidden-xs-only">
        <h2>Key Skills</h2>
        <v-list>
          <v-list-tile class="my-4" v-for="skill in keyskills" :key="skill.text">
            <v-list-tile-action>
              <v-icon>vpn_key</v-icon>
            </v-list-tile-action>
            <v-list-title-content>
              <v-list-tile-tile>{{skill.text}}</v-list-tile-tile>
            </v-list-title-content>
          </v-list-tile>
        </v-list>
      </div>

      <!-- hobbies -->
      <div class="hobbies mt-5">
        <h2>Hobbies</h2>
        <p>I enjoy a number of different hobbies, top of which is music production. I have been producing ambient flavours of electronic music since my late teens and have a lot of interest in analogue synthesisers, and a lot of love for the Ableton Live software. I have more recently been gaining interest in the realms of video and have been producing animated visuals using Resolume.</p>

        <p>When not playing around with audio and video, I do a lot of hobby programming and self-studying, mostly via Udemy’s online courses. Of late most of my time has been spent learning various JS frameworks as well as experimenting with Artificial Neural Networks and Deep Learning ML techniques.</p>
      </div>

      <!-- references -->
      <div class="references mt-5">
        <h2>References</h2>

        <p>I am able to provide both work and acedemic references upon request. I also have public references on my Zinc profile, found at: zinc.work/user/nicallennn.</p>
        <!-- The projects consist of a wide range of technologies and are listed in the menu to the left. If this menu is not visible, please hit the symbol in the top left corner. -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyskills: [
        {
          text:
            "Excellent communication, time management, team working, and problem solving skills, backed by several years producing and managing live events such as conferences and festivals."
        },
        {
          text:
            "Strong understanding and academic experience programming in both low and high-level languages such as C, Java, C#, JS, ASM, VHDL, Solidity."
        },
        {
          text:
            "Full-Stack development of Web Applications using LAMP stack. More recently I have been studying JS technologies such as Node, Vue, and React."
        },
        { text: "Working knowledge of Git/Github." },
        {
          text:
            "Comfortable working from the command line and experienced using various CLI tools."
        },
        {
          text:
            "Knowledgeable of blockchain technologies, with focus on Ethereum. Experience programming/deploying smart contracts, and interacting with the contracts from a web-app frontend using the web3.js library."
        }
      ]
    };
  }
};
</script>
