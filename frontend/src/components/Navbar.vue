<template>
    <nav>
        <div class="nav-btns">
            <pavlov-btn class="form-btn" @click="$router.push('/dishes')" :class="{active: isActive}">Блюда</pavlov-btn>
            <pavlov-btn class="form-btn" @click="$router.push('/ingredients')" :class="{active: isActive}">Ингрeдиенты</pavlov-btn>
            <pavlov-btn class="form-btn" @click="$router.push('/cooks')" :class="{active: isActive}">Повара</pavlov-btn>
        </div>
    </nav>
</template>

<script>
    export default {
        props:{
            isActive:{
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>
nav{
    
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;

    justify-content: center;
}

.nav-btns{
    margin-bottom: 15px;
}
</style>