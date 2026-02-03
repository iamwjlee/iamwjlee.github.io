# Clear Fell

### Witch's Essence Drain 
![위치](./res/poe2/witch.png)
![전염](./res/poe2/WitchContagion.png)

C# Dev Kit only supports SDK-style projects. Upgrade your project to an SDK-style project.
Canonical.cs 프로젝트를 로드하는 동안 문제가 발생했습니다.

``` cpp
"정수 하나를 받고, 아무것도 반환하지 않는 함수 포인터 타입"
typedef void (*ValueCallback)(int value);

"c#에서는 정수 하나를 받고, 아무것도 반환하지 않는 함수를 가리킬 수 있는 타입을 만들기" 
public delegate void ValueCallback(int value);
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

