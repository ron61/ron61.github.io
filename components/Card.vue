<template>
    <div class="container">
        <nuxt-link :to="link">
            <div class="pc">
                <div class="pc-card">
                    <div class="img-container">
                        <img :src="imgSrc" :alt="imgAlt" width="95%" height="95%" />
                    </div>
                    <div class="text-container">
                        <h2>{{title}}</h2>
                        <p>{{date}}</p>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
            <div class="sp">
                <div class="card">
                    <div class="img-container">
                        <img :src="imgSrc" :alt="imgAlt" width="95%" />
                    </div>
                    <div class="text-container">
                        <h2>{{title}}</h2>
                        <p>{{date}}</p>
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        date: String,
        link: String,
        imgSrc: String,
        imgAlt: String
    }
}
</script>

<style scoped>
.container {
    background-color: rgb(240, 240, 240);
    text-align: center;
    display: inline-block;
    margin: 0 5% 50px;
    padding: 0;
    color: black;
    max-width: 900px;
}

.container:hover {
    background-color: rgb(189, 189, 189);
}

.pc{
  display: block;
}
.sp{
  display: none;
}
 
@media only screen and (max-width: 767px){
  .pc{
    display: none;
  }
  .sp{
    display: block;
  }
}

.pc-card {
    display: flex;
}

h2 {
    font-size: 18px;
    font-weight: bolder;
}

a {
    color: black;
    text-decoration: none;
}

.pc img {
    position: relative;
    top: 2.5%;
}

.sp img {
    position: relative;
    top: 10px;
}

.pc .img-container {
    max-width: 300px;
}

.text-container {
    padding-left: 20px;
    padding-right: 10px;
    text-align: left;
} 

</style>