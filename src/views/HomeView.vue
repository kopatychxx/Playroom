<template>
  <v-main>
    <LandingComponent />
    <AboutComponent />
    <BenefitsComponent />
    <ScheduleComponent />
    <LessonsComponent />
  </v-main>
</template>

<script>

import LandingComponent from '@/components/mainPage/LandingComponent'
import AboutComponent from '@/components/mainPage/AboutComponent'
import BenefitsComponent from '@/components/mainPage/BenefitsComponent'
import ScheduleComponent from '@/components/mainPage/ScheduleComponent'
import LessonsComponent from '@/components/mainPage/LessonsComponent'
export default {
  name: 'HomeView',

  components: {
    LessonsComponent,
    ScheduleComponent,
    BenefitsComponent,
    AboutComponent,
    LandingComponent
  }
}
</script>
