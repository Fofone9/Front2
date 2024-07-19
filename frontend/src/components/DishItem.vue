<template>
    <tr>
        <td>{{ dish.dishName }}</td>
        <td>
            <div class="dish-description">
                <ul >
                    <li>Тип: {{ dish.type.toUpperCase() }}</li>
                    <li>Время подачи: {{ dish.time }} минут</li>
                    <li>Цена: {{ dish.price }} рублей</li>
                    <li>Повар: {{ dish.cookName }}</li>
                </ul>

                <div class="dish-btns">
                    <pavlov-btn @click="$emit('remove', dish)" class="del-btn">Удалить</pavlov-btn>
                </div>
            </div>
            
        </td>
    </tr>
</template>

<script>
    export default {
        
        props: {
            dish: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
td {
	text-align: left;
	border: none;
	padding: 10px 15px;
    padding-right: 0;
	vertical-align: top;
}
.dish-description{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
.dish-btns{
    align-self: flex-end;
}
</style>