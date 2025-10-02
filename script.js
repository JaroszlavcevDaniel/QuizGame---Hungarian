// START MENU => ELSŐ KÉRDÉS
let buffer = 0;

let startMenu = document.getElementById('startMenu');
let startButton = document.getElementById('startButton');
let firstQuestionDiv = document.getElementById('firstQuestionDiv');

startButton.addEventListener('click', () => {
    startMenu.style.display = 'none';
    firstQuestionDiv.style.display = 'block';
})

// ELSŐ KÉRDÉS 
let oneOneButtonWrong = document.getElementById('oneOneButtonWrong');
let oneTwoButtonWrong = document.getElementById('oneTwoButtonWrong');
let oneThreeButtonWrong = document.getElementById('oneThreeButtonWrong');
let oneFourButtonRight = document.getElementById('oneFourButtonRight');
let oneNext = document.getElementById('oneNext');
let firstQuestionAnswer = "";

oneOneButtonWrong.addEventListener('click', () => {
    oneNext.style.display = 'unset';
    oneOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    oneTwoButtonWrong.disabled = true;
    oneThreeButtonWrong.disabled = true;
    oneFourButtonRight.disabled = true;
    firstQuestionAnswer = "Helytelen";
});
oneTwoButtonWrong.addEventListener('click', () => {
    oneNext.style.display = 'unset';
    oneTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    oneOneButtonWrong.disabled = true;
    oneThreeButtonWrong.disabled = true;
    oneFourButtonRight.disabled = true;
    firstQuestionAnswer = "Helytelen";
});
oneThreeButtonWrong.addEventListener('click', () => {
    oneNext.style.display = 'unset';
    oneThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    oneOneButtonWrong.disabled = true;
    oneTwoButtonWrong.disabled = true;
    oneFourButtonRight.disabled = true;
    firstQuestionAnswer = "Helytelen";
});
oneFourButtonRight.addEventListener('click', () => {
    oneNext.style.display = 'unset';
    oneFourButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    oneOneButtonWrong.disabled = true;
    oneTwoButtonWrong.disabled = true;
    oneThreeButtonWrong.disabled = true;
    firstQuestionAnswer = "Helyes";
    buffer++;
});
// ÁTMENET MÁSODIK KÉRDÉSHEZ 
// secondQuestionDiv.document.getElementById('secondQuestionDiv');

oneNext.addEventListener('click', () => {
    firstQuestionDiv.style.display = 'none';
    document.getElementById('secondQuestionDiv').style.display = 'block';
})

// MÁSODIK KÉRDÉS
let TwoOneButtonRight = document.getElementById('TwoOneButtonRight');
let TwoTwoButtonWrong = document.getElementById('TwoTwoButtonWrong');
let TwoThreeButtonWrong = document.getElementById('TwoThreeButtonWrong');
let TwoFourButtonWrong = document.getElementById('TwoFourButtonWrong');
let TwoNext = document.getElementById('TwoNext');
let secondQuestionAnswer = "";

TwoOneButtonRight.addEventListener('click', () => {
    TwoNext.style.display = 'unset';
    TwoOneButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    TwoTwoButtonWrong.disabled = true;
    TwoThreeButtonWrong.disabled = true;
    TwoFourButtonWrong.disabled = true;
    secondQuestionAnswer = "Helyes";
    buffer++;

});
TwoTwoButtonWrong.addEventListener('click', () => {
    TwoNext.style.display = 'unset';
    TwoTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    TwoOneButtonRight.disabled = true;
    TwoThreeButtonWrong.disabled = true;
    TwoFourButtonWrong.disabled = true;
    secondQuestionAnswer = "Helytelen";
});
TwoThreeButtonWrong.addEventListener('click', () => {
    TwoNext.style.display = 'unset';
    TwoThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    TwoOneButtonRight.disabled = true;
    TwoTwoButtonWrong.disabled = true;
    TwoFourButtonWrong.disabled = true;
    secondQuestionAnswer = "Helytelen";
});
TwoFourButtonWrong.addEventListener('click', () => {
    TwoNext.style.display = 'unset';
    TwoFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    TwoOneButtonRight.disabled = true;
    TwoTwoButtonWrong.disabled = true;
    TwoThreeButtonWrong.disabled = true;
    secondQuestionAnswer = "Helytelen";
});

// ÁTMENET HARMADIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

TwoNext.addEventListener('click', () => {
    secondQuestionDiv.style.display = 'none';
    document.getElementById('thirdQuestionDiv').style.display = 'block';
})

// HARMADIK KÉRDÉS
let ThreeOneButtonWrong = document.getElementById('ThreeOneButtonWrong');
let ThreeTwoButtonWrong = document.getElementById('ThreeTwoButtonWrong');
let ThreeThreeButtonWrong = document.getElementById('ThreeThreeButtonWrong');
let ThreeFourButtonRight = document.getElementById('ThreeFourButtonRight');
let ThreeNext = document.getElementById('ThreeNext');
let thirdQuestionAnswer = "";

ThreeOneButtonWrong.addEventListener('click', () => {
    ThreeNext.style.display = 'unset';
    ThreeOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    ThreeFourButtonRight.disabled = true;
    TwoTwoButtonWrong.disabled = true;
    TwoThreeButtonWrong.disabled = true;
    thirdQuestionAnswer = "Helytelen";
});
ThreeTwoButtonWrong.addEventListener('click', () => {
    ThreeNext.style.display = 'unset';
    ThreeTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    ThreeFourButtonRight.disabled = true;
    ThreeOneButtonWrong.disabled = true;
    TwoThreeButtonWrong.disabled = true;
    thirdQuestionAnswer = "Helytelen";
});
ThreeThreeButtonWrong.addEventListener('click', () => {
    ThreeNext.style.display = 'unset';
    ThreeThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    ThreeFourButtonRight.disabled = true;
    ThreeOneButtonWrong.disabled = true;
    ThreeTwoButtonWrong.disabled = true;
    thirdQuestionAnswer = "Helytelen";
});
ThreeFourButtonRight.addEventListener('click', () => {
    ThreeNext.style.display = 'unset';
    ThreeFourButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    ThreeTwoButtonWrong.disabled = true;
    ThreeThreeButtonWrong.disabled = true;
    ThreeOneButtonWrong.disabled = true;
    thirdQuestionAnswer = "Helyes";
    buffer++;

});

// ÁTMENET NEGYEDIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

ThreeNext.addEventListener('click', () => {
    document.getElementById('thirdQuestionDiv').style.display = 'none';
    document.getElementById('fourthQuestionDiv').style.display = 'block';
})
// NEGYEDIK KÉRDÉS
let FourOneButtonRight = document.getElementById('FourOneButtonRight');
let FourTwoButtonWrong = document.getElementById('FourTwoButtonWrong');
let FourThreeButtonWrong = document.getElementById('FourThreeButtonWrong');
let FourFourButtonWrong = document.getElementById('FourFourButtonWrong');
let fourNext = document.getElementById('fourNext');
let fourthQuestionAnswer = "";

FourOneButtonRight.addEventListener('click', () => {
    fourNext.style.display = 'unset';
    FourOneButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    FourTwoButtonWrong.disabled = true;
    FourThreeButtonWrong.disabled = true;
    FourFourButtonWrong.disabled = true;
    fourthQuestionAnswer = "Helyes";
    buffer++;
});
FourTwoButtonWrong.addEventListener('click', () => {
    fourNext.style.display = 'unset';
    FourTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FourOneButtonRight.disabled = true;
    FourThreeButtonWrong.disabled = true;
    FourFourButtonWrong.disabled = true;
    fourthQuestionAnswer = "Helytelen";
});
FourThreeButtonWrong.addEventListener('click', () => {
    fourNext.style.display = 'unset';
    FourThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FourOneButtonRight.disabled = true;
    FourTwoButtonWrong.disabled = true;
    FourFourButtonWrong.disabled = true;
    fourthQuestionAnswer = "Helytelen";
});
FourFourButtonWrong.addEventListener('click', () => {
    fourNext.style.display = 'unset';
    FourFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FourOneButtonRight.disabled = true;
    FourTwoButtonWrong.disabled = true;
    FourThreeButtonWrong.disabled = true;
    fourthQuestionAnswer = "Helytelen";
});
// ÁTMENET ÖTÖDIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

fourNext.addEventListener('click', () => {
    document.getElementById('fourthQuestionDiv').style.display = 'none';
    document.getElementById('fifthQuestionDiv').style.display = 'block';
});
//  ÖTÖDIK KÉRDÉS

let FiveOneButtonWrong = document.getElementById('FiveOneButtonWrong');
let FiveTwoButtonWrong = document.getElementById('FiveTwoButtonWrong');
let FiveThreeButtonRight = document.getElementById('FiveThreeButtonRight');
let FiveFourButtonWrong = document.getElementById('FiveFourButtonWrong');
let fiveNext = document.getElementById('fiveNext');
let fifthQuestionAnswer = "";

FiveOneButtonWrong.addEventListener('click', () => {
    fiveNext.style.display = 'unset';
    FiveOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FiveTwoButtonWrong.disabled = true;
    FiveThreeButtonRight.disabled = true;
    FiveFourButtonWrong.disabled = true;
    fifthQuestionAnswer = "Helytelen";
});
FiveTwoButtonWrong.addEventListener('click', () => {
    fiveNext.style.display = 'unset';
    FiveTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FiveOneButtonWrong.disabled = true;
    FiveThreeButtonRight.disabled = true;
    FiveFourButtonWrong.disabled = true;
    fifthQuestionAnswer = "Helytelen";
});
FiveThreeButtonRight.addEventListener('click', () => {
    fiveNext.style.display = 'unset';
    FiveThreeButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    FiveOneButtonWrong.disabled = true;
    FiveTwoButtonWrong.disabled = true;
    FiveFourButtonWrong.disabled = true;
    fifthQuestionAnswer = "Helyes";
    buffer++;
});
FiveFourButtonWrong.addEventListener('click', () => {
    fiveNext.style.display = 'unset';
    FiveFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    FiveOneButtonWrong.disabled = true;
    FiveTwoButtonWrong.disabled = true;
    FiveThreeButtonRight.disabled = true;
    fifthQuestionAnswer = "Helytelen";
});

// ÁTMENET HATODIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

fiveNext.addEventListener('click', () => {
    document.getElementById('fifthQuestionDiv').style.display = 'none';
    document.getElementById('sixthQuestionDiv').style.display = 'block';
});
//  HATODIK KÉRDÉS

let SixOneButtonWrong = document.getElementById('SixOneButtonWrong');
let SixTwoButtonWrong = document.getElementById('SixTwoButtonWrong');
let SixThreeButtonWrong = document.getElementById('SixThreeButtonWrong');
let SixFourButtonRight = document.getElementById('SixFourButtonRight');
let sixNext = document.getElementById('sixNext');
let sixthQuestionAnswer = "";

SixOneButtonWrong.addEventListener('click', () => {
    sixNext.style.display = 'unset';
    SixOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SixTwoButtonWrong.disabled = true;
    SixThreeButtonWrong.disabled = true;
    SixFourButtonRight.disabled = true;
    sixthQuestionAnswer = "Helytelen";
});

SixTwoButtonWrong.addEventListener('click', () => {
    sixNext.style.display = 'unset';
    SixTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SixOneButtonWrong.disabled = true;
    SixThreeButtonWrong.disabled = true;
    SixFourButtonRight.disabled = true;
    sixthQuestionAnswer = "Helytelen";
});
SixThreeButtonWrong.addEventListener('click', () => {
    sixNext.style.display = 'unset';
    SixThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SixOneButtonWrong.disabled = true;
    SixTwoButtonWrong.disabled = true;
    SixFourButtonRight.disabled = true;
    sixthQuestionAnswer = "Helytelen";
});
SixFourButtonRight.addEventListener('click', () => {
    sixNext.style.display = 'unset';
    SixFourButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    SixOneButtonWrong.disabled = true;
    SixTwoButtonWrong.disabled = true;
    SixThreeButtonWrong.disabled = true;
    sixthQuestionAnswer = "Helyes";
    buffer++;
});

// ÁTMENET HETEDIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

sixNext.addEventListener('click', () => {
    document.getElementById('sixthQuestionDiv').style.display = 'none';
    document.getElementById('seventhQuestionDiv').style.display = 'block';
});

//  HETEDIK KÉRDÉS


let SevenOneButtonWrong = document.getElementById('SevenOneButtonWrong');
let SevenTwoButtonRight = document.getElementById('SevenTwoButtonRight');
let SevenThreeButtonWrong = document.getElementById('SevenThreeButtonWrong');
let SevenFourButtonWrong = document.getElementById('SevenFourButtonWrong');
let sevenNext = document.getElementById('sevenNext');
let seventhQuestionAnswer = "";

SevenOneButtonWrong.addEventListener('click', () => {
    sevenNext.style.display = 'unset';
    SevenOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SevenTwoButtonRight.disabled = true;
    SevenThreeButtonWrong.disabled = true;
    SevenFourButtonWrong.disabled = true;
    seventhQuestionAnswer = "Helytelen";
});
SevenTwoButtonRight.addEventListener('click', () => {
    sevenNext.style.display = 'unset';
    SevenTwoButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    SevenOneButtonWrong.disabled = true;
    SevenThreeButtonWrong.disabled = true;
    SevenFourButtonWrong.disabled = true;
    seventhQuestionAnswer = "Helyes";
    buffer++;
});
SevenThreeButtonWrong.addEventListener('click', () => {
    sevenNext.style.display = 'unset';
    SevenThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SevenOneButtonWrong.disabled = true;
    SevenTwoButtonRight.disabled = true;
    SevenFourButtonWrong.disabled = true;
    seventhQuestionAnswer = "Helytelen";
});
SevenFourButtonWrong.addEventListener('click', () => {
    sevenNext.style.display = 'unset';
    SevenFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    SevenOneButtonWrong.disabled = true;
    SevenTwoButtonRight.disabled = true;
    SevenThreeButtonWrong.disabled = true;
    seventhQuestionAnswer = "Helytelen";
});

// ÁTMENET NYOLCADIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

sevenNext.addEventListener('click', () => {
    document.getElementById('seventhQuestionDiv').style.display = 'none';
    document.getElementById('eighthQuestionDiv').style.display = 'block';
});

//  NYOLCADIK KÉRDÉS

let eightOneButtonWrong = document.getElementById('eightOneButtonWrong');
let eightTwoButtonRight = document.getElementById('eightTwoButtonRight');
let eightThreeButtonWrong = document.getElementById('eightThreeButtonWrong');
let eightFourButtonWrong = document.getElementById('eightFourButtonWrong');
let eightNext = document.getElementById('eightNext');
let eighthQuestionAnswer = "";

eightOneButtonWrong.addEventListener('click', () => {
    eightNext.style.display = 'unset';
    eightOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    eightTwoButtonRight.disabled = true;
    eightThreeButtonWrong.disabled = true;
    eightFourButtonWrong.disabled = true;
    eighthQuestionAnswer = "Helytelen";
});
eightTwoButtonRight.addEventListener('click', () => {
    eightNext.style.display = 'unset';
    eightTwoButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    eightOneButtonWrong.disabled = true;
    eightThreeButtonWrong.disabled = true;
    eightFourButtonWrong.disabled = true;
    eighthQuestionAnswer = "Helyes";
    buffer++;
});
eightThreeButtonWrong.addEventListener('click', () => {
    eightNext.style.display = 'unset';
    eightThreeButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    eightOneButtonWrong.disabled = true;
    eightTwoButtonRight.disabled = true;
    eightFourButtonWrong.disabled = true;
    eighthQuestionAnswer = "Helytelen";
});
eightFourButtonWrong.addEventListener('click', () => {
    eightNext.style.display = 'unset';
    eightFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    eightOneButtonWrong.disabled = true;
    eightTwoButtonRight.disabled = true;
    eightThreeButtonWrong.disabled = true;
    eighthQuestionAnswer = "Helytelen";
});

// ÁTMENET KILENCEDIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

eightNext.addEventListener('click', () => {
    document.getElementById('eighthQuestionDiv').style.display = 'none';
    document.getElementById('ninethQuestionDiv').style.display = 'block';
});

//  KILENCEDIK KÉRDÉS
let nineOneButtonWrong = document.getElementById('nineOneButtonWrong');
let nineTwoButtonWrong = document.getElementById('nineTwoButtonWrong');
let nineThreeButtonRight = document.getElementById('nineThreeButtonRight');
let nineFourButtonWrong = document.getElementById('nineFourButtonWrong');
let nineNext = document.getElementById('nineNext');
let ninethQuestionAnswer = "";

nineOneButtonWrong.addEventListener('click', () => {
    nineNext.style.display = 'unset';
    nineOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    nineTwoButtonWrong.disabled = true;
    nineThreeButtonRight.disabled = true;
    nineFourButtonWrong.disabled = true;
    ninethQuestionAnswer = "Helytelen";
});
nineTwoButtonWrong.addEventListener('click', () => {
    nineNext.style.display = 'unset';
    nineTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    nineOneButtonWrong.disabled = true;
    nineThreeButtonRight.disabled = true;
    nineFourButtonWrong.disabled = true;
    ninethQuestionAnswer = "Helytelen";
});
nineThreeButtonRight.addEventListener('click', () => {
    nineNext.style.display = 'unset';
    nineThreeButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    nineOneButtonWrong.disabled = true;
    nineTwoButtonWrong.disabled = true;
    nineFourButtonWrong.disabled = true;
    ninethQuestionAnswer = "Helyes";
    buffer++;
});
nineFourButtonWrong.addEventListener('click', () => {
    nineNext.style.display = 'unset';
    nineFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    nineOneButtonWrong.disabled = true;
    nineThreeButtonRight.disabled = true;
    nineThreeButtonRight.disabled = true;
    ninethQuestionAnswer = "Helytelen";
});

// ÁTMENET TIZEDIK KÉRDÉSHEZ 
// thirdQuestionDiv.document.getElementById('thirdQuestionDiv');

nineNext.addEventListener('click', () => {
    document.getElementById('ninethQuestionDiv').style.display = 'none';
    document.getElementById('tenthQuestionDiv').style.display = 'block';
});

// TIZEDIK KÉRDÉS 

let tenOneButtonWrong = document.getElementById('tenOneButtonWrong');
let tenTwoButtonWrong = document.getElementById('tenTwoButtonWrong');
let tenThreeButtonRight = document.getElementById('tenThreeButtonRight');
let tenFourButtonWrong = document.getElementById('tenFourButtonWrong');
let tenNext = document.getElementById('tenNext');
let tenthQuestionAnswer = "";

tenOneButtonWrong.addEventListener('click', () => {
    tenNext.style.display = 'unset';
    tenOneButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    tenTwoButtonWrong.disabled = true;
    tenThreeButtonRight.disabled = true;
    tenFourButtonWrong.disabled = true;
    tenthQuestionAnswer = "Helytelen";
});
tenTwoButtonWrong.addEventListener('click', () => {
    tenNext.style.display = 'unset';
    tenTwoButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    tenOneButtonWrong.disabled = true;
    tenThreeButtonRight.disabled = true;
    tenFourButtonWrong.disabled = true;
    tenthQuestionAnswer = "Helytelen";
});
tenThreeButtonRight.addEventListener('click', () => {
    tenNext.style.display = 'unset';
    tenThreeButtonRight.style.backgroundColor = 'rgb(81, 101, 255)';
    tenOneButtonWrong.disabled = true;
    tenTwoButtonWrong.disabled = true;
    tenFourButtonWrong.disabled = true;
    tenthQuestionAnswer = "Helyes";
    buffer++;
});
tenFourButtonWrong.addEventListener('click', () => {
    tenNext.style.display = 'unset';
    tenFourButtonWrong.style.backgroundColor = 'rgb(81, 101, 255)';
    tenOneButtonWrong.disabled = true;
    tenTwoButtonWrong.disabled = true;
    tenThreeButtonRight.disabled = true;
    tenthQuestionAnswer = "Helytelen";
});

// EREDMÉNY
let stats = document.getElementById('stats');
let answerOne = document.getElementById('answerOne');
let answerTwo = document.getElementById('answerTwo');
let answerThree = document.getElementById('answerThree');
let answerFour = document.getElementById('answerFour');
let answerFive = document.getElementById('answerFive');
let answerSix = document.getElementById('answerSix');
let answerSeven = document.getElementById('answerSeven');
let answerEight = document.getElementById('answerEight');
let answerNine = document.getElementById('answerNine');
let answerTen = document.getElementById('answerTen');
let someText = document.getElementById('someText');

let body = document.getElementById('body');
let lines = document.getElementById('lines');

tenNext.addEventListener('click', () => {
    document.getElementById('tenthQuestionDiv').style.display = 'none';
    document.getElementById('resultDiv').style.display = 'block';
    stats.innerText = `${buffer}/10`;
    answerOne.innerText = firstQuestionAnswer;
    answerTwo.innerText = secondQuestionAnswer;
    answerThree.innerText = thirdQuestionAnswer;
    answerFour.innerText = fourthQuestionAnswer;
    answerFive.innerText = fifthQuestionAnswer;
    answerSix.innerText = sixthQuestionAnswer;
    answerSeven.innerText = seventhQuestionAnswer;
    answerEight.innerText = eighthQuestionAnswer;
    answerNine.innerText = ninethQuestionAnswer;
    answerTen.innerText = tenthQuestionAnswer;
    resultDiv.style.justifyContent = "left";
    resultDiv.style.paddingLeft = '40px';
    lines.style.display = "unset";
    body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg')"
   
    if(buffer < 5) {
        someText.innerText = "Ön egyáltalán próbálkozott? 😟";
    } else if(buffer >= 5 && buffer <= 7) {
        someText.innerText = "Nem rossz 😏";
    } else if(buffer > 7 && buffer <= 9) {
        someText.innerText = "Ez igen! 😉 ";
    } else if(buffer > 9) {
        someText.innerText = "Ez tökeletes!!☺️😌 ";
    }
});