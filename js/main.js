'use strict'
function onInit() {
    var elHeader = document.querySelector('h1')
    elHeader.innerText = 'Welcome to gabriut'
    var elPrices = document.querySelector('.prices')
    elPrices.innerText = 'קבוצות בוטיק עד 6 אנשים!! 🥊 \n כרטיסיה 10 כניסות - 970₪ \n כרטיסיה 20 כניסות - 1760₪ \n כרטיסיה 30 כניסות 2480₪ \n\n\n מחירים אטרקטיביים במנוי 👊 \n קבוצת בוטיק עד 6 אנשים \n מנוי אימון בשבוע \n לחודש 370₪ \n לחודשיים 700₪ \n לשלושה חודשים 990₪ \n לחצי שנה 1800₪ \n\n\n שני אימונים בשבוע(קבוצת בוטיק עד 6 אנשים)🤜 \n חודש - 700₪ \n שלושה חודשים - 1800₪ (600₪ לחודש) \n שישה חודשים - 3300₪ (550₪ לחודש) \n שנה - 5750₪ (480₪ לחודש) \n\n\n שלושה אימונים בשבוע 🥊 \n חודש - 950₪ \n שלושה חודשים - 2550₪ (850₪ לחודש) \n שישה חודשים - 4800₪ (800₪ לחודש) \n שנה - 8400₪ (700₪ לחודש) \n\n\n מחיר אימון אישי- 180₪ \n 10 אימונים - 1600₪ \n כל מנוי/כרטיסיה כוללת ייעוץ תזונה \n מחיר אימון ניסיון בקבוצה קטנה - 70₪ \n שנצליח ונהיה בריאים וחזקים 💪 \n\n\n '
    var elFooter = document.querySelector('footer')
    elFooter.innerText = 'להרשמה-גבריאל \n 050-9772631 \n\n חנוך 24, תל אביב'
}


function imgClick(elImg) {
    elImg.style.scale = 1.5
    setTimeout(() => elImg.style.scale = 1, 2000)
}