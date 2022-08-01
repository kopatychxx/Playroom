<template>
  <v-main>
    <LandingComponent />
    <AboutComponent />
    <BenefitsComponent />
    <ScheduleComponent />
  </v-main>
</template>

<script>

import LandingComponent from '@/components/mainPage/LandingComponent'
import AboutComponent from '@/components/mainPage/AboutComponent'
import BenefitsComponent from '@/components/mainPage/BenefitsComponent'
import ScheduleComponent from '@/components/mainPage/ScheduleComponent'
export default {
  name: 'HomeView',

  components: {
    ScheduleComponent,
    BenefitsComponent,
    AboutComponent,
    LandingComponent
  }
}
</script>
