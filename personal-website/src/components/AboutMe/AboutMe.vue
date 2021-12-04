<template>
<div>
    <!--ABOUT ME HEADER-->
    <div id="about-me">

        <div class="btn">Education</div>
        <!--EDUCATION SECTION-->
        <div class="section"> 
            <!--MCGILL UNIVERSITY-->
            <div class="subsection">

                Software Engineering Undergraduate

                <div class="content">
                    Where? McGill University
                    <br>
                    When? 2020 - 2024
                    <br>
                    Awards? Bursary for computer science (fix later)
                    <br>
                    GPA: 3.96/4.0
                    <br>
                </div>

            </div>

            <!--DAWSON COLLEGE-->
            <div class="subsection">
            Health Sciences
                <div class="content">
                    Where? Dawson College
                    <br>
                    When? 2018 - 2020
                    <br>
                    Awards? Honor roll (fix later)
                    <br>
                    R-Score: 36.4
                    <br>
                </div>
            </div>

            <!--HERZLIAH HIGH SCHOOL-->
            <div class="subsection">
            Health Sciences
                <div class="content">
                    Where? Herzliah High School
                    <br>
                    When? 2013 - 2018
                    <br>
                    Awards? Governor General Award (fix later)
                    <br>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script src="./aboutme.js">
</script>

<style scoped>

.section {
    margin: 15px;
    display: flex;
    justify-content: space-between;
}

#about-me{
    margin: 15px;
}

.subsection {
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
}

.content {
    font-size: 15px;
}

.btn {
    font-size: 30px;
}

.btn:hover {
    font-size: 30px;
    color: cornflowerblue;
}

</style>