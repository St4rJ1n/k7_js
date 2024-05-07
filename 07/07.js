document.addEventListener('DOMContentLoaded', ()=>{
    const txt1 = document.querySelector('#txt1') ;
    const txt2 = document.querySelector('#txt2') ;
    const bts= document.querySelectorAll('.bt7') ;
  
    //회문
    bts[0].addEventListener('click', (e)=>{
      e.preventDefault();
  
      //let t1 = txt1.value.split('') ;
      // let t1 = [...txt1.value] ;
      // let t2 = [] ;
      // for(let i = t1.length - 1 ; i >=0  ; i--) {
      //   t2.push(t1[i])
      // }
  
      // 비교 : 문자열
      let t1 = txt1.value.replaceAll(' ','');
      let t2 = txt1.value.replaceAll(' ','').split('').reverse().join('');
      if ( t1 === t2) txt2.value = '회문입니다.';
      else txt2.value = '회문이 아닙니다.';
  
      // //비교 : 배열
      // for(let i = 0; i < t1.length  ; i++ ){
      //   if (t1[i] != t2[i]) {
      //     txt2.value = '회문이 아닙니다.';
      //     break;
      //   }
      //   else {
      //     txt2.value = '회문입니다.';
      //   }
      // }
  
      console.log(t1, t2) ;
  
    }) ;
  
    //문자열 숫자 확인
    bts[1].addEventListener('click', (e)=>{
      e.preventDefault()
  
      // for (let i= 0 ; i< txt1.value.length ; i++) {
      //   console.log(txt1.value[i])
      // }
  
      let total = 0 ;
      for (let c of txt1.value) {
        //숫자 구분
        // if ( c >= '0' && c <= 9) {
        if (!isNaN(c)) {
          total = total + parseInt(c) ;
        }
      }
  
      txt2.value = total ;
  
  
    }) ;
  });