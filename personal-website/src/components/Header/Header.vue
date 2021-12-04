<template>
<div>
    <div id="intro">Hi, I'm Sam</div>
    <div id="tabs">
        <button class="tab">About Me</button>
        <button class="tab">Experience</button>
        <button class="tab">Projects</button>
    </div>
</div>
</template>

<script src="./header.js">
</script>

<style scoped>
    #intro {
        font-size: 40px;
        text-align: center;
        margin-top: 50px;
    }

    #tabs {
        text-align: center;
    }

    .tab {
        margin: 50px;
        border: none;
        background-color: white;
    }

    .tab:hover {
        color: cornflowerblue;
    }

</style>