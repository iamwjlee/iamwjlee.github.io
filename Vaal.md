# Clear Fell

### Witch's Essence Drain 
![위치](./res/poe2/witch.png)
![전염](./res/poe2/WitchContagion.png)

### GSC 개발환경 
```
1. C# Dev Kit only supports SDK-style projects. 
   Upgrade your project to an SDK-style project.
2. Canonical.cs 프로젝트를 로드하는 동안 문제가 발생했습니다.
```
``` c#
"정수 하나를 받고, 아무것도 반환하지 않는 함수 포인터 타입"
typedef void (*ValueCallback)(int value);

"c#에서는 정수 하나를 받고, 아무것도 반환하지 않는 함수를 가리킬 수 있는 타입을 만들기 " 
public delegate void ValueCallback(int value);

// ?? 널 병합 연산자 : Null-coalescing operator
// 왼쪽이 null 이 아니면 그값을 반환하고 null 이면 오른쪽값을 반환

FullByteData = _data ?? new byte[0];
print("Command:{0},ID:{1}",d3.Command ?? "(null)", d3.ID ?? "(null)");


//$는 C#의 문자열 보간(String Interpolation) 기호입니다.
//문자열 앞에 $를 붙이면 {} 안에 변수나 식을 직접 삽입할 수 있습니다.

// 보간 방식 ($ 사용)
string message = "Hello";
string result = $"[JWD] {message}";  // "[JWD] Hello"

// 기존 방식 (String.Format)
string result = string.Format("[JWD] {0}", message);  // "[JWD] Hello"
```

### 싱글톤과 static review...
```
CtlLubricator 는 static 으로 생성하므로 getObject() 함수를 사용할 필요가 없다.
CtlLubricator 는 static 이므로 인스턴스 없이 호출 가능하고 여러번 호출해도 같은 인스턴스를 반환한다.(싱글톤)
CtlLubricator 는 콜백 함수를 등록하는 함수를 가지고 있다.
CtlLubricator 는 static 인스턴스 멤버인 _reader 를 가지고 있다.
CtlLubricator 는 _reader를 통해 콜백 함수(네이티브 DLL의 콜백은 static 함수이므로 인스턴스 멤버를 호출할 수 없다.)를 호출한다.

ProcessStatus("FDS", "01"); 호출이 static 메서드인 OnDeviceDataReceived 내에서 ProcessStatus(인스턴스 메서드)를 직접 호출하여 에러 _reader. 객체를 통해 호출해야 합니다.
```



### GSC DLL(250207)과 명세서(2025.02.00)에 대한 질의(2026-02-04)
```
1. GetDllVersion() 
1. InitState(string strState1 = "",string strState2 = "",string strState3 = "") //디바이스 상태 초기화 ,초기화면 전환시 필요 작업 
	- 3개의 인자에 대한 사용예시, State에 대한 장위에서 처리 해야 할일,실제 사용하고 있는 예시
1. DeviceLED() 
1. ResetDevice()  //시작화면 전환 전 장치 초기화 작업 필요 시 코드 작성
	- 현재 사용되고 있는 예시를 설명 부탁
1. SelectDevice()사용 여부및 예시 //사용 시작할 디바이스
	- 디바이스(BAR,MSR,PRN)사용시 매번 호출되는지 여부?
	- 실제로 'BAR'를 읽을수도 있고 'MSR'도 사용될수 있는데 동시에 사용못 하고 한개만 사용하게끔 되어 있는지
1. Dispose() // 필요시 공통 사용중인 리소스 해제

2. PollingTargetAdd(string sNozzleNo) 사용여부및 예시 //사용할 노즐을 추가한다
2. PollingTargetClear() //사용할 노즐 Clear 한다.
2. RequestPumpClose(stringNozzleID, string WCC) 사용여부및 예시, 1리터마감/100원마감/1000원마감
2. ResetDevice 주유기리셋  실제 사용여부및 예시설명
2. GSC DLL(250207) 에서 ProcessStatus(string _oStatus, string _oID) //노즐 상태값 전송예제,사용여부및 예시
	2018-11-20 주유 완료 후 노즐을 걸어야 신용승인 및 영수증 출력 되도록 수정하기 위해 추가
2. getNozzleNo/getID함수는 장위에서 뭔가 해줘야 될게 있는지?
2. enable/disable //사용여부및 예시 - 실제 사용예시, 매번 콜되는지 여부
	
3. SetReaderInfo() 는 com포트 번호만 하드코딩으로 끝
3. RegisterWindowMsg() 사용여부및 설명

4. 영수증 프린터 

5. 바코드리더기는 com포트에서 직접 통신 안됨 (요청시 바코드데이터전송하는 방법으로)

GSC DLL에서 
OnPropertyDataChanged(new DataPropertyChangedArgs("DataChange", clsData.StringData));
[JWD PP]InternalLubricatorData: A05000130760000934000000000
[JWD PP]InternalLubricatorData: A05000142950001021100000000
[JWD TR]ProcessRefuelComplete: A05000150000001071400000000
[JWD CT]ProcessRefuelComplete: A06987654321
이런식으로 보내면 되는지여부?

    /// <remarks>
    /// 지원하는 CMD 타입:
    /// - PP: 주유 중 데이터 (Price, Liter 사용)   단가(?),리터 
    /// - TR: 주유 완료 데이터 (PRICE, Liter 사용)
    /// - CT: 적산값 데이터 (TOTAL_Liter 사용)
    /// - ER: 에러 데이터 (ERRNO 사용)  ///실제 예시 설명
    /// 
    /// 사용 예제:
    /// <code>
    /// // 예제 1: PP (주유 중) 데이터 처리
    /// // 바이트 배열 형식: [시작바이트][CMD 2바이트][ID 2바이트][기타데이터...]
    /// byte[] ppBytes = CreateLubricatorDataBytes("PP", "01");
    /// var ppData = new EnELubricatorData(ppBytes);
    /// // 주의: Price와 Liter는 실제 주유기 프로토콜에 맞게 FullByteData에 포함되어야 함
    /// this.LubricatorData(ppData);
    /// 
    /// // 예제 2: 실제 주유기에서 받은 데이터 사용
    /// // 주유기에서 수신한 바이트 배열을 직접 사용
    /// byte[] receivedData = /* 주유기에서 수신한 데이터 */;
    /// var receivedLubricatorData = new EnELubricatorData(receivedData);
    /// this.LubricatorData(receivedLubricatorData);
    /// 
    /// // 예제 3: onReceiveData에서 사용하는 방법
    /// // 실제 주유기 통신에서 데이터를 받았을 때
    /// EnELubricatorData lubricatorData = /* 파싱된 데이터 */;
    /// this.LubricatorData(lubricatorData);
    /// </code>
    /// 
    /// 실제 사용은 주유기 프로토콜에 맞는 바이트 배열을 생성하거나,
    /// 주유기에서 수신한 실제 데이터를 사용해야 합니다.
    /// </remarks>

InternalCommandHandler,InternalLubricatorData,DataPropertyChangedArgs 클래스 소스제공여부는?


6. 검량에 필요한 기차값변동등 법정파라미터의에 대한 api
 
1. 이엔이 양병화 부장 
2. 충전기에서 UI/결제 - 사무실/후방 포스 맞는지
3. 현재 충전기기능(UI,결제등등)은 완료 되었고, 어느회사와 같이 개발완료/진행 중인지 ?
3. 장위DLL를 테스트 할수 있게  GS충전기 어플리케이션을 제공할 수 있는지 ?
	- 장위DLL테스트시 애로사항/질문등등은 어느분이 담당 하시는지
	- 어떤식으로 개발하고 있는지
	- 장위는 DLL만 제공하면되는지 

```


[.NET Framework 버전 확인 방법](https://maaani.tistory.com/417)

```c#
namespace GSCaltex.KIXX.ODTSelf.DataProperty
{
    public class InternalLubricatorData
    {
        public InternalLubricatorData();
        public InternalLubricatorData(byte[] _data);

        public bool ODT { get; }
        public string ID { get; set; }
        public byte Header { get; set; }
        public string Command { get; set; }
        public string SaleIndex { get; set; }
        public string SaleDate { get; set; }
        public byte[] FullByteData { get; set; }
        public string FullStringData { get; }
        public string StringData { get; set; }
        public byte[] ByteData { get; }
        public int Length { get; }
    }
    public class InternalCommandHandler
    {
        public InternalCommandHandler();

        public static byte[] CommandResponse(string ID, string sCommand, string Result, string Data);
        public static byte[] NozzleSetting(string NozzleID, string WCC, string PriceOrQuantity, string UnitPrice, string OptData);
        public static byte[] NozzleSettingCancel(string NozzleID);
        public static byte[] PumpingData(string NozzleID, string Price, string Quantity, string UnitPrice);
        public static byte[] RequestAccumulatedGauge(string ID);
        public static byte[] RequestNozzleStatus(string NozzleID);
        public static byte[] RequestPaymentAuth(string sCommand, string ODTID, string NozzleID, string OilCode, string sWCC, string PriceOrQuantity, string sWCC1, string sCardData1, string sWCC2, string sCardData2, string sWCC3, string sCardData3, string sMetaData);
        public static byte[] RequestPrintReceipt(string ODTID, string DealNo, int CurrentPage, int TotalPage, byte[] ReceiptData, int iReceiptDataLength);
        public static byte[] RequestPumpClose(string NozzleID, string sWCC);
        public static byte[] RequestReceiptRePrint(string ODTID);
        public static byte[] ResponseAccumulatedGauge(string ID, string Value);
        public static byte[] ResponseNozzleStatus(string NozzleID, string Status, string Data);
        public static byte[] ResponseTransaction(string NozzleID, string Price, string Quantity, string UnitPrice, string OilCode, string AccData);
        public static byte[] SetOilType(string ODTID, string OilCode, string OilCodeName, string NozzleID);
        public static byte[] SetUnitPrice(string NozzleID, string UnitPrice);
    }
    public class DataPropertyChangedArgs : PropertyChangedEventArgs
    {
        public DataPropertyChangedArgs(string propertyName);
        public DataPropertyChangedArgs(string propertyName, string message);
        public DataPropertyChangedArgs(string propertyName, InternalLubricatorData data);
        public DataPropertyChangedArgs(string propertyName, string RCD, string message = null);
        public DataPropertyChangedArgs(string propertyName, decimal insertedAmount, decimal totalAmount);

        public string Message { get; set; }
        public string BARCode { get; set; }
        public string RCD { get; set; }
        public InternalLubricatorData Data { get; set; }
        public decimal InsertedAmount { get; set; }
        public decimal TotalAmount { get; set; }

        public delegate void DeviceDataHandler(DataPropertyChangedArgs args);
    }

}
```



```cmd 
reg query "HKLM\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full" /v Release
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full
```
1. cmd 에서 확인하는 방법
    - Release    REG_DWORD    0x70bf6(461814) -> .NET Framework 4.7.2(현재 Arya)
    - 378675  4.5.1 (Windows 8.1 및 Windows Server 2012 R2)
    - 393295  4.6 (Windows 10)

