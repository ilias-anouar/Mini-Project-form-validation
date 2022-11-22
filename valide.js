function checkbox(elem) {
    let x = 0
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].checked == true) {
            x++
        }
        }
        if (x>=1 && x<=3) {
            return true
        }else{
            return false
        }
}
function valide() {
    // input value
    let fname = document.getElementById('first-name').value;
    let lname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('phone').value;
    // radio type
    let genders = document.getElementsByName('Gender')
    let groups = document.getElementsByName('Group')
    // checkbox type
    let allclub = document.getElementById('allclub').getElementsByTagName('input')
    // check variabls
    let groupschecked = ((groups[0].checked == true)||(groups[1].checked == true)||(groups[2].checked == true)||(groups[3].checked == true)||(groups[4].checked == true));
    let groupsnochecked = ((groups[0].checked == false)&&(groups[1].checked == false)&&(groups[2].checked == false)&&(groups[3].checked == false)&&(groups[4].checked == false));
    // regEx
    let valideEmail = /(\w+)?\.?(\w+)?\.?(\w+)?\d?\@(gmail|hotmail|yahoo|ofppt)\.(com|org|net|ma)/ig;
    let valideNumber = /(06|07|05)\d{8}/g;
    let valideName = /^(^[a-z]+['-\s]?[a-z]+)$/gi;
    let valideLN = /^(^[a-z]+['-\s]?[a-z]+)$/gi;
    // test
    let valideN = valideName.test(fname);
    let valideLn = valideLN.test(lname);
    let validmail = valideEmail.test(email);
    let validePhon = valideNumber.test(number);
    // variables 
    let vname = false
    let vlname = false
    let vemail = false
    let vnumber = false
    let vgender = false
    let vgroup = false
    let vclub = false
    // condition
    if (e = true) {
        // input value
        if ((valideN === false) || (fname === "")) {
            document.getElementById('f-name').style.display = "block"
            document.getElementById('first-name').style.borderColor = "red"
        } else if (valideN === true) {
            document.getElementById('f-name').style.display = "none"
            document.getElementById('first-name').style.borderColor = "green"
            vname = true
        }
        if ((valideLn === false) || (lname === "")) {
            document.getElementById('l-name').style.display = "block"
            document.getElementById('last-name').style.borderColor = "red"
        } else if (valideLn === true) {
            document.getElementById('l-name').style.display = "none"
            document.getElementById('last-name').style.borderColor = "green"
            vlname = true
        }
        if ((validmail === false) || (email === "")) {
            document.getElementById('e-mail').style.display = "block"
            document.getElementById('email').style.borderColor = "red"
        } else if (validmail === true) {
            document.getElementById('e-mail').style.display = "none"
            document.getElementById('email').style.borderColor = "green"
            vemail = true
        }
        if ((validePhon === false) || (number === "")) {
            document.getElementById('number').style.display = "block"
            document.getElementById('phone').style.borderColor = "red"
        } else if (validePhon === true) {
            document.getElementById('number').style.display = "none"
            document.getElementById('phone').style.borderColor = "green"
            vnumber = true
        }
        // gender radio
        if ((genders[0].checked == false)&&(genders[1].checked == false)) {
            document.getElementById('gender').style.display = "block"
            document.getElementById('allgender').style.color = 'red'
        } else if ((genders[0].checked == true)||(genders[1].checked == false)){
            document.getElementById('gender').style.display = "none"
            document.getElementById('allgender').style.color = 'green'
            vgender = true
        }
        // // group radio
        if (groupsnochecked) {
            document.getElementById('group').style.display = "block"
            document.getElementById('allgroup').style.color = 'red'
        }else if (groupschecked) {
            document.getElementById('group').style.display = "none"
            document.getElementById('allgroup').style.color = 'green'
            vgroup = true
        }
        // checkbox
        if (checkbox(allclub)) {
            document.getElementById('club').style.display = "none"
            document.getElementById('allclub').style.color = 'green'
            vclub = true
        }else{
            document.getElementById('club').style.display = "block"
            document.getElementById('allclub').style.color = 'red'
        }
        return vname,vlname,vnumber,vemail,vgender,vgroup,vclub
    }
}
document.getElementById('form').onsubmit = function() {
    valide()
    if (vname || vlname || vnumber || vemail || vgender || vgroup || vclub) {
        return false
    }else if(vname == true && vlname == true && vnumber == true && vemail == true && vgender == true && vgroup == true && vclub == true){
        return true 
    }
}