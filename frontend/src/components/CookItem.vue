<template>
    <tr>
        <td>{{ cook.surname }} {{ cook.name }}</td>
        <td>
            <div class="cook-description">
                <div>
                    {{ cook.salary }} рублей
                </div>

                <div class="cook-btns">
                    <pavlov-btn @click="$emit('remove', cook)" class="del-btn">Удалить</pavlov-btn>
                </div>
            </div>
            
        </td>
    </tr>
</template>

<script>
    export default {
        
        props: {
            cook: {
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
.cook-description{
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
.cook-btns{
    align-self: flex-end;
}
</style>