$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        let valueInput = $("#heroInput").val();
        

        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/?&apikey=ba305978&t=" + valueInput,
            success: function (data) {

                let Titulo = data.Title;
                let imagen = data.Poster;
                
                console.log(data)


                $("#heroInfo").html(`
  
                    <div class="card mb-3 " style="max-width: 640px;">
                      <div class="row g-0">
                         
                          
                          <div class="col-md-10">
                          <div class="card-body">
                              <h5 class="card-title ">${Titulo}</h5>
                              <img src="${imagen}" class="img-fluid rounded-start" alt="...">
                          </div>
                      </div>
                      </div>
  
                  `)


            },
        })


    })



})
