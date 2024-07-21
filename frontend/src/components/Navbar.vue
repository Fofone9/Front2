<template>
    <nav>
        <div class="nav-btns">
            <pavlov-btn class="form-btn" @click="$router.push('/dishes')">Блюда</pavlov-btn>
            <pavlov-btn class="form-btn" @click="$router.push('/ingredients')">Ингрeдиенты</pavlov-btn>
            <pavlov-btn class="form-btn" @click="$router.push('/cooks')">Повара</pavlov-btn>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav{
    height: 70px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;

    justify-content: center;
}

</style>