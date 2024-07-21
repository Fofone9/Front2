<template>
    <table v-if="cooks.length>0">
        <thead>
            <tr>
                <th>Повар</th>
                <th>Зарплата</th>
            </tr>
        </thead>
        <tbody>
            <cook-item v-for="cook in cooks" :cook="cook" :key="cook.id" @remove="$emit('remove', cook)"></cook-item>
        </tbody>     
    </table>
    <div v-else>Поваров нет</div>
</template>

<script>
import CookItem from "@/components/CookItem.vue"
    export default {
        components:{
            CookItem,
        },
        props: {
            cooks: {
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

</style>