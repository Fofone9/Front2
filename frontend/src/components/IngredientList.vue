<template>
    <table v-if="ingredients.length>0">
        <thead>
            <tr>
                <th>Ингредиент</th>
                <th>Описание</th>
            </tr>
        </thead>
        <transition-group name="ingredient-list" tag="tbody">
            <ingredient-item v-for="ingredient in ingredients" :ingredient="ingredient" :isActive="isActive" :key="ingredient.id" @remove="$emit('remove', ingredient)"></ingredient-item>
        </transition-group>     
    </table>
    <div v-else>Нет ингредиентов</div>
</template>

<script>
import IngredientItem from "@/components/IngredientItem.vue"
    export default {
        components:{
            IngredientItem,
        },
        props: {
            isActive:{
                type: Boolean,
                required: true
            },
            ingredients: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>
table {
	width: 100%;
	border: none;
	margin-bottom: 20px;
    margin-top: 15px;
}

th {
	font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: rgba(0, 128, 128,0.7);
}

th:first-child {
	border-radius: 8px 0 0 8px;
}

th:last-child {
	border-radius: 0 8px 8px 0;
}

.ingredient-list-move,
.ingredient-list-enter-active,
.ingredient-list-leave-active {
  transition: all 0.5s ease;
}

.ingredient-list-enter-from,
.ingredient-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.ingredient-list-leave-active {
  position: absolute;
}
</style>