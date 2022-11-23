document.getElementById('first-name').onblur = function () {
    let valideName = /^(^[a-z]+['-\s]?[a-z]+)$/gi;
    let fname = document.getElementById('first-name').value
    let valideN = valideName.test(fname);
    if ((valideN === false) || (fname === "")) {
        document.getElementById('f-name').classList.add('erore')
        document.getElementById('first-name').style.borderColor = "red"
        return false
    } else if (valideN === true) {
        document.getElementById('f-name').classList.remove('erore')
        document.getElementById('first-name').style.borderColor = "green"
        return true
    }
}
document.getElementById('last-name').onblur = function () {
    let valideLN = /^(^[a-z]+['-\s]?[a-z]+)$/gi;
    let lname = document.getElementById('last-name').value;
    let valideLn = valideLN.test(lname);
    if ((valideLn === false) || (lname === "")) {
        document.getElementById('l-name').classList.add('erore')
        document.getElementById('last-name').style.borderColor = "red"
        return false
    } else if (valideLn === true) {
        document.getElementById('l-name').classList.remove('erore')
        document.getElementById('last-name').style.borderColor = "green"
        return true
    }
}
document.getElementById('email').onblur = function () {
    let email = document.getElementById('email').value;
    let valideEmail = /(\w+)?\.?(\w+)?\.?(\w+)?\d?\@(gmail|hotmail|yahoo|ofppt)\.(com|org|net|ma)/ig;
    let validmail = valideEmail.test(email);
    if ((validmail === false) || (email === "")) {
        document.getElementById('e-mail').classList.add('erore')
        document.getElementById('email').style.borderColor = "red"
        return false
    } else if (validmail === true) {
        document.getElementById('e-mail').classList.remove('erore')
        document.getElementById('email').style.borderColor = "green"
        return true
    }
}
document.getElementById('phone').onblur = function () {
    let number = document.getElementById('phone').value;
    let valideNumber = /(06|07|05)\d{8}/g;
    let validePhon = valideNumber.test(number);
    if ((validePhon === false) || (number === "")) {
        document.getElementById('number').classList.add('erore')
        document.getElementById('phone').style.borderColor = "red"
        return false
    } else if (validePhon === true) {
        document.getElementById('number').classList.remove('erore')
        document.getElementById('phone').style.borderColor = "green"
        return true
    }
}
document.getElementById('send').onclick = function () {
    // radio type
    let genders = document.getElementsByName('Gender')
    let groups = document.getElementsByName('Group')
    // checkbox type
    let allclub = document.getElementById('allclub').getElementsByTagName('input')
    // check variabls
    let groupschecked = ((groups[0].checked == true) || (groups[1].checked == true) || (groups[2].checked == true) || (groups[3].checked == true) || (groups[4].checked == true));
    let groupsnochecked = ((groups[0].checked == false) && (groups[1].checked == false) && (groups[2].checked == false) && (groups[3].checked == false) && (groups[4].checked == false));
    // gender radio
    if ((genders[0].checked == false) && (genders[1].checked == false)) {
        document.getElementById('gender').classList.add('erore')
        document.getElementById('allgender').style.color = 'red'
    } else if ((genders[0].checked == true) || (genders[1].checked == false)) {
        document.getElementById('gender').classList.remove('erore')
        document.getElementById('allgender').style.color = 'green'
    }
    // // group radio
    if (groupsnochecked) {
        document.getElementById('group').classList.add('erore')
        document.getElementById('allgroup').style.color = 'red'
    } else if (groupschecked) {
        document.getElementById('group').classList.remove('erore')
        document.getElementById('allgroup').style.color = 'green'
    }
    // checkbox
    if (checkbox(allclub)) {
        document.getElementById('club').classList.remove('erore')
        document.getElementById('allclub').style.color = 'green'
    } else {
        document.getElementById('club').classList.add('erore')
        document.getElementById('allclub').style.color = 'red'
    }
    checkP();
    if (checkP() == true) {
        document.getElementById('confirmation').href = 'confirmation.html'
    }else{
        return false
    }
}
function checkP() {
    let p = document.querySelectorAll("#form p")
    let table = []
    let result = true
    p.forEach(e => {
        table.push(e)
    });
    for (let i = 0; i < table.length; i++) {
        if (table[i].classList.contains("erore")) {
            return result = false
        }  
    }
    return result
}
function checkbox(elem) {
    let x = 0
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].checked == true) {
            x++
        }
    }
    if (x >= 1 && x <= 3) {
        return true
    } else {
        return false
    }
}