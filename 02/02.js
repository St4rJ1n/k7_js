const btCreate = (bt, idTxt, captionNode, parentNode) => {
    bt.setAttribute('id', idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}


document.addEventListener("DOMContentLoaded", () =>{
    console.log('DOM 완성');

    const msg = document.querySelector('#msg') ;
    const btDiv = document.getElementById('btDiv');
    const bt1 = document.createElement('button');
    const bt1Txt = document.createTextNode('버튼11');
    const bt2 = document.createElement('button');
    const bt2Txt = document.createTextNode('버튼21');

    // bt1.setAttribute('id', 'bt11');
    // bt1.appendChild(bt1Txt);
    // btDiv.append(bt1);
    // bt2.setAttribute('id', 'bt21');
    // bt2.appendChild(bt2Txt);
    // btDiv.append(bt2);

    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt21', bt2Txt, btDiv);

    bt1.addEventListener('click', ()=>{
        // if (msg.innerHTML == '')
        //     msg.innerHTML = '<h1>안녕하세요!!</h1>';
        // else
        //     msg.innerHTML = '';
        msg.innerHTML = '<h1>안녕하세요!!</h1>';
    })
    bt2.addEventListener('click', ()=>{
        msg.innerHTML = '';
    });

});