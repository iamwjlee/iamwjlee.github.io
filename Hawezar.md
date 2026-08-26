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
//VendorForm.cs(거래처)
var sql = $"""  
    SELECT {string.Join(", ", DetailColumns)}
    FROM 거래처관리
    WHERE (? = '' OR 거래처코드 LIKE ? OR 거래처명 LIKE ?)
    ORDER BY 거래처코드
    """;
//CustomerForm.cs(개인고객)
//CorporateVehicleForm.cs(법인차량)
var sql = $"""
    SELECT {string.Join(", ", DetailColumns)}
    FROM 고객관리
    WHERE (? = '' OR 코드번호 LIKE ? OR 차량번호 LIKE ? OR 성명 LIKE ?)
    AND Left(Trim(코드번호), 2) = ?
    ORDER BY 코드번호
    """;

//첫 번째 물음표 ? = '' (빈값 체크용):
//이 자리에는 %가 없는 순수한 keyword인 p0가 들어가야 합니다.
//두 번째/세 번째 물음표  LIKE ? (포함 검색용):이 자리에는 앞뒤로 %가 붙은 p1이 들어가야 SQL이 정상적으로 부분 검색을 수행할 수 있습니다.

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

public static void PopulateCombo(ComboBox combo);  //지정한 콤보박스(ComboBox) 컨트롤에 데이터 목록을 채워 넣어라

public static void PopulateShiftCombo(); //  교대 근무(Shift) 콤보 박스(Combo)에 데이터를 채워 넣다(Populate)

FormatNumericColumns(_acquirerGrid, "금액", "N0");  //숫자 열의 서식을 지정한다"라는 의미,"N0" (표준 숫자 서식 문자열) 기본 3자리마다 콤마 찍는다
FormatNumericColumns(_acquirerGrid, "공급가", "N0"); 
public override string ToString() => Label; //ToString() 메서드 재정의 (Override)
// C#의 모든 객체는 원래 글자로 출력하려고 하면 프로젝트명.ShiftOption 같은 클래스 이름이 툭 튀어 나옵니다.
// 하지만 이 메서드 앞에 override(재정의)를 붙이고 앞서 배운 =>를 사용해 Label을 반환하도록 설정했습니다. 
// 이제 이 객체를 글자로 바꿀 때는 무조건 "2교대" 같은 화면 이름이 출력됩니다.
public bool TableHasColumn(string dbPath, string tableName, string columnName, string? jetDatabasePassword = null)
{
    using var connection = OpenConnection(dbPath, jetDatabasePassword);
    var schema = connection.GetOleDbSchemaTable( //데이터베이스 내부를 직접 뒤지는 것이 아니라, 데이터베이스가 가진 구조 정보(스키마)를 요청
        OleDbSchemaGuid.Columns,
        new object?[] { null, null, tableName, columnName });
    return schema is { Rows.Count: > 0 };
}

.FirstOrDefault(path => path.Contains(token, StringComparison.OrdinalIgnoreCase))
//독립된 함수를 파라미터로 넘겨준 것과 완전히 같습니다.

public static TSource? FirstOrDefault<TSource>(
    this IEnumerable<TSource> source, 
    Func<TSource, bool> predicate
);
/*
- this IEnumerable<TSource> source
	this 키워드는 이 메서드가 확장 메서드임을 나타냅니다
	덕분에 Enumerable.FirstOrDefault(파일목록, 조건) 대신, 파일목록.FirstOrDefault(조건) 처럼 물 흐르듯 마침표(.)를 찍어 호출할 수 있습니다.
	하지만 우리가 코드를 실제 사용할 때는 파라미터로 넣지 않고 생략하게 됩니다. 그 이유는 this 키워드 때문에 이 함수가 C#의 특수 기능인 '확장 메서드(Extension Method)'로 동작하기 때문입니다.
	컴퓨터가 실제로 바꾸어 실행하는 코드 (원래 함수 형태)
	Enumerable 클래스의 정적 메서드에 첫 번째 인자로 source를 직접 채워 넣습니다.
	Enumerable.FirstOrDefault(Directory.EnumerateFiles(...), path => path.Contains(...));
	즉, 문법적인 편리함(가독성)을 위해 첫 번째 파라미터를 앞으로 빼서 마침표(.)로 연결할 수 있도록 허용해 준 것입니다.
	확장 메서드를 만들 때 꼭 지켜야 할 규칙 3가지:static,첫 번째 파라미터 앞에 반드시 this 키워드
	자주 반복되거나 코드가 길어지는 특정 로직이 있으신가요?  그걸 깔끔한 확장 메서드로 리팩토링하는 방법을 제안해 드릴게요!

- Func<TSource, bool> predicate (조건식 파라미터)
	TSource(여기서는 파일 경로 문자열)를 입력받아서 bool(true/false) 값을 반환하는 대리자(Delegate/함수)를 의미합니다.
	여기에 전달한 람다식 path => path.Contains(...)가 바로 이 Func<string, bool> 형식에 딱 맞기 때문에 컴파일이 가능한 것입니다.
*/

var receiptInfoExpr = """
    IIF(
        IIF(ISNULL(a.Receipt), 0, a.Receipt) = 0,
        '',
        IIF(
            Trim(IIF(ISNULL(r.ProcessUseNum), '', r.ProcessUseNum)) <> '',
            Trim(r.ProcessUseNum),
            '발행'
        )
    )
    """;
//Trim(...) <> '': 그 값의 앞뒤 공백을 제거(Trim)했을 때 빈 값이 아니라면(즉, 무언가 번호가 채워져 있다면) 공백을 제거한 실제 이용 번호(Trim(r.ProcessUseNum))를 반환합니다. 
//이용 번호가 비어 있다면 '발행'이라는 텍스트를 반환합니다.
  
```

- 핵심 기능 (무엇을 조회하나요?)
    - 고객 기본 정보: 고객의 코드번호, 차량번호, 성명을 조회합니다.소속 및 그룹 정보: 고객 테이블에 저장된 코드(소속코드, 그룹코드)를 바탕으로, 실제 동호회 이름(소속명, 그룹명)을 매칭하여 출력합니다.
- 이 쿼리의 핵심은 그룹관리라는 하나의 테이블을 두 번 붙여서(LEFT JOIN) 각각 다른 정보를 가져온다는 점입니다.

- 테이블 결합 원리 (LEFT JOIN)그룹관리라는 하나의 테이블에 소속(동호회1)과 그룹(동호회2) 정보가 모두 저장되어 있기 때문에, 이를 각각 가져오기 위해 테이블에 별명(s1, s2)을 붙여 두 번 결합했습니다.
-  첫 번째 결합 (s1)조건: 고객의 소속코드와 그룹관리의 소속코드가 같고, 구분코드가 '1'인 데이터역할: 고객이 속한 첫 번째 동호회 이름(s1.소속명)을 가져옵니다.
    
- 두 번째 결합 (s2)조건: 고객의 그룹코드와 그룹관리의 소속코드가 같고, 구분코드가 '2'인 데이터역할: 고객이 속한 두 번째 동호회(그룹) 이름(s2.소속명)을 가져옵니다.

- LEFT JOIN을 사용했기 때문에, 소속코드나 그룹코드가 비어 있는(동호회에 가입하지 않은) 고객 정보도 누락되지 않고 모두 조회됩니다. 동호회 이름 정보가 없는 칸은 빈칸(NULL)으로 표시됩니다


```
SELECT
  c.코드번호,
  c.차량번호,
  c.성명,
  c.소속코드,
  s1.소속명 AS 소속명,      -- 동호회1 이름
  c.그룹코드,
  s2.소속명 AS 그룹명       -- 동호회2 이름
FROM 고객관리 AS c
LEFT JOIN 그룹관리 AS s1
  ON s1.소속코드 = c.소속코드 AND s1.구분코드 = '1'
LEFT JOIN 그룹관리 AS s2
  ON s2.소속코드 = c.그룹코드 AND s2.구분코드 = '2'
WHERE s1.소속명 = '축구동호회'

```
- 특정 조건의 고객만 **필터링**하려면 쿼리문 가장 마지막에 WHERE 절을 추가하시면 됩니다.
```
WHERE c.소속코드 IS NOT NULL OR c.그룹코드 IS NOT NULL
```

- 결과 창에 출력되는 컬럼 목록
    - 코드번호: 고객 고유 번호
    - 차량번호: 고객의 차량 번호
    - 성명: 고객 이름
    - 소속코드: 동호회1의 코드
    - 소속명: 동호회1의 실제 이름
    - 그룹코드: 동호회2의 코드
    - 그룹명: 동호회2의 실제 이름

- 동호회1(소속코드)이든 동호회2(그룹코드)든 하나라도 가입된 고객만 보기
```
WHERE c.소속코드 IS NOT NULL OR c.그룹코드 IS NOT NULL
```
- 이름이 '홍길동'인 고객만 보기 
```
WHERE c.성명 = '홍길동'
```

- 차량번호 뒤 네 자리가 '1234'인 고객만 보기 
```
WHERE c.차량번호 LIKE '%1234'
```
- 이름은 김** 고 골프동호회인경우
```
WHERE c.성명 LIKE '김%' AND s1.소속명 = '골프' 
```

1. 조건이 많아져도 속도가 [더 빨라지는] 경우 
    - 조건이 추가될수록 걸러내야 할 데이터의 양(모수)이 확 줄어들기 때문에, 오히려 계산 속도가 훨씬 빨라집니다


2. 조건이 많아질수록 속도가 [더 느려지는] 경우

    - 반면, 아래와 같은 유형의 조건들이 늘어나면 데이터베이스에 부하가 걸려 속도가 느려집니다.

    - 인덱스가 없는 컬럼을 비교할 때: 100만 건의 데이터가 있다면, 조건이 늘어날 때마다 100만 번의 비교 연산을 처음부터 끝까지 반복해야 하므로 느려집니다.
    - 문자열 부분 검색(LIKE '%조건%')을 쓸 때: 글자 앞뒤에 퍼센트(%)가 붙으면 인덱스를 타지 못하고 전체 데이터를 다 읽어야 해서 연산이 무거워집니다.
    - 함수나 연산을 걸어서 비교할 때 (예: WHERE SUBSTRING(차량번호, 1, 2) = '12'): 데이터를 하나씩 꺼내 함수를 실행한 뒤 비교하므로 조건이 늘어날수록 급격히 느려집니다.
    - OR 조건을 많이 쓸 때: AND 조건은 대상을 좁혀주지만, OR 조건은 처리해야 할 범위를 넓히고 인덱스 효율을 떨어뜨려 속도를 저하시킵니다.