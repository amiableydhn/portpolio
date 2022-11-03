
window.addEventListener("load", ()=>{
   const grid =  new Isotope("section",{ //인수에 부모요소 넣어주기
        itemSelector: "article", //배치할 요소
        columnWidth: "article", // 배치할 요소의 넓이값
        transitionDuration: "0.5s" // 애니메이션 속도
    })

    const btns = document.querySelectorAll("main ul li");

    btns.forEach( btn => {
        btn.addEventListener("click", e=>{
            e.preventDefault();

            const isOn = e.currentTarget.classList.contains("on");
            console.log(isOn);
            if(isOn) return;
            //이미 활성화되어있는 버튼은 중복되지않게 해줌

            activation(e);

        })
    })

    function activation(event){
        //console.log("activation called!!");
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");

        const btn_a = event.currentTarget.querySelector("a");
        const a_href = btn_a.getAttribute("href");
        //console.log(a_href);

        grid.arrange({filter: a_href});
    }
})
// load이벤트 미사용시 Dom요소는 defer를 통해 먼저 불러 올 수 있으나  img높이값은 불러오지못해 컨텐츠가 겹치는 현상이 발생함


//필터링 기준은 배치할요소에 각각 class 줘야함
