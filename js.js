function add(num){
    document.form.textdisplay.value = document.form.textdisplay.value+num;
}
function Clear(){
document.form.textdisplay.value = "";
}
function del() {
var nilai = document.form.textdisplay.value;
document.form.textdisplay.value = nilai.substring(0, nilai.length - 1);
}
 function equal() {
var nilai = document.form.textdisplay.value;
document.form.textdisplay.value = eval(nilai);
   }