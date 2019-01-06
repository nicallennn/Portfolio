<template>
  <div class="oo">
    <div class="pa-5 description white">
      <h1>Object-Oriented Programming</h1>
      <h3 class="grey--text text--darken-2">C#, .NET, Winforms, ASP.Net, LINQ, SOAP, SQL-Server.</h3>
    </div>

    <div class="flex pa-5">
      <h2>Description</h2>
      <p
        class="mb-4"
      >Produced a complete train network management and journey search system. The project consisted of a desktop application (C#, WinForms, custom WinForm components), web service (SOAP), web application (ASP.NET), and a database (SQL-Sever).</p>
      <p>
      The desktop app allowed admin users to login and perform functions such as: Adding train lines, adding train stations, adding/editing/removing stations to lines, setting distance/time between lines, configuring order of stations on lines, adding delays at different stations on the lines.
      </p>
      <p>
      The web app allowed users to search for journeys between two stations. Upon submitting a request, the data was sent to the web service described below. Once the results had been returned they were displayed on the web applications UI, inlcuding the station/s to change at. </p>
      <p>The web service contained the alogrithms to search for journeys between 2 stations. When a call was made from the client, all journeys between the two stations were first found. The distance/time for all routes when then calcuated before returning the fastest route, includnig change stations.</p>
    </div>

    <div class="flex pa-5 white">
      <h2>Images</h2>
      <p class="mb-4">Below are a number of images of the final application.</p>
      <!-- show large images here -->

      <div class="font-weight-bold hidden-sm-and-down">
        <p>Login UI</p>
        <img src="@/assets/project-images/oo/login.png" width="400">
        <p class="mt-5">Overview of the final UI</p>
        <img src="@/assets/project-images/oo/final.png" width="600">
        <p class="mt-5">Annoted Overview of the final UI</p>
        <img src="@/assets/project-images/oo/annotated.png" width="600">
        <p class="mt-5">Train Line Editor</p>
        <img src="@/assets/project-images/oo/line_editor.png" width="600">
        <p class="mt-5">Client Web App</p>
        <img src="@/assets/project-images/oo/client.png" width="600">
        <p class="mt-5">Web Service Methods</p>
        <img src="@/assets/project-images/oo/functions.png" width="800">
        <p class="mt-5">Get station Id's Method</p>
        <img src="@/assets/project-images/oo/getId.png" width="800">
        <p class="mt-5">Get distance Method</p>
        <img src="@/assets/project-images/oo/getDistance.png" width="800">
      </div>

       <!-- show small images here -->
      <div class="font-weight-bold hidden-md-and-up">
        <p class="mt-5">Login UI</p>
        <img src="@/assets/project-images/oo/login.png" width="300">
        <p class="mt-5">Overview of the final UI</p>
        <img src="@/assets/project-images/oo/final.png" width="300">
        <p class="mt-5">Annoted Overview of the final UI</p>
        <img src="@/assets/project-images/oo/annotated.png" width="300">
        <p class="mt-5">Train Line Editor</p>
        <img src="@/assets/project-images/oo/line_editor.png" width="300">
        <p class="mt-5">Client Web App</p>
        <img src="@/assets/project-images/oo/client.png" width="300">
        <p class="mt-5">Web Service Methods</p>
        <img src="@/assets/project-images/oo/functions.png" width="300">
        <p class="mt-5">Get station Id's Method</p>
        <img src="@/assets/project-images/oo/getId.png" width="300">
        <p class="mt-5">Get distance Method</p>
        <img src="@/assets/project-images/oo/getDistance.png" width="300">
    </div>
    </div>
  </div>
</template>

