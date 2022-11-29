<template>
    <header class="index-header">
        <div class="index-header-logo">logo</div>
        <div class="index-header-nav">nav</div>
        <div class="index-header-lr">lr</div>
    </header>
    <main>main</main>
    <footer>footer</footer>
</template>
<style lang="scss">
//變量
$bgColor: red;
$headerHight: 200px;
$mainHight: 600px;

//混合 1.@mixin 2.include 調用
//概念:混合是scss中的一個代碼容器，能夠包含一段css代碼，混合重複使用
@mixin fontCenter {
    text-align: center;
}
@mixin flex-box-colum {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}
@mixin flex-boxRow {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}
//使用變量定義根元素的font-size
$root-font-size:10px;
html {
    font-size:$root-font-size;
}
//function
@function pxToRem($px){
    @return $px/$root-font-size * 1rem;
}
//媒體查詢
@media only screen and (max-width:800px){
    $root-font-size:5px;
    html {
        font-size:$root-font-size;
    }
}

* {
    margin: 0;
}

body {
    color: white;
}



main {
    width: pxToRem(1000px);
    height: $mainHight;
    background-color: $bgColor;
    margin: 30px auto;
    line-height: $mainHight;
    @include fontCenter();
    @include flex-boxRow();
}

footer {
    height: $headerHight;
    background-color: $bgColor;
    line-height: $headerHight;
    @include fontCenter();
    // @include flex-boxRow();
}

//&的用法
.index-header {
    @include flex-box-colum();
    height: $headerHight;
    background-color: aqua;
    text-align: center;
    &-logo {
        flex: 1;
        width: 100%;
        height: 50px;
        background-color: red;
    }
    &-nav {
        flex: 1;
        margin: 0 auto;
        width: 50%;
        height: 50px;
        background-color: yellow;
    }
    &-lr {
        flex: 1;
        margin: 0 auto;
        width: 50%;
        height: 50px;
        background-color: green;
    }
}
</style>