function initialize() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log(xhttp.responseText);

            var agenda = JSON.parse(xhttp.response);

            var apps = document.getElementById('apps');
            var ops = document.getElementById('ops');

            agenda.apps.forEach(element => {
                console.log(element.title);

                var session = document.createElement('div');
                session.className = 'session';

                session.innerHTML = '<div class="title">' + element.title + '</div>' +
                        '<div class="presenter">' + element.presenter + '</div>' +
                        '<div class="abstract">' + element.abstract + '</div>' 



           

                var related = document.createElement('div');
                related.className = 'related';

                element.related.forEach(item => {
                    var relatedthing = document.createElement('div');
                    relatedthing.className = 'relatedthing ' + item.toLowerCase();
                    relatedthing.innerHTML = item;
                    related.appendChild(relatedthing);
                })


                session.appendChild(related);

                apps.appendChild(session);

            });


            agenda.ops.forEach(element => {
                console.log(element.title);

                var session = document.createElement('div');
                session.className = 'session';

                session.innerHTML = '<div class="title">' + element.title + '</div>' +
                        '<div class="presenter">' + element.presenter + '</div>' +
                        '<div class="abstract">' + element.abstract + '</div>' 



                        var related = document.createElement('div');
                        related.className = 'related';
        
                        element.related.forEach(item => {
                            var relatedthing = document.createElement('div');
                            relatedthing.className = 'relatedthing ' + item.toLowerCase();
                            relatedthing.innerHTML = item;
                            related.appendChild(relatedthing);
                        })
        
        
                        session.appendChild(related);
        
                        ops.appendChild(session);

            });
           

         
        }
    };
    xhttp.open("GET", "./data.json", true);
    xhttp.send();
}