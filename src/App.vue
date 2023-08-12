<template>
  <v-app>
    <v-app-bar class="w-full" elevation="5">
      <v-app-bar-nav-icon @click.native="drawer = !drawer" class="lg:!hidden"></v-app-bar-nav-icon>
      <v-app-bar-title><span class="max-lg:hidden">Portfolio </span>Yannick Müller</v-app-bar-title>
      <div class="max-lg:hidden">
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="updateUrl('about-me')">
          About Me
        </v-btn>
        <v-btn variant="text" @click="updateUrl('education')">
          Education
        </v-btn>
        <v-btn variant="text" @click="updateUrl('technologies')">
          Technologies
        </v-btn>
        <v-btn variant="text" @click="updateUrl('experience')">
          Experience
        </v-btn>
        <v-btn variant="text" @click="updateUrl('contact')">
          Contact Details
        </v-btn>
      </div>
    </v-app-bar>
    <v-system-bar class="flex justify-center">
      <p class="mr-2 uppercase text-red-600 font-bold">important</p>
      <p>This website is still under development</p>
    </v-system-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" location="top" width="100%">
      <v-list lines="one">
        <v-list-item @click="updateUrl('about-me')" title="About Me"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('education')" title="Education"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('technologies')" title="Technologies"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('experience')" title="Experience"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('contact')" title="Contact"></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div>
        <div id="about-me" class="pt-10 w-full h-1"></div>
        <about-me></about-me>
        <div id="education" class="pt-10 w-full h-1"></div>
        <education></education>
        <div id="technologies" class="pt-10 w-full h-1"></div>
        <framework-overivew></framework-overivew>
        <div id="experience" class="pt-10 w-full h-1"></div>
        <experience></experience>
        <div id="contact" class="pt-10 w-full h-1"></div>
        <contact></contact>
      </div>
    </v-main>
    <v-footer class="flex justify-between w-full opacity-75">
      <div>
        &copy; {{ new Date().getFullYear() }}<span class="max-md:hidden"> - Yannick Müller</span>
      </div>
      <div>
        <v-btn class="mx-4" icon="far fa-envelope" variant="plain" href="mailto:mail@ynnk.dev" size="small"></v-btn>
        <v-btn class="mx-4" icon="fab fa-linkedin" variant="plain" href="mailto:mail@ynnk.dev" size="small"></v-btn>
        <v-btn class="mx-4" icon="fab fa-github" variant="plain" href="https://github.com/yanni8" size="small"></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import FrameworkOverivew from './views/FrameworkOverview.vue';
import Contact from './views/Contact.vue';
import Experience from './views/Experience.vue';
import AboutMe from './views/AboutMe.vue';
import Education from './views/Education.vue';

export default {
  name: "App",
  data() {
    return {
      drawer: false
    }
  },
  components: {
    FrameworkOverivew,
    Contact,
    Experience,
    AboutMe,
    Education,
  },
  methods: {
    updateView(elementId: string) {
      if (!elementId) {
        return;
      }
      const domElement = document.getElementById(elementId);
      if (domElement) {
        domElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    updateUrl(id: string) {
      this.drawer = false;
      this.updateView(id);
      this.$router.push({ path: '/', hash: '#' + id })
    }
  },
  mounted() {
    this.updateView(window.location.hash.replace('#', ''));
  }
}

</script>
<style  lang="scss">
#app {
  font-size: medium;
}

main {
  z-index: 1000;
}

header {
  z-index: 1001;
}

html {
  background: #0f172a;
}

@mixin bgelements($count) {


  $colors: #18395e,
  #102f8a;
  $shadow: ();

  @for $i from 0 through $count {
    $shadow: $shadow,
    (-.5+(random()) * 3)+em (-.5+(random()) * 3)+em 10px lighten(nth($colors, random(length($colors))), 20%);
    ;
  }

  text-shadow: $shadow;
}


@mixin bgelements-md($count) {


  $colors: #18395e,
  #102f8a;

  $shadow: ();

  @for $i from 0 through $count {
    $shadow: $shadow,
    (-.3+(random()) * 2)+em (-.5+(random()) * 2)+em 10px lighten(nth($colors, random(length($colors))), 20%);
    ;
  }

  text-shadow: $shadow;
}

@mixin bgelements-sm($count) {


  $colors: #18395e,
  #0d36b3;

  $shadow: ();

  @for $i from 0 through $count {
    $shadow: $shadow,
    (-.5+(random()) * 3)+em (-.5+(random()) * 3)+em 10px lighten(nth($colors, random(length($colors))), 20%);
    ;
  }

  text-shadow: $shadow;
}

html {
  font: 5vmin/1.3 Serif;
  overflow: hidden;
  background: #10192f;
}

head {
  display: block;
  font-size: 52px;
  color: transparent;
}

head::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: '.';
  mix-blend-mode: screen;
  animation: 100s -50s animate-bg infinite ease-in-out alternate;
}

head::after {
  @include bgelements(30);
}

@media screen and (max-width: 768px) {
  head::after {
    @include bgelements-md(30);

  }
}

@media screen and (max-width: 640px) {
  head::after {
    @include bgelements-sm(30);
  }
}

@keyframes animate-bg {
  from {
    transform: rotate(0deg) scale(15) translateX(-20px);
  }

  to {
    transform: rotate(360deg) scale(15) translateX(20px);
  }
}
</style>
