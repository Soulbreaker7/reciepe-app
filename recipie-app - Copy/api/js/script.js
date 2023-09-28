jQuery(document).ready(function () {
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/categories/",
        success: function(response){
            // console.log(response.data);
            let html_data ="";
            response.data.forEach((category) => {
                html_data += `<li>
                <a href="#">
                    <img
                        class="rest"
                        src="${category.image}"
                        alt="${category.name}"
                    />
                    <span>${category.name}</span>
                </a>
            </li>`
            });
            $(".head ul").html(html_data);
        }
    });
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/",
        success: function(response){
            console.log(response.data);
            let html_data ="";
            response.data.forEach((category) => {
                html_data += `<div class="item">
                <a href="#">
                    <div class="top">
                        <img src="${category.image}" alt="Image" />
                    </div>
                    <div class="middle"><h3>${category.location}</h3></div>
                    <div class="bottom">
                        <img src="images/place.svg" alt="Image" />
                        <span>${category.name}</span>
                    </div>
                </a>
            </div>`
            });
            $(".items").html(html_data);
        }
    });
});