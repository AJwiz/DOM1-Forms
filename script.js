function createtitl(tagname, atname, atvalue, content) {
    var titl = document.createElement(tagname);
    titl.setAttribute(atname, atvalue);
    titl.innerHTML = content;
    return titl;
}
function createElemen(tagname, atname, atvalue) {
    var elem = document.createElement(tagname);
    elem.setAttribute(atname, atvalue);
    return elem;
}
function createlabl(tagname, atname, atvalue, atname2, atvalue2, content) {
    var label = document.createElement(tagname);
    label.setAttribute(atname, atvalue);
    label.setAttribute(atname2, atvalue2);
    label.innerText = content;
    return label;
}
function createin(tagnmae, atname, atvalue, atname2, atvalue2, atname3, atvalue3) {
    var inp = document.createElement(tagnmae);
    inp.setAttribute(atname, atvalue);
    inp.setAttribute(atname2, atvalue2);
    inp.setAttribute(atname3, atvalue3);
    return inp;
}
function createins(tagnmae, atname, atvalue, atname2, atvalue2, atname3, atvalue3, atname4, atvalue4) {
    var inps = document.createElement(tagnmae);
    inps.setAttribute(atname, atvalue);
    inps.setAttribute(atname2, atvalue2);
    inps.setAttribute(atname3, atvalue3);
    inps.setAttribute(atname4, atvalue4);
    return inps;
}
function createdata(tagname, content) {
    var data = document.createElement(tagname);
    data.innerHTML = content;
    return data;
}
function formData(data) {
    data.preventDefault;
    console.log(data);
}
var divc = createElemen("div", "class", "container");
var brak1 = document.createElement("br");
var divr = createElemen("div", "class", "row");
var brak2 = document.createElement("br");
// col-4 (Start)
var form = createElemen("form", "id", "form");
var divcol4 = createElemen("div", "class", "col-4");
var formt = createtitl("h3", "class", "form-title", "Form Submission");
//var brak3 = document.createElement("br");
var lab1 = createlabl("label", "class", "fLabel", "for", "first-name", "First Name:");
var brak4 = document.createElement("br");
var in1 = createin("input", "type", "text", "id", "first-name", "placeholder", "First Name");
var brak5 = document.createElement("br");
var lab2 = createlabl("label", "class", "fLabel", "for", "Last-name", "Last Name:");
var brak6 = document.createElement("br");
var in2 = createin("input", "type", "text", "id", "Last-name", "placeholder", "Last Name");
var brak7 = document.createElement("br");
var lab3 = createlabl("label", "class", "fLabel", "for", "Address1", "Address Line1:");
var brak8 = document.createElement("br");
var in3 = createin("input", "type", "text", "id", "Address1", "placeholder", "FlatNO, Street");
var brak9 = document.createElement("br");
var lab5 = createlabl("label", "class", "fLabel", "for", "pin", "Pincode:");
var brak12 = document.createElement("br");
var in5 = createin("input", "type", "number", "id", "pin", "placeholder", "Pincode");
var bre = document.createElement("br");
var bre1 = document.createElement("br");

var gti = createtitl("label", "for", "gti", "Gender:")
var brak13 = document.createElement("br");
var in6 = createins("input", "type", "radio", "id", "male", "name", "male-female", "value", "Male");
var lab6 = createlabl("label", "class", "gen", "for", "male", "Male");

var sp = document.createElement("span");
sp.innerHTML = "&nbsp;&nbsp;";
document.body.append(sp);

var in7 = createins("input", "type", "radio", "id", "female", "name", "male-female", "value", "Female");
var lab7 = createlabl("label", "class", "gen", "for", "female", "Female");
var brak14 = document.createElement("br");
var lab8 = createlabl("label", "class", "choice", "for", "favour", "Choice of Food:");
var opt = createtitl("span", "class", "options", "(must choose atleast 2 out of 5 options)");
var brak15 = document.createElement("br");
var in8 = createins("input", "type", "checkbox", "id", "fav1", "name", "fav", "value", "North Indian");
var f1 = createtitl("label", "for", "fav1", "North Indian");
var brak16 = document.createElement("br");
var in9 = createins("input", "type", "checkbox", "id", "fav2", "name", "fav", "value", "South Indian");
var f2 = createtitl("label", "for", "fav2", "South Indian");
var brak17 = document.createElement("br");
var in10 = createins("input", "type", "checkbox", "id", "fav3", "name", "fav", "value", "Chinese");
var f3 = createtitl("label", "for", "fav3", "Chinese");
var brak18 = document.createElement("br");
var in11 = createins("input", "type", "checkbox", "id", "fav4", "name", "fav", "value", "Japanese");
var f4 = createtitl("label", "for", "fav4", "Japanese");
var brak19 = document.createElement("br");
var in12 = createins("input", "type", "checkbox", "id", "fav5", "name", "fav", "value", "Sea Food");
var f5 = createtitl("label", "for", "fav5", "Sea Food");
var brak20 = document.createElement("br");
var brk1 = document.createElement("br");
var labl1 = createlabl("label", "class", "fLabel", "for", "state", "State:");
var brk2 = document.createElement("br");
var ins1 = createin("input", "type", "text", "id", "state", "placeholder", "State");
var brk3 = document.createElement("br");
var labl2 = createlabl("label", "class", "fLabel", "for", "country", "Country:");
var brk4 = document.createElement("br");
var ins2 = createin("input", "type", "text", "id", "country", "placeholder", "Country");
var brk5 = document.createElement("br");
var brk6 = document.createElement("br");
var buttn = createlabl("button", "type", "button", "onclick", "display()", "Submit")
// col-4 (END)

//col-8 (Start)
var divcol8 = createElemen("div", "class", "col-8");
var tablet = createtitl("h3", "class", "table-title", "Temporary Database");
var brc1 = document.createElement("br");
var table = createElemen("table", "class", "table");
var thead = createElemen("thead", "class", "thead-dark");
var tr1 = document.createElement("tr");
var th1 = createtitl("th", "scope", "col", "First Name");
var th2 = createtitl("th", "scope", "col", "Last Name");
var th3 = createtitl("th", "scope", "col", "Gender");
var th4 = createtitl("th", "scope", "col", "Address");
var th5 = createtitl("th", "scope", "col", "Pincode");
var th6 = createtitl("th", "scope", "col", "State");
var th7 = createtitl("th", "scope", "col", "Country");
var th8 = createtitl("th", "scope", "col", "Food");
var tbody = document.createElement("tbody");
//Function ONCLICK SUBMIT
function display() {
    var tr2 = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    let fname = document.getElementById("first-name").value;
    td1.innerHTML = fname;
    let Lname = document.getElementById("Last-name").value;
    td2.innerHTML = Lname;
    let ad1 = document.getElementById("Address1").value;
    td4.innerHTML = ad1;
    if (in6.checked) {
        let gen = document.getElementById("male").value;
        td3.innerHTML = gen;
    } else if (in7.checked) {
        let gen = document.getElementById("female").value;
        td3.innerHTML = gen;
    } else {
        alert(`Choose your Gender!`)
    }
    let pincode = document.getElementById("pin").value;
    td5.innerHTML = pincode;
    let district = document.getElementById("state").value;
    td6.innerHTML = district;
    let nation = document.getElementById("country").value;
    td7.innerHTML = nation;
    let temp = [];
    let favr = document.getElementsByName("fav");
    for (var i = 0; i < favr.length; i++) {
        if (favr[i].checked) {
            temp.push(favr[i].value);
        }
    }
    if (temp.length >= 2) {
        var foo = temp;
    } else {
        alert(`Choose Minimum 2 Favourite Foods`)
    }
    console.log(foo);
    td8.innerHTML = foo;
    tr2.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr2);

    document.getElementById("form").reset();
}
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr1);
table.append(thead, tbody);

divcol4.append(form);
form.append(formt, lab1, brak4, in1, brak5, lab2, brak6, in2, brak7, lab3, brak8, in3, brak9, lab5, brak12, in5, bre, bre1, gti, brak13, in6, lab6, sp, in7, lab7, brak14, lab8, opt, brak15, in8, f1, brak16, in9, f2, brak17, in10, f3, brak18, in11, f4, brak19, in12, f5, brak20, brk1, labl1, brk2, ins1, brk3, labl2, brk4, ins2, brk5, brk6, buttn);
divcol8.append(tablet, brc1, table);
divr.append(brak2, divcol4, divcol8);
divc.append(brak1, divr);
document.body.append(divc);