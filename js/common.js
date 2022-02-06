
var headerSpace = document.querySelector("#header");
var headerCont = `<div class="wrap">
      <div class="logo">
        <a href="./index.html"><img src="./img/logo.png" alt="로고"></a>
      </div>
      <div class="menu">
        <ul class="m_menu">
          <li><a href="./Hanwha.html">Hanwha E&C</a>
            <ul class="s_menu">
              <li><a href="#">경영이념</a></li>
              <li><a href="#">연혁</a></li>
              <li><a href="#">조직도</a></li>
              <li><a href="#">재무정보</a></li>
              <li><a href="#">CI</a></li>
              <li><a href="#">BI</a></li>
              <li><a href="#">찾아오시는 길</a></li>
            </ul>
          </li>
          <li><a href="./business.html">business</a>
            <ul class="s_menu">
              <li><a href="#">토목 사업</a></li>
              <li><a href="#">건축 사업</a></li>
              <li><a href="#">주택 사업</a></li>
              <li><a href="#">플랜트 사업</a></li>
              <li><a href="#">기술연구소</a></li>
            </ul>
          </li>
          <li><a href="./pr.html">Pr Center</a>
            <ul class="s_menu">
              <li><a href="#">사회공헌</a></li>
              <li><a href="#">공익사업</a></li>
              <li><a href="#">활동내용</a></li>
              <li><a href="#">윤리경영</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">사내소식</a></li>
              <li><a href="#">홍보자료실</a></li>
            </ul>
          </li>
          <li><a href="./careers.html">Careers</a>
            <ul class="s_menu">
              <li><a href="#">인재개발</a></li>
              <li><a href="#">인사제도</a></li>
              <li><a href="#">직무소개</a></li>
              <li><a href="#">채용공고</a></li>
              <li><a href="#">채용FAQ</a></li>
            </ul>
          </li>
          <li><a href="./customer.html">Customer</a>
            <ul class="s_menu">
              <li><a href="#">고객문의</a></li>
              <li><a href="#">고객문의확인</a></li>
              <li><a href="#">사이버신문고</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="util">
        <ul class="lang">
          <li class="kor"><a href="#"></a></li>
          <li class="eng"><a href="#"></a></li>
        </ul>
        <ul class="ham">
          <li><a href="#"></a></li>
        </ul>
      </div>
      <div class="ham_menu">
        <div class="h_wrap">
          <div class="logo">
            <a href="./index.html"><img src="./img/logo.png" alt=""></a>
          </div>
          <div class="menu">
            <ul>
              <li>Hanwha E&C</li>
              <li><a href="#">경영이념</a></li>
              <li><a href="#">연혁</a></li>
              <li><a href="#">조직도</a></li>
              <li><a href="#">재무정보</a></li>
              <li><a href="#">CI</a></li>
              <li><a href="#">BI</a></li>
              <li><a href="#">찾아오시는 길</a></li>
            </ul>
            <ul>
              <li>business</li>
              <li><a href="#">토목 사업</a></li>
              <li><a href="#">건축 사업</a></li>
              <li><a href="#">주택 사업</a></li>
              <li><a href="#">플랜트 사업</a></li>
              <li><a href="#">기술연구소</a></li>
            </ul>
            <ul>
              <li>Pr Center</li>
              <li><a href="#">사회공헌</a></li>
              <li><a href="#">공익사업</a></li>
              <li><a href="#">활동내용</a></li>
              <li><a href="#">윤리경영</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">사내소식</a></li>
              <li><a href="#">홍보자료실</a></li>
            </ul>
            <ul>
              <li>Careers</li>
              <li><a href="#">인재개발</a></li>
              <li><a href="#">인사제도</a></li>
              <li><a href="#">직무소개</a></li>
              <li><a href="#">채용공고</a></li>
              <li><a href="#">채용FAQ</a></li>
            </ul>
            <ul>
              <li>Customer</li>
              <li><a href="#">고객문의</a></li>
              <li><a href="#">고객문의확인</a></li>
              <li><a href="#">사이버신문고</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="close"></div>
        </div>
      </div>
    </div>
`
headerSpace.innerHTML = headerCont;

// footer

var footerSpace = document.querySelector("footer");
var footerCont = `
<div class="f_cont">
      <div class="f_logo">
        <a href="#"><img src="./img/footer_logo.png" alt="푸터 로고"></a>
      </div>
      <div class="f_menu">
        <ul>
          <li><a href="#">해외현장 임직원가족</a></li>
          <li><a href="#">개인정보 처리방침</a></li>
          <li><a href="#">공정거래 사업지침</a></li>
          <li><a href="#">협력업체 시스템</a></li>
        </ul>
        <div class="address">
          <p>
            서울시 영등포구 여의대로 24 전경련회관 <br>
            TEL 02.2055.6000 080.729.2400 <br>
            Copyright 2022 Hanwha Engineering & Construction corp.
          </p>
        </div>
      </div>
      <div class="sns">
        <ul class="sns_img">
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul class="family">
          <li><a>Family Site</a>
            <ul class="sub_f">
              <li><a href="#">(주)한화 화약부문</a></li>
              <li><a href="#">(주)한화 방산부문</a></li>
              <li><a href="#">(주)한화 무역부문</a></li>
              <li><a href="#">(주)한화 기계부문</a></li>
              <li><a href="#">한화테크원</a></li>
              <li><a href="#">한화탈레스</a></li>
              <li><a href="#">한화디펜스</a></li>
              <li><a href="#">한화케미칼</a></li>
              <li><a href="#">한화종합화학</a></li>
              <li><a href="#">한화토탈</a></li>
              <li><a href="#">한화건설</a></li>
              <li><a href="#">한화큐셀</a></li>
              <li><a href="#">한화큐셀코리아</a></li>
              <li><a href="#">한화첨단소재</a></li>
              <li><a href="#">한화에너지</a></li>
              <li><a href="#">여천NCC</a></li>
              <li><a href="#">한화도시개발</a></li>
              <li><a href="#">한화생명</a></li>
              <li><a href="#">한화손해보험</a></li>
              <li><a href="#">한화자산운용</a></li>
              <li><a href="#">한화투자증권</a></li>
              <li><a href="#">한화인베스트먼트</a></li>
              <li><a href="#">한화저축은행</a></li>
              <li><a href="#">한화호텔앤드리조트</a></li>
              <li><a href="#">한화갤러리아</a></li>
              <li><a href="#">한화갤러리아타임월드</a></li>
              <li><a href="#">한화63시티</a></li>
              <li><a href="#">한화S&C</a></li>
              <li><a href="#">한화역사</a></li>
              <li><a href="#">한화이글스</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    `
    footerSpace.innerHTML = footerCont;
    

    $(document).ready(function(){


      // 햄버거 메뉴
      $("#header .wrap .util ul.ham").on("click", function(){
        $("#header .wrap .ham_menu").slideDown(700)
      });


      $("#header .wrap .ham_menu .h_wrap .close").on("click", function(){
        $("#header .wrap .ham_menu").slideUp(700)
      })



      //상단
      $(".top li a").on("click",function(){
        $('body,html').animate({scrollTop:0}, 400 );
        return false;
      });

    });

    //패밀리 사이트
    
    var $family = document.querySelector("footer .f_cont .sns .family li a");
    var $family_arr = document.querySelector("footer .f_cont .sns .family li .sub_f");

    $family.addEventListener("click", function(){
      if($family_arr.classList.contains("active")){
        $family_arr.classList.remove("active");
      }else{
        $family_arr.classList.add("active");
      }
    });


    
