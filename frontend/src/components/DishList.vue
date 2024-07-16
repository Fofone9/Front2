<template>
    <table>
        <thead>
            <tr>
                <th>Блюдо</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dish in dishes">
            <td>{{ dish.dishName }}</td>
            <td>
                <ul >
                    <li>Тип: {{ dish.type.toUpperCase() }}</li>
                    <li>Время подачи: {{ dish.time }} минут</li>
                    <li>Цена: {{ dish.price }} рублей</li>
                    <li>Повар: {{ dish.cookName }}</li>
                </ul>
            </td>
        </tr>
        </tbody>
        
    </table>
</template>

<script>
    export default {
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

td {
	text-align: left;
	border: none;
	padding: 10px 15px;
	vertical-align: top;
}

tr:nth-child(even){
	background: rgba(0, 128, 128,0.7);
}

td:first-child {
	border-radius: 8px 0 0 8px;
}

td:last-child {
	border-radius: 0 8px 8px 0;
}

ul{
    list-style-type: none;
}
li{
    margin-top: 5px;
}
</style>