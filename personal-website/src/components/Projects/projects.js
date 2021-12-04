

export default {
    methods: {
        displayLMS(){
            const coll = document.getElementById("lms");
            Array.from(coll.children).forEach(child => {
                if(child.style.display === "block"){
                    child.style.display = "none";
                }
                else {
                    child.style.display = "block";
                }
            });
        },
        displayDescription(){
            
        }
    }
}