function FixCSS()
{
    let html = document.getElementsByTagName("head")[0].innerHTML;
    html = html.replaceAll("!important", "");
    document.getElementsByTagName("head")[0].innerHTML = html;
}