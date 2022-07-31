<template>
  <v-main>
    <LandingComponent />
    <AboutComponent />
  </v-main>
</template>

<script>

import LandingComponent from '@/components/mainPage/LandingComponent'
import AboutComponent from '@/components/mainPage/AboutComponent'
export default {
  name: 'HomeView',

  components: {
    AboutComponent,
    LandingComponent
  }
}
</script>
