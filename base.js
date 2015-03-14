var docs = document.getElementsByClassName("content");

var iNow = 1;

function hidden(obj) {
    obj.style.display = "none";
}

function show(obj) {
    obj.style.display = "block";
}

function change(num) {
    if (num <= 1) {
        num = 1;
    } else if (num >= docs.length) {
        num = docs.length;
    }
    var x = num.toString();
    var src = "/image/" + x + ".jpg";
    document.getElementById("img").src = src;
}

function updateContent(num) {
    for (var i = 0; i < docs.length; i++) {
        hidden(docs[i]);
    }
    if (num >= docs.length) {
        num = docs.length;
    } else if (num <= 0) {
        num = 0;
    }
    show(docs[num - 1]);
}

function keyPress(keycode) {
    switch (keycode) {
        case 37:
            iNow--;
            if (iNow <= 1) {
                iNow = 1;
            }
            if (iNow == 1 || iNow == docs.length) {
                document.getElementsByTagName("header")[0].style.color = "red";
            } else {
                document.getElementsByTagName("header")[0].style.color = "white";
            }
            change(iNow);
            updateContent(iNow);
            break;
        case 39:
            iNow++;
            if (iNow >= docs.length) {
                iNow = docs.length;
            }
            if (iNow == 1 || iNow == docs.length) {
                document.getElementsByTagName("header")[0].style.color = "red";
            } else {
                document.getElementsByTagName("header")[0].style.color = "white";
            }
            change(iNow);
            updateContent(iNow);
            break;
    }
}