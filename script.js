const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
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
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'โอเคค้าบบ 😁😁 :)';
});

noBtn.addEventListener('click', () => {
    // สุ่มคำถามจาก array
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    question.innerHTML = randomQuestion;
  
    // สุ่มตำแหน่งปุ่ม "ไม่"
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
  });