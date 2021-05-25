<template>
    <div class="main-content">
        <div class="greeting">
            <div class="circle">
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <h1>Hello Uesr !</h1>
        </div>
    </div>
</template>


<script>
export default {
  name: 'user',
}
</script>

<style>
.main-content{
    width: 100%;
    height: 100%;
    background-color: rgba(153, 153, 153, 0.5);
}
.greeting {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-top: 15vh;
    text-align: center;
    font-size: 2rem;
    box-sizing: border-box;
}
.circle {
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: relative;
    margin: 0 auto 30px;
    box-shadow: 1px 1px 3px rgb(151, 151, 151, 0.5);
}
.fa-user {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 8rem;
}
</style>