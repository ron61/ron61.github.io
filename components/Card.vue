<template>
    <div class="container">
        <nuxt-link :to="link">
            <div class="card">
                <div class="img-container">
                    <img :src="imgSrc" :alt="imgAlt" width="150" height="auto"/>
                </div>
                <div class="text-container">
                    <h2>{{title}}</h2>
                    <p>{{date}}</p>
                    <p>{{description}}</p>
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
    margin: 20px 20% auto;
    padding: 0;
    color: black;
}

.container:hover {
    background-color: rgb(189, 189, 189);
}

.card {
    display: flex;
}

a {
    color: black;
    text-decoration: none;
}

img {
    width: 95%;
    position: absolute;
    top: 50%;
    -webkit-transform : translateY(-50%);
    left: 5%;
}

.img-container {
    width: 200%;
    text-align: center;
    position: relative;
}

.text-container {
    padding-left: 20px;
    padding-right: 10px;
    text-align: left;
}

</style>