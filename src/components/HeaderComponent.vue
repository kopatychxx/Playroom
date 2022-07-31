<template>
  <header>
    <router-link to="/"><img class="logo" src="../assets/logo.svg" alt="PlayRoom"></router-link>
    <ul class="header__menu">
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__btn"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
              Про нас
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in about"
              :key="i"
            >
              <v-list-item-title><router-link :to="item.link">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__btn"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
              Умови
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in terms"
              :key="i"
            >
              <v-list-item-title><router-link :to="item.link">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__btn"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
              Садок
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in kindergarten"
              :key="i"
            >
              <v-list-item-title><router-link :to="item.link">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li>
        <v-menu
          origin="center center"
          transition="scale-transition"
          bottom
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu__btn"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
              Інші сторінки
              <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in anotherPage"
              :key="i"
            >
              <v-list-item-title><router-link to="/history">{{ item.name }}</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
    </ul>
    <div class="header__select">
      <v-select
        :items="kindergardens"
        v-model="kindergarden"
      ></v-select>
      <v-select
        :items="languages"
        v-model="language"
      ></v-select>
    </div>
    <v-app-bar-nav-icon class="header__menu-mobile-btn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      width="400px"
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Про нас
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(item,i) in about"
              :key="i"
            >
             <router-link :to="item.link">{{item.name}}</router-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Умови
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(item,i) in terms"
              :key="i"
            >
              <router-link :to="item.link">{{item.name}}</router-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Садок
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(item,i) in kindergarten"
              :key="i"
            >
              <router-link :to="item.link">{{item.name}}</router-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Інші сторінки
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(item,i) in anotherPage"
              :key="i"
            >
              <router-link :to="item.link">{{item.name}}</router-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="header__select-mobile">
          <v-select
            :items="kindergardens"
            v-model="kindergarden"
          ></v-select>
          <v-select
            :items="languages"
            v-model="language"
          ></v-select>
        </div>
      </v-list>
    </v-navigation-drawer>

  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    drawer: false,
    about: [
      {
        name: 'Наша історія',
        link: '/history'
      },
      {
        name: 'Вчителі',
        link: '/teachers'
      },
      {
        name: 'Програма',
        link: '/program'
      }
    ],
    terms: [
      {
        name: 'Інфраструктура',
        link: '/infrastructure'
      },
      {
        name: 'Харчування',
        link: '/food'
      },
      {
        name: 'Розклад',
        link: '/schedule'
      },
      {
        name: 'Вартість',
        link: '/price'
      }],
    kindergarten: [
      {
        name: '2-3 роки',
        link: '/2-3year'
      },
      {
        name: '3-4 роки',
        link: '/3-4year'
      },
      {
        name: '4-5 років',
        link: '/4-5year'
      },
      {
        name: '5-6 років',
        link: '/5-6year'
      },
      {
        name: 'Day Care',
        link: '/dayCare'
      }],
    anotherPage: [
      {
        name: 'Covid-19',
        link: '/covid19'
      },
      {
        name: 'Англійська он-лайн',
        link: '/englishOnline'
      },
      {
        name: 'Літній табір',
        link: '/summerCamp'
      },
      {
        name: 'Контакти',
        link: '/contact'
      }],
    languages: [
      'Укр', 'Eng'],
    language: 'Укр',
    kindergardens: ['Київ', 'Козін'],
    kindergarden: 'Київ'
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 5%;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  width: 80px;
}
.header__menu{
  display: flex;
  column-gap: 10px;
  list-style: none;
}
.header__menu__btn {
  background: none !important;
  padding: 0;
}
.header__select {
  display: flex;
  column-gap: 20px;
}
.header__select .v-select {
  width: 100px!important;
}
.v-menu__content {
   top:55px !important;
 }
.v-menu__content a {
  position: relative;
  color: gray;
  text-decoration: none;
}
.header__menu-mobile,
.header__menu-mobile-btn {
  display: none;
}
.v-navigation-drawer {
  padding: 20px;
}
.v-navigation-drawer__content .v-list{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
.header__select-mobile{
  width: 80%;
}
.header__menu-mobile-btn {
  display: none;
}
@media screen and (max-width: 768px) {
  .header__select,
  .header__menu {
    display: none;
  }
  .header__menu-mobile-btn {
    display: flex;
  }
}
</style>
