<template>
    <div class="card" :class="{ closed }">
        <div class="front">

            <h2>{{ character.name }}</h2>
            
            <picture class="image-container">
                <img :src="character.image" :alt="character.name">
            </picture>

        </div>
    </div>
</template>

<script>

export default {
    
    name: "Card",

    props: ["character", "closed"]

}

</script>

<style scoped>

.card {
    max-width: 300px;
    position: relative;

    transition: all ease 0.5s;
    transform-style: preserve-3d;
    transform: perspective(600px) rotateY(0deg);

}

.card .front {
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);
    border-radius: 3px;
    background: #fff;
    backface-visibility: hidden;
}

.card::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    border-radius: 5px;
    z-index: -1;
}

.card.closed {
    transform: perspective(600px) rotateY(180deg);
}

.card h2 {
    text-align: center;
    margin-bottom: 10px;
}

</style>