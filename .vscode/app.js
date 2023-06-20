<script>
        const id1 = document.getElementById("response1")
        const id2 = document.getElementById("response2")
        const id3 = document.getElementById("response3")
        const id4 = document.getElementById("response4")
        const id5 = document.getElementById("response5")
        const id6 = document.getElementById("response6")
        const id7 = document.getElementById("response7")



        function getData() {
            fetch("https://dummyjson.com/products/1").then((result) => {
                return result.json()
                console.log(result)
            }).then((res) => {
                console.log(res)


                id1.innerHTML = res.id;
                id2.innerHTML = res.title;
                id3.innerHTML = res.description;
                id4.innerHTML = res.brand;

                id5.innerHTML = res.category;

                id6.innerHTML = res.price;

                id7.innerHTML = res.stock;



            })
        }
        getData()
    </script>