<template>
    <div id="projects">
        <div class="projects">
            <div class="btn" @click="displayLMS()">
                Library Management System
                <div id="lms" class="dropdown">
                    <div class="element" @click="displayDescription()">Description</div>
                    <div class="element">GITHUB</div>
                    <div class="element">Images</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./projects.js">
</script>

<style scoped>

    .btn {
        font-size: 30px;
        background-color: cornflowerblue;
        color: white;
    }

    .btn:hover {
        font-size: 30px;
        background-color: rgb(41, 106, 229);


    }

    #projects{
        margin: 15px;
    }

    .dropdown {
        background-color: rgb(232, 239, 251);
    }

    .element {
        color: cornflowerblue;
        border-style: solid;
        display: none;
    }

    .element:hover {
        border-color: white;
        color: rgb(41, 106, 229);
    }

</style>
