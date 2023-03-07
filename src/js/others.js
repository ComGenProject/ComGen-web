function alwaysDisplayName(mob, name) {
    console.log("hello");
    document.getElementById('outputCommand').value = "/summon minecraft:" + mob + " ~ ~1 ~ {CustomName:\"" + name + "\",CustomNaVisible:1}"
}