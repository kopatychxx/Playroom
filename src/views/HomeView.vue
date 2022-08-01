<template>
  <v-main>
    <LandingComponent />
    <AboutComponent />
    <BenefitsComponent />
    <ScheduleComponent />
    <LessonsComponent />
    <GroupsComponent />
    <PriceComponent />
  </v-main>
</template>

<script>

import LandingComponent from '@/components/mainPage/LandingComponent'
import AboutComponent from '@/components/mainPage/AboutComponent'
import BenefitsComponent from '@/components/mainPage/BenefitsComponent'
import ScheduleComponent from '@/components/mainPage/ScheduleComponent'
import LessonsComponent from '@/components/mainPage/LessonsComponent'
import GroupsComponent from '@/components/mainPage/GroupsComponent'
import PriceComponent from '@/components/mainPage/PriceComponent'
export default {
  name: 'HomeView',

  components: {
    PriceComponent,
    GroupsComponent,
    LessonsComponent,
    ScheduleComponent,
    BenefitsComponent,
    AboutComponent,
    LandingComponent
  }
}
</script>
