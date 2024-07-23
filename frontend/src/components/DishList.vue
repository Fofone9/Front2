<template>
    <table v-if="dishes.length>0">
        <thead>
            <tr>
                <th>Блюдо</th>
                <th>Описание</th>
            </tr>
        </thead>
        <transition-group name="dish-list" tag="tbody">
            <dish-item v-for="dish in dishes" :dish="dish" :key="dish.id" @remove="$emit('remove', dish)"></dish-item>
        </transition-group>     
    </table>
    <div v-else>Ни одно блюдо не добавлено</div>
</template>

<script>
import DishItem from "@/components/DishItem.vue"
    export default {
        components:{
            DishItem,
        },
        props: {
            dishes: {
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

.dish-list-move,
.dish-list-enter-active,
.dish-list-leave-active {
  transition: all 0.5s ease;
}

.dish-list-enter-from,
.dish-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.dish-list-leave-active {
  position: absolute;
}
</style>