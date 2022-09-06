import { langs } from "./langs.js"

let offset = 0;
let offsetSecond = 0;
let offsetThird = 0;
let offsetFourth = 0;
const sliderLine = document.querySelector('.main__slider-slider')
const sliderEthno = document.querySelector('.main__ethno-ethno')
const sliderReviews = document.querySelector('.main__reviews-reviews') 
const sliderAdditionally = document.querySelector('.main__additionally-additionally') 


document.querySelector('.main__right-click').addEventListener('click', function(){
  offset += 849;
  if(offset > 6792){
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
})

document.querySelector('.main__left-click').addEventListener('click', function(){
  offset -= 849;
  if(offset < 0 ){
    offset = 6792;
  }
  sliderLine.style.left = -offset + 'px';
})

//////////

document.querySelector('.main__right-ethno').addEventListener('click', function(){
  offsetSecond += 1200;
  if(offsetSecond > 6000){
    offsetSecond = 0;
  }
  sliderEthno.style.left = -offsetSecond + 'px';
})

document.querySelector('.main__left-ethno').addEventListener('click', function(){
  offsetSecond -= 1200;
  if(offsetSecond < 0 ){
    offsetSecond = 6000;
  }
  sliderEthno.style.left = -offsetSecond + 'px';
})

///////////

document.querySelector('.main__right-reviews').addEventListener('click', function(){
  offsetThird += 1222;
  if(offsetThird >  7332){
    offsetThird = 0;
  }
  sliderReviews.style.left = -offsetThird + 'px';
})

document.querySelector('.main__left-reviews').addEventListener('click', function(){
  offsetThird -= 1222;
  if(offsetThird < 0 ){
    offsetThird = 7332;
  }
  sliderReviews.style.left = -offsetThird + 'px';
})

///////////

document.querySelector('.main__right-additionally').addEventListener('click', function(){
  offsetFourth += 1500;
  if(offsetFourth >  6000){
    offsetFourth = 0;
  }
  sliderAdditionally.style.left = -offsetFourth + 'px';
})

document.querySelector('.main__left-additionally').addEventListener('click', function(){
  offsetFourth -= 1500;
  if(offsetFourth < 0 ){
    offsetFourth = 6000;
  }
  sliderAdditionally.style.left = -offsetFourth + 'px';
})


/////////


function keydownHandler(e) {
    var evt = e ? e:event;
      var keyCode = evt.keyCode;
    
      if (keyCode==38 || keyCode==39 || keyCode==40 || keyCode==37){ //arrow keys
    e.preventDefault()
    scrollTo(0,0);
    }
    }
    
    document.onkeydown=keydownHandler;



// ЯЗЫК

const modalActivate = document.querySelector('.modalActivate')
const modal = document.querySelector('.modal__lang')


modalActivate.addEventListener('click', (e) => {
  modal.classList.toggle('modalEc')
  modalActivate.prepend(modal)
})

const langRU = document.querySelector(".russ")
const langKG = document.querySelector(".kyrg")
const langEN = document.querySelector(".engl")

const headerLangTwo = document.querySelector('.headerLangTwo')
const headerLangSix = document.querySelector('.headerLangSix')

const blockOneLangOne = document.querySelector('.blockOneLangOne')
const blockOneLangTwo = document.querySelector('.blockOneLangTwo')
const blockOneLangTwoT = document.querySelector('.blockOneLangTwoT')
const blockOneLangThre = document.querySelector('.blockOneLangThre')
const blockOneLangThreT = document.querySelector('.blockOneLangThreT')

const blockTwoLangOne = document.querySelector('.blockTwoLangOne')
const blockTwoLangTwo = document.querySelector('.blockTwoLangTwo')
const blockTwoLangThre = document.querySelector('.blockTwoLangThre')
const blockTwoLangFour = document.querySelector('.blockTwoLangFour')
const blockTwoLangFive = document.querySelector('.blockTwoLangFive')

const blockThreLangOne = document.querySelector('.blockThreLangOne')
const blockThreLangTwo = document.querySelector('.blockThreLangTwo')
const blockThreLangThre = document.querySelector('.blockThreLangThre')
const blockThreLangFour = document.querySelector('.blockThreLangFour')
const blockThreLangFive = document.querySelector('.blockThreLangFive')
const blockThreLangSix = document.querySelector('.blockThreLangSix')

const blockFourLangOne = document.querySelector('.blockFourLangOne')
const blockFourLangTwo = document.querySelector('.blockFourLangTwo')

const blockFiveLangOne = document.querySelector('.blockFiveLangOne')
const blockFiveLangTwo = document.querySelector('.blockFiveLangTwo')

const blockSixLangOne = document.querySelector('.blockSixLangOne')
const blockSixLangTwo = document.querySelector('.blockSixLangTwo')
// const blockSixLangThre = document.querySelector('.blockSixLangThre')
// const blockSixLangThreT = document.querySelector('.blockSixLangThreT')

const blockSevenLangOne = document.querySelector('.blockSevenLangOne')
const blockSevenLangTwo = document.querySelector('.blockSevenLangTwo')
const blockSevenLangTwoT = document.querySelector('.blockSevenLangTwoT')
const blockSevenLangThre = document.querySelector('.blockSevenLangThre')
const blockSevenLangFour = document.querySelector('.blockSevenLangFour')
const blockSevenLangFive = document.querySelector('.blockSevenLangFive')

const blockEightLangOne = document.querySelector('.blockEightLangOne')
// const blockEightLangTwo = document.querySelector('.blockEightLangTwo')

const blockFirstSliderLang = document.querySelector('.blockFirstSliderLang')
const blockSecondSliderLang = document.querySelector('.blockSecondSliderLang')
const blockThirdSliderLang = document.querySelector('.blockThirdSliderLang')
const blockFourthSliderLang = document.querySelector('.blockFourthSliderLang')
const blockFifthSliderLang = document.querySelector('.blockFifthSliderLang')
const blockSixthSliderLang = document.querySelector('.blockSixthSliderLang')
const blockSeventhSliderLang = document.querySelector('.blockSeventhSliderLang')
const blockEighthSliderLang = document.querySelector('.blockEighthSliderLang')
const blockNinthSliderLang = document.querySelector('.blockNinthSliderLang')
const blockTenthSliderLang = document.querySelector('.blockTenthSliderLang')
const blockEleventhSliderLang = document.querySelector('.blockEleventhSliderLang')
const blockTwelfthSliderLang = document.querySelector('.blockTwelfthSliderLang')
const blockThirteenthSliderLang = document.querySelector('.blockThirteenthSliderLang')
const blockFourteenthSliderLang = document.querySelector('.blockFourteenthSliderLang')
const blockFifteenthSliderLang = document.querySelector('.blockFifteenthSliderLang')
const blockSixteenthSliderLang = document.querySelector('.blockSixteenthSliderLang')
const blockSeventeenthSliderLang = document.querySelector('.blockSeventeenthSliderLang')
const blockEighteenthSliderLang = document.querySelector('.blockEighteenthSliderLang')

const blockEthnoLangFirst = document.querySelector('.blockEthnoLangFirst')
const blockEthnoLangSecond = document.querySelector('.blockEthnoLangSecond')
const blockEthnoLangThird = document.querySelector('.blockEthnoLangThird')
const blockEthnoLangFourth = document.querySelector('.blockEthnoLangFourth')
const blockEthnoLangFifth = document.querySelector('.blockEthnoLangFifth')
const blockEthnoLangSixth = document.querySelector('.blockEthnoLangSixth')
const blockEthnoLangSeventh = document.querySelector('.blockEthnoLangSeventh')

const blockReviewsFirst = document.querySelector('.blockReviewsFirst')
const blockReviewsSecond = document.querySelector('.blockReviewsSecond')
const blockReviewsThird = document.querySelector('.blockReviewsThird')
const blockReviewsFourth = document.querySelector('.blockReviewsFourth')
const blockReviewsFifth = document.querySelector('.blockReviewsFifth')
const blockReviewsSixth = document.querySelector('.blockReviewsSixth')
const blockReviewsSeventh = document.querySelector('.blockReviewsSeventh')


const blockReviewsAndrei = document.querySelector('.blockReviewsAndrei')
const blockReviewsMyrza = document.querySelector('.blockReviewsMyrza')
const blockReviewsLara = document.querySelector('.blockReviewsLara')
const blockReviewsMunara = document.querySelector('.blockReviewsMunara')
const blockReviewsEmir = document.querySelector('.blockReviewsEmir')
const blockReviewsJohn = document.querySelector('.blockReviewsJohn')
const blockReviewsBaysal = document.querySelector('.blockReviewsBaysal')



const blockBeforeFirst = document.querySelector('.blockBeforeFirst')

const blockNineLangOne = document.querySelector('.blockNineLangOne')

// document.querySelector("person").innerHTML = str1+ "<br/><b>" + str2 + "</b><br/>";

langEN.addEventListener('click', () => {

blockReviewsFirst.innerText = langs.blockReviewsFirst.en
blockReviewsSecond.innerText = langs.blockReviewsSecond.en
blockReviewsThird.innerText = langs.blockReviewsThird.en
blockReviewsFourth.innerText = langs.blockReviewsFourth.en
blockReviewsFifth.innerText = langs.blockReviewsFifth.en
blockReviewsSixth.innerText = langs.blockReviewsSixth.en
blockReviewsSeventh.innerText = langs.blockReviewsSeventh.en

blockReviewsAndrei.innerText = langs.blockReviewsAndrei.en
blockReviewsMyrza.innerText = langs.blockReviewsMyrza.en
blockReviewsLara.innerText = langs.blockReviewsLara.en
blockReviewsMunara.innerText = langs.blockReviewsMunara.en
blockReviewsEmir.innerText = langs.blockReviewsEmir.en
blockReviewsJohn.innerText = langs.blockReviewsJohn.en
blockReviewsBaysal.innerText = langs.blockReviewsBaysal.en



headerLangTwo.innerText = langs.headerLangTwo.en
headerLangSix.innerText = langs.headerLangSix.en
blockOneLangOne.innerText = langs.blockOneLangOne.en
blockOneLangTwo.innerText = langs.blockOneLangTwo.en
blockOneLangTwoT.innerText = langs.blockOneLangTwoT.en
blockOneLangThre.innerText = langs.blockOneLangThre.en
blockOneLangThreT.innerText = langs.blockOneLangThreT.en
blockTwoLangOne.innerText = langs.blockTwoLangOne.en
blockTwoLangTwo.innerText = langs.blockTwoLangTwo.en
blockTwoLangThre.innerText = langs.blockTwoLangThre.en
blockTwoLangFour.innerText = langs.blockTwoLangFour.en
blockTwoLangFive.innerText = langs.blockTwoLangFive.en
blockThreLangOne.innerText = langs.blockThreLangOne.en
blockThreLangTwo.innerText = langs.blockThreLangTwo.en
blockThreLangThre.innerText = langs.blockThreLangThre.en
blockThreLangFour.innerText = langs.blockThreLangFour.en
blockThreLangFive.innerText = langs.blockThreLangFive.en
blockThreLangSix.innerText = langs.blockThreLangSix.en
blockFourLangOne.innerText = langs.blockFourLangOne.en
blockFourLangTwo.innerText = langs.blockFourLangTwo.en
blockFiveLangOne.innerText = langs.blockFiveLangOne.en
blockFiveLangTwo.innerText = langs.blockFiveLangTwo.en
blockSixLangOne.innerText = langs.blockSixLangOne.en
blockSixLangTwo.innerText = langs.blockSixLangTwo.en
blockSevenLangOne.innerText = langs.blockSevenLangOne.en
blockSevenLangTwo.innerText = langs.blockSevenLangTwo.en
blockSevenLangTwoT.innerText = langs.blockSevenLangTwoT.en
blockSevenLangThre.innerText = langs.blockSevenLangThre.en
blockSevenLangFour.innerText = langs.blockSevenLangFour.en
blockSevenLangFive.innerText = langs.blockSevenLangFive.en
blockEightLangOne.innerText = langs.blockEightLangOne.en
// blockEightLangTwo.innerText = langs.blockEightLangTwo.en
blockNineLangOne.innerText = langs.blockNineLangOne.en

blockFirstSliderLang.innerText = langs.blockFirstSliderLang.en
blockSecondSliderLang.innerText = langs.blockSecondSliderLang.en
blockThirdSliderLang.innerText = langs.blockThirdSliderLang.en
blockFourthSliderLang.innerText = langs.blockFourthSliderLang.en
blockFifthSliderLang.innerText = langs.blockFifthSliderLang.en
blockSixthSliderLang.innerText = langs.blockSixthSliderLang.en
blockSeventhSliderLang.innerText = langs.blockSeventhSliderLang.en
blockEighthSliderLang.innerText = langs.blockEighthSliderLang.en
blockNinthSliderLang.innerText = langs.blockNinthSliderLang.en
blockTenthSliderLang.innerText = langs.blockTenthSliderLang.en
blockEleventhSliderLang.innerText = langs.blockEleventhSliderLang.en
blockTwelfthSliderLang.innerText = langs.blockTwelfthSliderLang.en
blockThirteenthSliderLang.innerText = langs.blockThirteenthSliderLang.en
blockFourteenthSliderLang.innerText = langs.blockFourteenthSliderLang.en
blockFifteenthSliderLang.innerText = langs.blockFifteenthSliderLang.en
blockSixteenthSliderLang.innerText = langs.blockSixteenthSliderLang.en
blockSeventeenthSliderLang.innerText = langs.blockSeventeenthSliderLang.en
blockEighteenthSliderLang.innerText = langs.blockEighteenthSliderLang.en

blockEthnoLangFirst.innerText = langs.blockEthnoLangFirst.en
blockEthnoLangSecond.innerText = langs.blockEthnoLangSecond.en
blockEthnoLangThird.innerText = langs.blockEthnoLangThird.en
blockEthnoLangFourth.innerText = langs.blockEthnoLangFourth.en
blockEthnoLangFifth.innerText = langs.blockEthnoLangFifth.en
blockEthnoLangSixth.innerText = langs.blockEthnoLangSixth.en

document.getElementById("rr").innerHTML = "There is only one minus, \ the minus is that everything is done at the level of professionalism"; 

blockBeforeFirst.innerText = langs.blockBeforeFirst.en
})

langKG.addEventListener('click', () => {
  
headerLangTwo.innerText = langs.headerLangTwo.kg
headerLangSix.innerText = langs.headerLangSix.kg
blockOneLangOne.innerText = langs.blockOneLangOne.kg
blockOneLangTwo.innerText = langs.blockOneLangTwo.kg
blockOneLangTwoT.innerText = langs.blockOneLangTwoT.kg
blockOneLangThre.innerText = langs.blockOneLangThre.kg
blockOneLangThreT.innerText = langs.blockOneLangThreT.kg
blockTwoLangOne.innerText = langs.blockTwoLangOne.kg
blockTwoLangTwo.innerText = langs.blockTwoLangTwo.kg
blockTwoLangThre.innerText = langs.blockTwoLangThre.kg
blockTwoLangFour.innerText = langs.blockTwoLangFour.kg
blockTwoLangFive.innerText = langs.blockTwoLangFive.kg
blockThreLangOne.innerText = langs.blockThreLangOne.kg
blockThreLangTwo.innerText = langs.blockThreLangTwo.kg
blockThreLangThre.innerText = langs.blockThreLangThre.kg
blockThreLangFour.innerText = langs.blockThreLangFour.kg
blockThreLangFive.innerText = langs.blockThreLangFive.kg
blockThreLangSix.innerText = langs.blockThreLangSix.kg
blockFourLangOne.innerText = langs.blockFourLangOne.kg
blockFourLangTwo.innerText = langs.blockFourLangTwo.kg
blockFiveLangOne.innerText = langs.blockFiveLangOne.kg
blockFiveLangTwo.innerText = langs.blockFiveLangTwo.kg
blockSixLangOne.innerText = langs.blockSixLangOne.kg
blockSixLangTwo.innerText = langs.blockSixLangTwo.kg
// blockSixLangThre.innerText = langs.blockSixLangThre.kg
// blockSixLangThreT.innerText = langs.blockSixLangThreT.kg
blockSevenLangOne.innerText = langs.blockSevenLangOne.kg
blockSevenLangTwo.innerText = langs.blockSevenLangTwo.kg
blockSevenLangTwoT.innerText = langs.blockSevenLangTwoT.kg
blockSevenLangThre.innerText = langs.blockSevenLangThre.kg
blockSevenLangFour.innerText = langs.blockSevenLangFour.kg
blockSevenLangFive.innerText = langs.blockSevenLangFive.kg
blockEightLangOne.innerText = langs.blockEightLangOne.kg
// blockEightLangTwo.innerText = langs.blockEightLangTwo.kg
blockNineLangOne.innerText = langs.blockNineLangOne.kg

blockFirstSliderLang.innerText = langs.blockFirstSliderLang.kg
blockSecondSliderLang.innerText = langs.blockSecondSliderLang.kg
blockThirdSliderLang.innerText = langs.blockThirdSliderLang.kg
blockFourthSliderLang.innerText = langs.blockFourthSliderLang.kg
blockFifthSliderLang.innerText = langs.blockFifthSliderLang.kg
blockSixthSliderLang.innerText = langs.blockSixthSliderLang.kg
blockSeventhSliderLang.innerText = langs.blockSeventhSliderLang.kg
blockEighthSliderLang.innerText = langs.blockEighthSliderLang.kg
blockNinthSliderLang.innerText = langs.blockNinthSliderLang.kg
blockTenthSliderLang.innerText = langs.blockTenthSliderLang.kg
blockEleventhSliderLang.innerText = langs.blockEleventhSliderLang.kg
blockTwelfthSliderLang.innerText = langs.blockTwelfthSliderLang.kg
blockThirteenthSliderLang.innerText = langs.blockThirteenthSliderLang.kg
blockFourteenthSliderLang.innerText = langs.blockFourteenthSliderLang.kg
blockFifteenthSliderLang.innerText = langs.blockFifteenthSliderLang.kg
blockSixteenthSliderLang.innerText = langs.blockSixteenthSliderLang.kg
blockSeventeenthSliderLang.innerText = langs.blockSeventeenthSliderLang.kg
blockEighteenthSliderLang.innerText = langs.blockEighteenthSliderLang.kg

blockEthnoLangFirst.innerText = langs.blockEthnoLangFirst.kg
blockEthnoLangSecond.innerText = langs.blockEthnoLangSecond.kg
blockEthnoLangThird.innerText = langs.blockEthnoLangThird.kg
blockEthnoLangFourth.innerText = langs.blockEthnoLangFourth.kg
blockEthnoLangFifth.innerText = langs.blockEthnoLangFifth.kg
blockEthnoLangSixth.innerText = langs.blockEthnoLangSixth.kg


blockReviewsFirst.innerText = langs.blockReviewsFirst.kg
blockReviewsSecond.innerText = langs.blockReviewsSecond.kg
blockReviewsThird.innerText = langs.blockReviewsThird.kg
blockReviewsFourth.innerText = langs.blockReviewsFourth.kg
blockReviewsFifth.innerText = langs.blockReviewsFifth.kg
blockReviewsSixth.innerText = langs.blockReviewsSixth.kg
blockReviewsSeventh.innerText = langs.blockReviewsSeventh.kg

blockReviewsAndrei.innerText = langs.blockReviewsAndrei.kg
blockReviewsMyrza.innerText = langs.blockReviewsMyrza.kg
blockReviewsLara.innerText = langs.blockReviewsLara.kg
blockReviewsMunara.innerText = langs.blockReviewsMunara.kg
blockReviewsEmir.innerText = langs.blockReviewsEmir.kg
blockReviewsJohn.innerText = langs.blockReviewsJohn.kg
blockReviewsBaysal.innerText = langs.blockReviewsBaysal.kg

blockBeforeFirst.innerText = langs.blockBeforeFirst.kg
})

langRU.addEventListener('click', () => {
headerLangTwo.innerText = langs.headerLangTwo.ru
headerLangSix.innerText = langs.headerLangSix.ru
blockOneLangOne.innerText = langs.blockOneLangOne.ru
blockOneLangTwo.innerText = langs.blockOneLangTwo.ru
blockOneLangTwoT.innerText = langs.blockOneLangTwoT.ru
blockOneLangThre.innerText = langs.blockOneLangThre.ru
blockOneLangThreT.innerText = langs.blockOneLangThreT.ru
blockTwoLangOne.innerText = langs.blockTwoLangOne.ru
blockTwoLangTwo.innerText = langs.blockTwoLangTwo.ru
blockTwoLangThre.innerText = langs.blockTwoLangThre.ru
blockTwoLangFour.innerText = langs.blockTwoLangFour.ru
blockTwoLangFive.innerText = langs.blockTwoLangFive.ru
blockThreLangOne.innerText = langs.blockThreLangOne.ru
blockThreLangTwo.innerText = langs.blockThreLangTwo.ru
blockThreLangThre.innerText = langs.blockThreLangThre.ru
blockThreLangFour.innerText = langs.blockThreLangFour.ru
blockThreLangFive.innerText = langs.blockThreLangFive.ru
blockThreLangSix.innerText = langs.blockThreLangSix.ru
blockFourLangOne.innerText = langs.blockFourLangOne.ru
blockFourLangTwo.innerText = langs.blockFourLangTwo.ru
blockFiveLangOne.innerText = langs.blockFiveLangOne.ru
blockFiveLangTwo.innerText = langs.blockFiveLangTwo.ru
blockSixLangOne.innerText = langs.blockSixLangOne.ru
blockSixLangTwo.innerText = langs.blockSixLangTwo.ru
// blockSixLangThre.innerText = langs.blockSixLangThre.ru
// blockSixLangThreT.innerText = langs.blockSixLangThreT.ru
blockSevenLangOne.innerText = langs.blockSevenLangOne.ru
blockSevenLangTwo.innerText = langs.blockSevenLangTwo.ru
blockSevenLangTwoT.innerText = langs.blockSevenLangTwoT.ru
blockSevenLangThre.innerText = langs.blockSevenLangThre.ru
blockSevenLangFour.innerText = langs.blockSevenLangFour.ru
blockSevenLangFive.innerText = langs.blockSevenLangFive.ru
blockEightLangOne.innerText = langs.blockEightLangOne.ru
// blockEightLangTwo.innerText = langs.blockEightLangTwo.ru
blockNineLangOne.innerText = langs.blockNineLangOne.ru

blockFirstSliderLang.innerText = langs.blockFirstSliderLang.ru
blockSecondSliderLang.innerText = langs.blockSecondSliderLang.ru
blockThirdSliderLang.innerText = langs.blockThirdSliderLang.ru
blockFourthSliderLang.innerText = langs.blockFourthSliderLang.ru
blockFifthSliderLang.innerText = langs.blockFifthSliderLang.ru
blockSixthSliderLang.innerText = langs.blockSixthSliderLang.ru
blockSeventhSliderLang.innerText = langs.blockSeventhSliderLang.ru
blockEighthSliderLang.innerText = langs.blockEighthSliderLang.ru
blockNinthSliderLang.innerText = langs.blockNinthSliderLang.ru
blockTenthSliderLang.innerText = langs.blockTenthSliderLang.ru
blockEleventhSliderLang.innerText = langs.blockEleventhSliderLang.ru
blockTwelfthSliderLang.innerText = langs.blockTwelfthSliderLang.ru
blockThirteenthSliderLang.innerText = langs.blockThirteenthSliderLang.ru
blockFourteenthSliderLang.innerText = langs.blockFourteenthSliderLang.ru
blockFifteenthSliderLang.innerText = langs.blockFifteenthSliderLang.ru
blockSixteenthSliderLang.innerText = langs.blockSixteenthSliderLang.ru
blockSeventeenthSliderLang.innerText = langs.blockSeventeenthSliderLang.ru
blockEighteenthSliderLang.innerText = langs.blockEighteenthSliderLang.ru

blockReviewsFirst.innerText = langs.blockReviewsFirst.ru
blockReviewsSecond.innerText = langs.blockReviewsSecond.ru
blockReviewsThird.innerText = langs.blockReviewsThird.ru
blockReviewsFourth.innerText = langs.blockReviewsFourth.ru
blockReviewsFifth.innerText = langs.blockReviewsFifth.ru
blockReviewsSixth.innerText = langs.blockReviewsSixth.ru
blockReviewsSeventh.innerText = langs.blockReviewsSeventh.ru

// blockEthnoLangFirst.innerText = langs.blockEthnoLangFirst.ru
// blockEthnoLangSecond.innerText = langs.blockEthnoLangSecond.ru
// blockEthnoLangThird.innerText = langs.blockEthnoLangThird.ru
// blockEthnoLangFourth.innerText = langs.blockEthnoLangFourth.ru
// blockEthnoLangFifth.innerText = langs.blockEthnoLangFifth.ru
// blockEthnoLangSixth.innerText = langs.blockEthnoLangSixth.ru


blockReviewsAndrei.innerText = langs.blockReviewsAndrei.ru
blockReviewsMyrza.innerText = langs.blockReviewsMyrza.ru
blockReviewsLara.innerText = langs.blockReviewsLara.ru
blockReviewsMunara.innerText = langs.blockReviewsMunara.ru
blockReviewsEmir.innerText = langs.blockReviewsEmir.ru
blockReviewsJohn.innerText = langs.blockReviewsJohn.ru
blockReviewsBaysal.innerText = langs.blockReviewsBaysal.ru

blockBeforeFirst.innerText = langs.blockBeforeFirst.ru
})






































