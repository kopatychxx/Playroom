<template>
  <div class="aboutComponent">
    <div class="aboutComponent__content">
      <div class="aboutComponent__content-row">
        <span>2021</span>
        <p>Садочок був заснован </p>
      </div>
      <div class="aboutComponent__content-row">
        <span>1028</span>
        <p>Дітей було навченно</p>
      </div>
      <div class="aboutComponent__content-row">
        <span>25</span>
        <p>Занятть у садочку</p>
      </div>
    </div>
    <div class="aboutComponent__text">
      <h3>Про нас</h3>
      <p>Шукаєте дружнє місце для дітей, де вони могли б навчатися, грати, рухатися, творити годинами та ніколи не нудьгувати? І все це – переважно англійською мовою?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.aboutComponent {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 90px 5% 0;
}
.aboutComponent__content-row {
  display: flex;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  border-bottom: 1px solid gray;
}
.aboutComponent__content-row span {
  font-weight: 600;
  font-size: 40px;
  line-height: 78px;
  color: #E83542;
}
.aboutComponent__content-row p {
  font-weight: 400;
  font-size: 25px;
  color: #000000;
  margin-bottom: 0;
}
.aboutComponent__text {
  max-width: 500px;
}
.aboutComponent__text h3 {
  font-weight: 600;
  font-size: 50px;
  text-align: right;
  color: #64B3F4;
}
.aboutComponent__text p {
  font-weight: 300;
  font-size: 20px;
  line-height: 37px;
  text-align: right;
  color: #000000;
}
@media screen and (max-width: 1024px){
  .aboutComponent__content-row {
    width: 400px;
  }
}@media screen and (max-width: 768px){
  .aboutComponent__content-row{
    width: 300px;
  }
  .aboutComponent__content-row span{
    font-size: 25px;
  }
  .aboutComponent__content-row p {
    font-size: 20px;
  }
  .aboutComponent__text h3 {
    font-size: 35px;
  }
  .aboutComponent__text p {
    font-size: 18px;
  }
}
@media screen and (max-width: 425px) {
  .aboutComponent {
    flex-direction: column-reverse;
    align-items: center;
  }
  .aboutComponent__text h3,
  .aboutComponent__text p {
    text-align: center;
  }
}
</style>
