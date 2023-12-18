<template>
    <div class="w-[1180px] mx-auto grid grid-cols-3 gap-x-8 gap-y-10">
        
        <div v-for="(card, index) in card_data" :key="index">
            <Card :title="card.title" :subtitle="card.subtitle" :title_url="card.title_url" :links="card.links" :icon_offset="-51*index+'px'"/>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import CardData from '@/assets/images/home/card-data.json'
export default {
    name: 'HomeCards',
    components: {
        Card
    },
    data() {
        return {
            card_data: CardData
        }
    }
}
</script>

<style></style>