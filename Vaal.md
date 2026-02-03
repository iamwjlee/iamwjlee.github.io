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


```cmd 
reg query "HKLM\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full" /v Release
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full

```
1. cmd 에서 확인하는 방법
    - Release    REG_DWORD    0x70bf6(461814) -> .NET Framework 4.7.2(현재 Arya)
    - 378675  4.5.1 (Windows 8.1 및 Windows Server 2012 R2)
    - 393295  4.6 (Windows 10)

