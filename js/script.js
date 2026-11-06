// 실습 1: 로그인 버튼을 선택합니다.
// document.querySelector("#아이디명") 형태로 HTML 요소를 찾을 수 있습니다.
const loginBtn = document.querySelector("#loginBtn");

// 실습 2: 로그인 버튼이 있는 페이지에서만 코드가 실행되도록 확인합니다.
if (loginBtn) {
  // 실습 3: 버튼을 클릭했을 때 실행할 함수를 연결합니다.
  loginBtn.addEventListener("click", function () {
    // 실습 4: 아이디 입력칸의 값을 가져옵니다.
    // 입력칸의 값은 .value로 가져옵니다.
    const loginId =
      document.querySelector("#loginId").value; /* 입력값 가져오기 */

    // 실습 5: 비밀번호 입력칸의 값을 가져옵니다.
    const loginPw =
      document.querySelector("#loginPw").value; /* 입력값 가져오기 */

    // 실습 6: 아이디 또는 비밀번호가 비어 있는지 확인합니다.
    // 빈 문자열은 ""로 표현합니다.
    if (loginId === "" || loginPw ==="") {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    // 실습 7: 입력값이 정상이라면 alert로 로그인 메시지를 보여줍니다.
    alert(loginId + "님, 로그인 버튼을 클릭했습니다.");
  });
}


// ==================================================================
// 실습 2) 회원가입 
// 실습 1 : 회원가입 버튼을 선택합니다.
// document.querySelector("#아이디명") 형태로 HTML 요소를 찾을 수 있습니다.
const signupBtn = document.querySelector("#signupBtn");

if (signupBtn) {
  // 실습 2: 버튼을 클릭했을 때 실행할 함수를 연결합니다.
  signupBtn.addEventListener("click", function () {
    // 실습 3: 입력칸의 값은 .value로 가져옵니다.
    const userName = document.querySelector("#userName").value;
    const userEmail = document.querySelector("#userEmail").value;
    const userPhone = document.querySelector("#userPhone").value;

    // 실습 4: select에서 선택한 값도 .value로 가져옵니다.
    const userGender = document.querySelector("#userGender").value;

    //비번, 비번 확인 => 값
    const userPw = document.querySelector("#userPw").value;
    const userPwCheck = document.querySelector("#userPwCheck").value;

    // 약관동의 => 체크박스
    const agree = document.querySelector("#agree").checked;



    // 실습 5: 값이 비어 있는지 확인합니다. 빈 문자열은 ""로 표현합니다.
    if (
      userName === "" || // "||"는 or을 의미한다
      userEmail === "" ||
      userPhone === "" ||
      userGender === "" ||
      userPw === "" ||
      userPwCheck === "" // 7개 항목 중 하나라도 비었다면 아래의 알람이 뜬다.
    ) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    // 비밀번호와 비밀번호 확인의 일치여부가 필요!
    if ( userPw !== userPwCheck){
      alert("비밀번호가 일치하지 않습니다.")
      return;
    }

    // 약관 동의 체크
    if(agree===false){
      alert('이용 약관에 동의하세요')
      return
    }
    // 실습 6: 입력값이 정상이라면 alert로 결과를 보여줍니다.
    alert(userName+'님, 회원가입을 축하합니다.');
  });
}



//==================================================================================================

// 갤러리 페이지의 모든 카드 버튼을 찾습니다.
const cardButtons = document.querySelectorAll(".card-btn");

// 버튼이 여러 개이므로 forEach로 하나씩 이벤트를 연결합니다.
cardButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 클릭한 버튼에서 가장 가까운 .card 부모 요소를 찾습니다.
    const card = button.closest(".card");

    // 해당 카드 안의 제목 텍스트를 가져옵니다.
    const title = card.querySelector(".card-title").textContent;

    // 어떤 카드를 선택했는지 메시지로 보여줍니다.
    alert(title + " 카드를 선택했습니다.");
  });
});
