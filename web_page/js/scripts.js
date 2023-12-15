window.onload = main

const lang = {
    ENG: "en-GB",
    TR: "tr-TR"
}

async function main() {
    changeLangTo(lang.ENG)
}

async function fetcDictionary() {
    return await (await fetch("./web_page/js/text.json")).json()
}

function updateLang(dictionary, selectedLang) {
    Object.keys(dictionary).forEach(element => updateAllByClassName(element, dictionary, selectedLang))
}

function updateAllByClassName(className, dictionary, selectedLang) {
    const aboutTitle = document.getElementsByClassName(className)
    for (let i = 0; i < aboutTitle.length; i++) {
        aboutTitle[i].innerText = dictionary[className][selectedLang];
    }
}

async function changeLangTo(selectedLang) {
    updateLang(await fetcDictionary(), selectedLang)
}


