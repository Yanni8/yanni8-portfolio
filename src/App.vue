<template>
  <v-app id="main">
    <v-app-bar id="navbar" class="w-fit backdrop-blur-lg" elevation="5">
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
        <v-btn variant="text" @click="updateUrl('experience')">
          Experience
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" location="top" width="100%">
      <v-list lines="one">
        <v-list-item @click="updateUrl('about-me')" title="About Me"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('education')" title="Education"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('experience')" title="Experience"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="updateUrl('contact')" title="Contact"></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div>
        <welcome></welcome>

        <div id="about-me" class="pt-10 w-full h-1"></div>
        <about-me></about-me>
        <div id="education" class="pt-10 w-full h-1"></div>
        <education></education>
        <div id="experience" class="pt-10 w-full h-1"></div>
        <experience></experience>
        <framework-overivew></framework-overivew>
        <div id="conntact" class="pt-10 w-full h-1"></div>
        <contact-form></contact-form>
      </div>
    </v-main>
    <v-footer class="flex justify-between w-full opacity-75 bg-[#0e10149f]">
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
import Experience from './views/Experience.vue';
import AboutMe from './views/AboutMe.vue';
import Education from './views/Education.vue';
import Welcome from './views/Welcome.vue';
import ContactForm from './views/ContactForm.vue';

export default {
  name: "App",
  data() {
    return {
      drawer: false
    }
  },
  components: {
    FrameworkOverivew,
    Experience,
    AboutMe,
    Education,
    Welcome,
    ContactForm
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
    this.$root.goto = (id: string, updateUrl: boolean) => {
      if (updateUrl) {
        this.updateUrl(id);
      } else {
        this.updateView(id);
      }
    }
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
  width: 100vw;
  overflow: hidden;
}

html {
  font: 5vmin/1.3 Serif;
  overflow: hidden;
}

main {
  background: rgb(5, 4, 31);
  background: linear-gradient(90deg, rgba(5, 4, 31, 1) 0%, rgba(3, 3, 18, 1) 29%, rgba(3, 3, 56, 1) 100%);
}

head {
  display: block;
  font-size: 52px;
  color: transparent;
}

#navbar {
  background-color: #0e10149f;
  color: white;
}
</style>
