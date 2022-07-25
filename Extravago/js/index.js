
let whatsapp = document.querySelectorAll(".whatsapp")
let facebook = document.querySelectorAll(".facebook")
let twitter = document.querySelectorAll(".twitter")
let telegram = document.querySelectorAll(".telegram")
let shareTitle = document.querySelectorAll('#blog-title')


const pageUrl = location.href
for (let i = 0; i < whatsapp.length; i++) {
    const sendMessage = `Read this awesome article - ${shareTitle[i].innerHTML}`

    const whatsappLink = `https://wa.me/?text=${sendMessage}. \n${pageUrl}`
    const facebookLink = `https://www.facebook.com`
    const twitterLink = `https://twitter.com/intent/tweet?text=${sendMessage}. \n${pageUrl}`
    const telegramLink = `https://t.me/share/url?url=${pageUrl}&text=${sendMessage}`

    whatsapp[i].onclick = function () {
        window.open(url = whatsappLink, target = 'blank');
    }

    telegram[i].onclick = function () {
        window.open(url = telegramLink, target = 'blank');
    }

    twitter[i].onclick = function () {
        window.open(url = twitterLink, target = 'blank');
    }
}









var copyBtn = document.querySelectorAll("#text-copy-btn");
var shareText = document.querySelectorAll("#share-message");
var copyBtnWrapper = document.querySelectorAll(".btn-copy");
for (let i = 0; i < copyBtn.length; i++) {
    shareText[i].innerHTML = `Read this awesome article : ${shareTitle[i].innerHTML}\n${pageUrl}`
    copyBtn[i].onclick = function () {
        for (let i = 0; i < shareText.length; i++) {
            shareText[i].focus();
            shareText[i].select();
            shareText[i].setSelectionRange(0, 99999);
            document.execCommand("copy");
        }
        copyBtnWrapper[i].classList.add("active");
        setTimeout(function () {
            copyBtnWrapper[i].classList.remove("active");
        }, 2500)
    }

}






document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.querySelector("#country-name");
    const countryCodeSelect = document.querySelector("#country-code");
    let countryList = document.querySelector('#country-list')
    let countryCodeList = document.querySelector('#country-code-list')

    fetch("CountryCodes.json")
        .then(response => response.json())
        .then(data => {
            let countryName = '<option label=" "></option>';
            let countryCode = '<option label=" "></option>';
            let list = '';
            let codeList = '';
            data.forEach(country => {
                countryName += `<option value="${country.name}">${country.name}</option>`;
                countryCode += `<option value="${country.dial_code}">${country.dial_code}</option>`;
                list += `<option value="${country.name}">${country.name}</option>`;
                codeList += `<option value="${country.dial_code}">${country.dial_code}</option>`;
            });


            countrySelect.innerHTML = countryName;
            countryCodeSelect.innerHTML = countryCode;
            countryList.innerHTML = list;
            countryCodeList.innerHTML = codeList;





        })
        .catch(error => {
            console.log(error);
        })

})



















