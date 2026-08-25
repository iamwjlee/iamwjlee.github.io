# Hawezar 

![디아4](../res/D4/디아4.png)

### Diablo 4 Sorcerer Skills - Season 4

![순간이동](./res/D4/순간이동.png)
![얼음칼날](./res/D4/IceBlade.png)
![화염보호](./res/D4/FS.png)
![서릿발](./res/D4/FrostNova.png)
![번개창](./res/D4/LightningSpear.png)
![화염탄](./res/D4/FireBolt.png)

### Diablo 4 

[강령 입문가이드 절단 강령은 어케싸우나요](https://gall.dcinside.com/mgallery/board/view/?id=diablo4&no=142458)

[강령술사 이중 속성 궁극기 고찰](https://roomerkim.tistory.com/109)

[시즌4 미친 성능의 1티어 빌드! 암흑 마법학자](https://www.youtube.com/watch?v=5RCxZLn11sw)

[자격산사태](https://www.inven.co.kr/board/diablo4/6030/30342)

[출혈은 기본,메인스킬(소돌,도려,후려)은 선택](https://www.inven.co.kr/webzine/news/?news=297419&site=diablo4)

[쌍수 출혈후려](https://www.inven.co.kr/board/diablo4/6029/45282)

[도려내기 바바](https://www.inven.co.kr/board/diablo4/6029/47096)

[도려내기 야만 크리티컬딜러](https://www.youtube.com/watch?v=tfp9E8xOmbs)

[그라핀 원소술사 인벤](https://www.inven.co.kr/board/diablo4/6033/26444)

[우버 두리엘,안다리엘 소환법 PoEasy](https://www.youtube.com/watch?v=ctDVJntKOJo) 

[디아블로4 보스위치및 고행 200레벨소환 재료 플레잇](https://blog.naver.com/winsweet/223458332207) 

[CHAOSCUBE DIABLO4](https://www.chaoscube.co.kr/) 

[디아브로4 신규엔드게임 보스5종 및 드랍아이템 정보](https://www.chaoscube.co.kr/board/d4-ccbook/12105117) 

### VB6 Microsoft Access MDB + ADO (Jet OLEDB 4.0) **x86 (32bit)** 빌드

딕셔너리는 내부적으로 해시 테이블을 사용하므로, 데이터가 1만 개가 있어도 코드를 집어넣으면 대기 시간 없이 즉시 결과 값을 찾아냅니다.
``` c#
// ❌ 옛날 방식 (컬렉션 초기화자)
var oldWay = new Dictionary<string, string>() {
    { "1", "1:현금" },
    { "2", "2:외상" }
};

//  최신 방식 (인덱서 기반 초기화자)
var newWay = new Dictionary<string, string>() {
    ["1"] = "1:현금",
    ["2"] = "2:외상"
};
string inputCode = "1";
if (newWay.TryGetValue(inputCode, out var label))
{
    Console.WriteLine($"화면 표시용 이름: {label}"); // 출력: 1:현금
}
```
  등록작업.거래처등록 을 선택했을시 Vendorform.cs 의 Vernorform(MdbHelper db) 생성자에서 UI 전부 
  지금처럼 조립은 생성자, 데이터는 OnShown 이면 WinForms 기준으로는 괜찮은 편입니다

  등록작업.개인고객등록 선택시  CustomerForm(M db)

``` c#
//VendorForm.cs
var sql = $"""  
    SELECT {string.Join(", ", DetailColumns)}
    FROM 거래처관리
    WHERE (? = '' OR 거래처코드 LIKE ? OR 거래처명 LIKE ?)
    ORDER BY 거래처코드
    """;
//CustomerForm.cs
var sql = $"""
    SELECT {string.Join(", ", DetailColumns)}
    FROM 고객관리
    WHERE (? = '' OR 코드번호 LIKE ? OR 차량번호 LIKE ? OR 성명 LIKE ?)
    ORDER BY 코드번호
    """;

//C#의 하수 표기법(Raw String Literal - """)과 문자열 인터폴레이션($)을 사용    
//사용자가 입력한 검색어(?)가 비어있으면 전체를 조회하고, 값이 있으면 '거래처코드'나 '거래처명'에 해당 단어가 포함된 데이터만 골라내어 코드로 정렬
// 동적으로 SQL의 컬럼 선택 영역(SELECT ...)을 생성. 배열이나 리스트에 담긴 여러 개의 컬럼 이름들을 쉼표(, )로 연결해서 SQL 질의문 생성

//get "ABC" from "ABCDE"
string text = "ABCDE";
// 두 번째 파라미터가 '종료 위치'가 아니라 '가져올 개수'여서 헷갈림
string result = text.Substring(0, 3); 

string text = "ABCDE";
// "0번부터 3번 직전(0, 1, 2)까지 잘라라"라는 의미로 훨씬 직관적임
string result = text[..3]; // 결과: "ABC"

int[] subArray = numbers[1..4]; // 1번 인덱스부터 4번 직전까지
```


