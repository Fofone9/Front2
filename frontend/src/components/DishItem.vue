<template>
    <tr>
        <td>{{ dish.name }}</td>
        <td>
            <div class="dish-description">
                    <div>Тип: {{ dish.dish_type.toUpperCase() }}</div>

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
	vertical-align: centre;
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