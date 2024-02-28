const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const image = document.getElementById("my-image");

const questions = [
  "จริงๆหรอ",
  "เปลี่ยนใจหน่อยมั้ย",
  "ลองคิดดูใหม่ได้ไหม",
  "ไม่อยากลองคบกับเราจริงๆหรอ",
  "เราจะทำให้เธอมีความสุขนะ",
  "เชื่อใจเรานะ",
  "ให้โอกาสเราหน่อย",
  "เราชอบเธอมากนะ",
  "เธอเป็นคนพิเศษสำหรับเรา",
  "ไม่อยากเสียเธอไป",
];


let clickCount = 0;

function changeButtonStyle() {
  yesBtn.style.position = "absolute";
  const centerX = (wrapperRect.width - yesBtn.offsetWidth) / 2;
  const centerY = (wrapperRect.height - yesBtn.offsetHeight) / 2;
  yesBtn.style.right = 2 + "px";
  //yesBtn.style.top = centerY + "px";
  yesBtn.style.width = "595px";
  yesBtn.style.height = "70px";
  yesBtn.innerHTML = "เป็นสิ";
}
yesBtn.addEventListener('click', () => {
  question.innerHTML = 'โอเคค้าบบ  🥰🥰';
  image.src = "sweet.gif";
  noBtn.style.display = "none";
});

//NO
noBtn.addEventListener('mouseover', () => {
  // สุ่มคำถามจาก array
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  question.innerHTML = randomQuestion;

  // สุ่มตำแหน่งปุ่ม "ไม่"
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
 clickCount++;
 if (clickCount === 10) {
   noBtn.style.display = "none";
   question.innerHTML = "เป็นได้ยัง!";
   yesBtn.innerHTML = "เป็นก็ได้!!";
   // เปลี่ยนสไตล์ปุ่ม YesBtn
   //const yesBtnStyle = document.querySelector("button:nth-child(2)").style;
  // yesBtnStyle.position = "center";
   //yesBtnStyle.color = "hsl(119, 56%, 44%)";
  // changeButtonStyle();
  

 }
});