/*
    1. DOM에서 제어할 노드를 가져오기
    2. 버튼이 눌러지면
     [확인버튼일때]
        - 랜덤 수를 생성 => 랜덤 수는 다시 하기 전까지 변경되면 안됨
        - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
        - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
        - input 박스 값이 랜덤 수 보다 작으면 up 이미지
        - input 박스 값이 랜덤 수 보다 크면 down 이미지
        - input 박스 값이 랜덤 수와 같으면 good 이미지
            -> input이 보이지 않아야 함
            -> 버튼의 캡션을 '숫자를 생성해 주세요'라고 변경
     [숫자를 생성해 주세요 버튼일 때]
        - 초기화 : 랜덤 수 새로 생성, input 박스 보이기..
*/

//화면 이미지 
const showImg = (imgName) => {
    const wht = document.querySelector('#wht') ;
    wht.setAttribute('src', `./img/${imgName}.png`) ;
    wht.setAttribute('alt', `${imgName}`) ;
  }


document.addEventListener('DOMContentLoaded',()=>{
    // 1. DOM에서 제어할 노드를 가져오기
    const input = document.querySelector('#txt1') ;
    const bt = document.querySelector('#bt') ;

    //랜덤 수
    let n ;
    let flag = false ;
    let imgName ;

    alert('값을 입력하세요.');
    input.focus();

    bt.addEventListener('click', (e)=>{
        //form 태그 사용시 다시 호출되지 않도록
        e.preventDefault();

        //랜덤 수 생성 : flag가 true일 때만 생성
        if (!flag) {
            flag = true
            n = Math.floor(Math.random()*100) + 1 ; //1~100
            console.log('n=', n, flag)
            showImg('what');
            input.computedStyleMap.display = 'inline';
            bt.textContent = '확인';

        }

        //입력값 체크
        if (input.value == '') {
            alert('값을 입력하세요.');
            input.focus();
            return ;
        }

        //입력값 체크 : 1 ~ 100
        const user = parseInt(input.value) ;
        console.log(user)
        if ( user < 1 || user > 100) {
        alert('[입력오류] 1~100사이의 숫자를 입력하세요.');
        input.focus();
        return ;
        }

        // input 박스 값이 랜덤 수 보다 작으면 up 이미지
        // input 박스 값이 랜덤 수 보다 크면 down 이미지
        // input 박스 값이 랜덤 수와 같으면 good 이미지

        if (user < n) imgName = 'up';
        else if (user > n) imgName = 'down';
        else {
            imgName = 'good';

            input.computedStyleMap.display ='none' ;
            bt.textContent = '숫자를 다시 생성해 주세요.';
            flag = false ;
        }


        if (imgName === 'up' || imgName === 'down') {
            input.focus();
          }
          
          input.value = '';
          showImg(imgName) ;
        });
      });