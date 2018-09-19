(function() {
    document.getElementById('send-post').addEventListener('click', function(event) {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;

        let apiUrl = window.location.origin + '/api/example';
        let reqInit = {
            headers: new Headers({'Content-Type': 'application/json'}),
            method: 'POST',
            body: JSON.stringify({
                name: name,
                age: age
            })
        };

        return window.fetch(apiUrl, reqInit).then(function (res) {
            document.getElementById('show-res').innerHTML = res;
            console.log(res);
            return res.json().then(function (resJson){
                document.getElementById('show-res-json').innerHTML = JSON.stringify(resJson);
                console.log(resJson);
            });
        });
    })
})();