const writeFile = (name, value) => {
    var val = value;
    if (value === undefined) {
        val = "";
    }
    var download = document.createElement("a");
    download.href = "data:text/plain;content-disposition=attachment;filename=file," + val;
    download.download = name;
    download.style.display = "none";
    download.id = "download"; document.body.appendChild(download);
    document.getElementById("download").click();
    document.body.removeChild(download);
}
export default writeFile