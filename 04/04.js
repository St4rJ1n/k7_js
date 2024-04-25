/*
1. DOM에서 제어할 노드를 가져 오기
2. 6개 버튼 클릭을 확인
3. 버튼 클릭이 되면 
    - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자 (user)
    - 랜덤 수를 생성 => 컴퓨터 숫자(com) => 이미지 변경
    - 사용자 선택수(user)와 컴퓨터 선택수(com)를 비교
    - 결과 출력
*/

document.addEventListener('DOMContentLoaded', ()=>{
    //1.DOM애서 제어할 노드를 가져 오기
    const comImg = document.getElementById('com') ;
    const userImg = document.querySelector('#user') ;
    // 겟엘레먼트바이아이디 쿼리셀렉터 이 두가지 명령어는 동일한 기능을 함. 아무거나 쓰자. 후자가 최근에 생김.
    const msg = document.querySelector('#msg') ;
    const bts = document.querySelectorAll('.bt4') ;
    console.log(bts);

    // //반복문1
    // for(let i = 0; i < bts.length; i++){
    //     console.log(bts[i])
    // }   //js에서 변수 선언 const 아니면 let 2중택1
    
    // //반복문2
    // console.log('**반복문1**');
    // for(let i in bts) {
    //     console.log(bts[i])
    // }

    // //반복문3
    // console.log('**반복문3**');
    // bts.forEach(bt => {
    //     console.log(bt)
    // })

    // //반복문4
    // console.log('**반복문4**');
    // for (let bt of bts) {
    //     console.log(bt)
    // }
    // for (let [i, bt] of bts.entries()) {
    //     console.log(i, bt)
    // }

   // bts[0].addEventListener('click', ()=>{});

  //2. 6개 버튼 클릭을 확인
  for (let bt of bts) {
    bt.addEventListener('click', ()=>{
      // 3. 버튼 클릭이 되면 
      // - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(user) => 이미지 변경
      // - 랜덤수를 생성 => 컴퓨터 숫자(com) => 이미지 변경
      // - 사용자 선택수(user)와 컴퓨터 선택수(com)을 비교
      // - 결과 출력 

      const user = parseInt(bt.textContent.slice(0,1));
            // const user = bt.textContent.slice(0,1);
      const com = Math.floor(Math.random() * 6) + 1 ; //1~6 

      console.log(user, com)


      comImg.setAttribute('src', `../03/img/${com}.png`) ;
      comImg.setAttribute('alt', `computer num ${com}`) ;

      userImg.setAttribute('src', `../03/img/${user}.png`) ;
      userImg.setAttribute('alt', `user num ${user}`) ;

      if (com === user) msg.innerHTML = '맞음' ;
      else msg.innerHTML = '틀림' ; 
    });
    }
});