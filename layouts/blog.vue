<template>
    <div>
        <div class="header">
            <p>Web Log</p>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
            </ul>
        </div>
        <Nuxt />
        <div class="fotter"></div>
    </div>
</template>

<style>

/* header */

.header {
    text-align: center;
    font-size: 60px;
    background-color: rgb(224, 224, 224);
    margin: 0 0 50px;
}

.header p {
    margin: 0px;
    padding: 30px 0px 0px;
    font-family: Impact;
    color: rgb(119, 119, 119);
}

.header ul {
    text-align: right;
    list-style: none;
    font-size: 24px;
    margin: 0px;
    padding-bottom: 10px;
}

.header li {
    display: inline;
    padding-right: 20px;
}

.header a {
    color: rgb(119, 119, 119);
    text-decoration: none;
}

.header a:hover {
    color: rgb(73, 72, 72);
}

.footer {
    height: 100px;
}

/* 以下ブログ記事内のcss */

.blog-post {
    margin: 7rem auto 0;
    color: rgb(110, 110, 110);
    max-width: 640px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 6rem;
}

.blog-post h1 {
    font-size: 40px;
}

.blog-post h2 {
    border-left: thick solid rgb(110, 110, 110);
    padding-left: 10px;
}

.blog-post .date {
    text-align: right;
}

.blog-post p {
    margin-top: 50px;
}

</style>