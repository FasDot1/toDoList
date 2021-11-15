    window.onload = () => {
        const form1 = document.querySelector("#addForm");

        let items = document.getElementById("items");
        let submit = document.getElementById("submit");

        let editItem = null;

        form1.addEventListener("submit", addItem);
        items.addEventListener("click", removeItem);
    } ;

    function addItem(e) {
        e.preventDefault();

        if (submit.value != "Submit") {
            console.log("Hello");

            editItem.target.parantNode.childNodes[0].data = document.getElementById("item").value;


        }

    }