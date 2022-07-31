<template>
  <div class="landingComponent">
    <div class="landingComponent__content">
      <div class="landingComponent__content__titles">
        <h1>Playroom</h1>
        <h2>KINDERGARTEN</h2>
      </div>
      <p>Ваш англомовний садочок з <span>білінгвальним методом</span> навчання
      </p>
    </div>
    <img width="100%" src="../../assets/Main/LandingComponentImg.jpg" alt=''>
  </div>
</template>

<script>
export default {
  name: 'LandingComponent'
}
</script>

<style scoped>
.landingComponent {
  padding: 0 5%;
}
.landingComponent__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  color: #E83542;
}
h2{
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  margin-top: -20px;
}
.landingComponent__content p {
  max-width: 500px;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  text-align: right;
  margin: 0;
}
.landingComponent__content p span {
  font-weight: 400;
  font-size: 24px;
  color: #E83542;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 25px;
    margin-top: -15px;
  }
  .landingComponent__content p,
  .landingComponent__content p span{
    font-size: 15px;
    width: 250px;
  }
}
@media screen and (max-width: 425px) {
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 20px;
    margin-top: -10px;
  }
  .landingComponent__content p,
  .landingComponent__content p span{
    font-size: 13px;
    width: 250px;
  }
}
@media screen and (max-width: 375px){
  .landingComponent {
    margin-top: 30px;
  }
}
</style>
