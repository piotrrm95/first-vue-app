<template>
<div class='claim'>
    <h1 class='claim__title'>SPACER</h1>
    <p class='claim__p'>
        Begin your journey through our amazing galaxy and discover places you never ever heard of.
    </p>
    <p class='claim__p'>
        Type anything space-related to start.
    </p>
</div>
</template>

<script>
export default {
  name: 'Claim',
};
</script>

<style lang="scss" scoped>
.claim{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.claim__title{
    font-size: 50px;
    margin:0;
}
.claim__p{
    font-size: 15px;
    margin: 25px 0 0 0;
}
</style>
