<template>
  <div class='search'>
    <Claim/>
    <div class='search__container'>
      <input type='text' name='search' id='search' v-model='searchValue' @input='handleInput' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>
<style lang='scss' scoped>
    .search {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px;
        width: 100%;
    };
    .search__container {
        display: flex;
        flex-direction: column;
        width: 250px;
        label {
            font-family: Montserrat, sans-serif;
        };
        input {
            height: 30px;
            border: 0;
            border-bottom: 1px solid black;
            background: none;
        };
    };
</style>
