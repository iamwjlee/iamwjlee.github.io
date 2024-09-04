# Deep Slumber

## 깊은 잠 
![깊은잠](./res/깊은잠.png)


## JPOS3000
```
A. 디스펜서 하드웨어 구성
    -메인보드+업보드(uSD카드)
    -통신보드(External Interface Board) : 
        (mainA[rxA.txA,txEnablA]+mainB[rxB,txB,txEnablB]) -> rs485/422 Transceivers x2 ->rs422A,rs422B,rs485(x) 
    -쪽보드(485/232컨버터 폴링방식의 마스터용) 
    -232/USB 컨버터 
    -사무실PC
B. 디스펜서와 장위포스프로그램 연결
    디버깅: 
        1. dnw.exe을 실행해 연결한다
        2. 가상머신에서 장위포스를 열고 연결 확인한다.
        3. 업보드에 232통신라인을 연결후 확인(디버깅 로그모드 'P'->'U')

    장위포스프로그램(422통신)위치 D:\wj\vm-win7shared\ZJPOSCOMM_SD_V1.0
        포스설정프로그램의 콤포트와 보레이트(19200)확인,JPOS3000의 보레이트확인 

1. 하드웨어 정보
    -메인 보드 : S3C44B0X(160-QFP)
    -업 보드(for KTC uSD) : AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP  
    -통신인터페이스보드: 422/485 B'd

    

2. 메인보드 부트및 메인프로그램 다운로드    
    부트프로그램 다운로드 - using hw jtag in the test lab or factory 
    메인프로그램 다운로드 - 
        DNW v0.51A 윈도프로그램(dnw.exe)를 실행하고 
        1. Configuration -> 컴포트설정,속도는 115200
        2. Serial Port-> Connect 
        3. 디스펜서의 키패드에서 "설정+5+0000"을 눌러 프로그램 다운로드모드로 진입한다.
        4. dnw의 화면에 1.Flash Write 2.Running 3. Reset 메뉴가 보인다
        5. 1(Flash Write) 을 입력하고,Serial Port-> Transmit를 선택후 파일창에서 JPOS3OOO.bin파일을 선택하여 다운로드를 진행한다
        6. 진행이 끝나면 2(Running)를 입력하면 완료!


3. Released Firmware    
    메인 소스: D:\wj\A.PROJECTS\J.jpos3001
    부트 소스: 소스는 미확인. 다운로드는 장차장또는 마석에서
    컴파일러: CodeWarrior ARM ADS1.2 installed at C:\Program Files\ARM\ADSv1_2 
             CodeWarrior project filename is JPOS3000.mcp
    컴파일러 위치:  \\Jposnas\hw\_wjlee\ARM ADS(ARM Developer Suite) 1.2
    펌웨어 다운로드 by serial communication application dnw.exe in external PC 
    현재릴리즈 버전은 모바일단말기(FM) 대응

4. Old Firmware(밴사별 IC-CARD 릴리즈 버전)    
    입사전 오리지널 펌웨어 소스: D:\wj\JPOS3000\이전버전  
    입사후 약간 수정된 펌웨어 소스: D:\wj\A.PROJECTS\J.jpos3000.ic.version 

5. jpos3000-KTC인증받은 uSD카드 업보드
    메인 소스 : JPOS3000\uSD_Ver39_Rtc_인증버젼
        - 부트로더 ? 
        - refer to \\Jposnas\hw\_Lym\__JPOS_3000\ATBoot1SRamFlash2000V50 
        - 시리얼통신 다운로드툴 ? 
        - 컴파일및 기타 정보없슴 AT91SAM7X256.h,AT91SAM7X256.inc
    생산용실행파일: ? how to download ? 지금은 오리지널 JPOS3000 충전기를 생산하지 않는다.
    컴파일러및 마이컴( 미관리 대상, 이용민 이사님/장차장 문의해 봐야)
    [확인]\\Jposnas\hw\_Lym\__JPOS_3000\ATBoot1SRamFlash2000V50\BootBodyF2F
    AT91SAM7X256.h,AT91SAM7X256.inc 

```
## JPOS3000-Kiosk
```
1. board information
    기존에 디스펜서에 사용중인 Main B'd: S3C44B0X(160-QFP)
    기존에 디스펜서에 적용중인 Daughter B'd(for KTC uSD): AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP
    키오스크에서 추가된 Interface B'd: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    키오스크에서 추가된 Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard

2. 키오스크 인터페이스(버퍼)보드 boot & app
    1-1. Boot download: using atmel sam-ice with Sam70BootJPos_buffer
        실행파일:Sam70Boot.bin,Sam79BootJos_bufer.bin 미확인
        위치:D:\wj\A.PROJECTS\jpos5000\Sam70BootJPosV1.3_Com3_ID2_Buffer\Sam70Boot\Debug
    1-2. Application download:using SAmUploaderV40.exe in the Kiosk          
        실행파일:J5000Buffer.bin(사용중),J5000Buffer-PR.bin(버퍼늘린버전,미적용)
        위치:D:\wj\A.PROJECTS\J.jpos5000.buffer\J5000Buffer\Debug

3. 키오스크 충전기보드 boot & app
    1-0. 
        충전기메인보드에 별도의 부트를 먼저다운로드 하는 이유는 키오스크에서 SamUploaderV40.exe를 이용해
        펌웨어를 다운로드 하기 위함. 
        부트없이 기존처럼 그냥 펌웨어를 다운로드해서 사용해도 무관
    1-1. Boot download: BootLoader.bin downloading by dnw.exe(press 1 and then 2) 
        실행 방법:
            통신보드에 시리얼연결 노트북으로
        실행파일:
            BootLoader.bin 
        파일위치: 
            D:\wj\A.PROJECTS\jpos3000-Kiosk\S3C44B0X_Boot_Ver15_MPr10004_80004\Boot_Job\JPos3000_BootF_Data\Release 
    1-2. Application download: using SAmUploaderV40.exe in the Kiosk
        실행파일:
            JPOS3000_210808_SD.bin : SD카드사용하는 버전
            JPOS3000_210808_NoSD.bin : SD카드사용안하는 버전
        파일위치: 
            D:\wj\A.PROJECTS\J.jpos3000.kiosk.main\JPOS3000_Data\Release

4. 키오스크 터치보드      
    Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard
    운영체제: Windows 10 Enterprise LTSC   
    컴파일러: gcc-6.3.0 + SDL2-2.0.7/i686-w64-mingw32
    jpos3000키오스크와 jpos5000일체형 터치보드 소프트웨어(공용)
    실행파일:
        main.exe
    파일위치:
        D:\wj\Gnomeregan\J.odt\release   

5. jpos3000-KTC인증
    uSD카드사용하기위한 업보드는 기존과 동일

```
## JPOS5000

![메인](./res/jpos5000main.png)
![버퍼](./res/jpos5000int.png)
```
1. 보드 정보
    유량계 메인보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    인터페이스 보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    터치 마더보드: Intel Bay trail Soc Chipset INX-N29 Motherboard

2. 메인보드 부트로더및 메인코드
    부트로더 다운로드: using atmel sam-ice with Sam70BootJPos_main
        실행파일:Sam70Boot.bin,Sam70Boot_main.bin ?
        위치:D:\wj\A.PROJECTS\jpos5000\Sam70BootJPosV1.3_485_ID1_Main\Sam70Boot\Debug
    메인코드 다운로드: using SAmUploaderV40.exe in the Kiosk
        실행파일:flowmeter-ads1118.bin
        위치:D:\wj\A.PROJECTS\J.jpos5000.main.ads1118\flowmeter\Release

3. 인터페이스보드 부트및 메인코드(키오스크와 동일)
    부트로더 다운로드: using atmel sam-ice with Sam70BootJPos_buffer
        실행파일:Sam70Boot.bin,Sam79BootJos_bufer.bin 확인요망??
        위치:D:\wj\A.PROJECTS\jpos5000\Sam70BootJPosV1.3_Com3_ID2_Buffer\Sam70Boot\Debug

    메인코드 다운로드: using SAmUploaderV40.exe in the jpos5000 touch screen
        실행파일:J5000Buffer.bin,J5000Buffer-PR.bin
        위치:D:\wj\A.PROJECTS\J.jpos5000.buffer\J5000Buffer\Debug

4. Touch B'd App
    위치: D:\wj\Gnomeregan\J.odt
    메인코드 다운로드: 
        컴파일된  mainU.exe를 키오스크의 \\odt01\AryaStark\odt\release 로 카피

```
## Arya How to Compile and Execute

```
on the Command Prompt
D:\wj\Gnomeregan\J.odt>setenv
D:\wj\Gnomeregan\J.odt>make clean_all
D:\wj\Gnomeregan\J.odt>make 
실행파일은 D:\wj\Gnomeregan\J.odt\release\main.exe
업데이트 파일은 D:\wj\Gnomeregan\J.odt\release\mainU.exe

```



<!-- ### Input form in markdown -->

<!-- 아이디 <input type="text"  name="name"  />
비밀번호 <input type="password"  name="password" />
제출 <input type="submit" value="제출"/> -->


<script>
    
</script>