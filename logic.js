function buildAgendaItem(anchor, element, count) {

    var session = document.createElement('div');
    session.className = 'session';

    session.innerHTML = '<div class="title">' + element.title + '</div>' +
        '<div class="presenter">' + element.presenter + '</div>' +
        '<div class="abstract">' + element.abstract + '</div>'

    var related = document.createElement('div');
    related.className = 'related';

    var relatedthings = document.createElement('div');
    relatedthings.className = 'tags';

    related.appendChild(relatedthings);

    element.related.forEach(item => {
        var relatedthing = document.createElement('div');
        relatedthing.className = 'relatedthing ' + item.toLowerCase();
        relatedthing.innerHTML = item;
        relatedthings.appendChild(relatedthing);
    })

    var sessionlabel = document.createElement('label');
    sessionlabel.className = 'sessionlabel';
    sessionlabel.innerHTML = 'session'

    var sessionid = document.createElement('label');
    sessionid.className = 'sessionid';
    sessionid.innerHTML = count;

    var c = document.createElement('div');
    c.className = 'count';
    c.appendChild(sessionlabel);
    c.appendChild(sessionid);
    

    related.appendChild(c);
    session.appendChild(related);
    anchor.appendChild(session);
}


function initialize() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log(xhttp.responseText);

            var agenda = JSON.parse(xhttp.response);

            var apps = document.getElementById('apps');
            var ops = document.getElementById('ops');

            var count = 1;

            agenda.apps.forEach(element => {
                console.log(element.title);
                buildAgendaItem(apps, element, count)
                count = count + 2;
            });

            var count = 2;

            agenda.ops.forEach(element => {
                console.log(element.title);
                buildAgendaItem(ops, element, count)
                count = count + 2;
            });



        }
    };
    xhttp.open("GET", "./data.json", true);
    xhttp.send();
}