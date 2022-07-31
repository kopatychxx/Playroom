<template>
  <v-main>
    <LandingComponent />
    <AboutComponent />
    <BenefitsComponent />
  </v-main>
</template>

<script>

import LandingComponent from '@/components/mainPage/LandingComponent'
import AboutComponent from '@/components/mainPage/AboutComponent'
import BenefitsComponent from '@/components/mainPage/BenefitsComponent'
export default {
  name: 'HomeView',

  components: {
    BenefitsComponent,
    AboutComponent,
    LandingComponent
  }
}
</script>
