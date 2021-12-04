<template>
<div>
    <div id="experience-title">
        <div class="slideshow">
            <div class="section active">
                Novatek
            </div>
            <div class="section">
                TAMID
            </div>
            <div class="section">
                Tutoring
            </div>
        </div>
    </div>
</div>
</template>

<script src="./experience.js">
</script>

<style scoped>

.slideshow {
    text-align: center;
}

.section {
    display: none;
    font-size: 30px;
}

.section.active {
    display: block;
}

#experience-title{
    font-size: 40px;
    margin: 15px;
    display: table;
}

</style>
