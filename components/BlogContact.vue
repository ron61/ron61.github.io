<template>
    <div class="container">
        <div class="background" id="formWrapper">
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfc9vj_vrPXXl4ZZdIMijkMUv5TPLQ8req4lT62x1CVZkFgIA/formResponse" method="post" name="myForm" target="dummyIframe">
                <label for="name">名前</label>
                <br />
                <input 
                    type="text" id="name" name="entry.393886468" placeholder="Jane Doe" required 
                />
                <br />
                <label for="mail">メールアドレス</label>
                <br />
                <input 
                    type="email" id="mail" name="entry.675934883" placeholder="mail@mail.com" required
                />
                <br />
                <label for="content">内容</label>
                <br />
                <textarea id="content" name="entry.229357165" placeholder="こんにちは〜" required />
                <br />
                <input 
                    class="submit-button" type="button" value="送信" @click="submit"
                />
            </form>
            <iframe name="dummyIframe" style="display:none;"></iframe>
        </div>
        <div id="thxMessage" style="display:none">
            <p>メッセージは送信されました．ありがとうございました！</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        submit: function () {
            document.myForm.submit();
            document.getElementById('formWrapper').style.display = 'none';
            document.getElementById('thxMessage').style.display = 'block';
        }
    }
}
</script>

<style scoped>

.container {
    display: block;
    text-align: center;
    max-width: 700px;
    margin: 0 auto auto;
    padding-left: 5%;
    padding-right: 5%;
}

.background {
    background-color: rgba(224, 224, 224);
    padding-bottom: 30px;
    padding-top: 20px;
}

.submit-button {
    color:rgb(0, 0, 0);
    background-color: rgb(255, 197, 197);
    border: 0;
    padding: 10px 30px;
}

.submit-button:hover {
    background-color: rgb(255, 180, 180);
}

label {
    display: block;
    padding: 10px 0 0 ;
}

input, textarea {
    display: block;
    margin: 0 auto 0;
    border: 0;
    width: 90%;
    max-width: 300px;
    font-size: 16px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    resize: none;
}

textarea {
    height: 140px;
}

::placeholder{
  color:rgb(212, 211, 211)
}


</style>