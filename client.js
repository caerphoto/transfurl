(function (D) {
    var serverInput = D.querySelector("#server");
    var urlInput = D.querySelector("#url");
    var goButton = D.querySelector("#go");

    function getUrl() {
        return urlInput.value;
    }
    function getServer() {
        return serverInput.value;
    }

    function sendUrl() {
        var xhr = new XMLHttpRequest();
        var url = getUrl();

        xhr.open("POST",
            getServer() + "/?url=" + encodeURIComponent(url),
            true );

        xhr.onload = function () {
            if (this.status === 204) {
                goButton.className = "ok";
            } else {
                goButton.className = "err";
            }
            setTimeout(function () {
                goButton.className = "";
            }, 1000);
        };
        xhr.send();

        urlInput.focus();
        urlInput.select();
    }

    goButton.onclick = function () {
        sendUrl();
    };

    urlInput.onkeydown = function (evt) {
        if (evt.keyCode === 13) {
            sendUrl();
            evt.preventDefault();
        }
    };

    urlInput.focus();
    urlInput.select();
}(window.document));
