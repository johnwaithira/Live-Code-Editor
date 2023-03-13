function run()
{
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;
    var output = document.getElementById("output");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js)
}