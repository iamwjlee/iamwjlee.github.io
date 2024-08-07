# Deep Slumber

## 깊은 잠 
![깊은잠](./res/깊은잠.png)


## JPOS3000
```
1. Board Information
    Main B'd : S3C44B0X(160-QFP)
    Daughter B'd(for KTC uSD) : AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP  
    422/485 B'd
2. Main B'd boot & app    
    bootdownload - using hw test room or factory using jtag?
    application download -using dnw.exe + dispenser's setup menu(9+0000)    
3. Released Firmware    
    메인 소스: A.PROJECTS\J.jpos3001
    부트 소스: 소스=? 파일 이름=?
    컴파일러: ARM ADS1.2 installed at C:\Program Files\ARM\ADSv1_2 
    컴파일러 위치:  \\Jposnas\hw\_wjlee\ARM ADS(ARM Developer Suite) 1.2
    다운로드 by dnw.exe
    현재릴리즈 버전 + 모바일단말기(FM) 대응
4. Old Firmware    
    J.jpos3000.ic.version
    이전에 사용되된 밴사별 IC-CARD 릴리즈 버전
    오리지널 이전펌웨어 소스: JPOS3000\이전버전    

5. jpos3000-KTC인증용 업보드
    메인 소스: JPOS3000\uSD_Ver39_Rtc_인증버젼
    생산용실행파일: ? how to download ?
    컴파일러및 마이컴(이용민 이사님)
    uSD카드사용하기위한 업보드

```
## JPOS3000-Kiosk
```
1. board information
    기존에 디스펜서에 사용중인 Main B'd: S3C44B0X(160-QFP)
    기존에 디스펜서에 적용중인 Daughter B'd(for KTC uSD): AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP
    키오스크에서 추가된 Interface B'd: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    키오스크에서 추가된 Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard
2. Interface(Buffer) boot & app
    Boot download: using atmel sam-ice with Sam70BootJPos_buffer
    실행파일:Sam70Boot.bin,Sam79BootJos_bufer.bin 확인요망??
    위치:A.PROJECTS\jpos5000\Sam70BootJPosV1.3_Com3_ID2_Buffer\Sam70Boot\Debug
    Application download:using SAmUploaderV40.exe in the Kiosk          
    실행파일:J5000Buffer.bin,J5000Buffer-PR.bin
    위치:A.PROJECTS\J.jpos5000.buffer\J5000Buffer\Debug
3. jpos3000kiosk-main boot & app
    Boot download: BootLoader.bin downloading by dnw.exe(press 1 and then 2) 
    실행파일:BootLoader.bin 
    위치: A.PROJECTS\jpos3000-Kiosk\S3C44B0X_Boot_Ver15_MPr10004_80004\Boot_Job\JPos3000_BootF_Data\Release 
    <b>Application download:</b> using SAmUploaderV40.exe in the Kiosk
    실행파일:JPOS3000_210808_SD.bin,JPOS3000_210808_NoSD.bin 
    위치: A.PROJECTS\J.jpos3000.kiosk.main\JPOS3000_Data\Release

4. J.odt     
    Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard
    운영체제: Windows 10 Enterprise LTSC   
    컴파일러: gcc-6.3.0 + SDL2-2.0.7/i686-w64-mingw32
    jpos3000Kiosk 와 jpos5000용 터치보드 소프트웨어(공용)
    실행파일:main.exe
    위치:A.PROJECTS\J.odt\release

5. jpos3000-KTC인증
    uSD카드사용하기위한 업보드를 사용하는 J.jpos3000 펌웨어




```
## JPOS5000
```
1. Board Information
    유량계 메인보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    인터페이스 보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
    터치 마더보드: Intel Bay trail Soc Chipset INX-N29 Motherboard

2. 메인보드 부트로더및 메인코드
    <b>Boot download:</b> using atmel sam-ice with Sam70BootJPos_main, Sam70BootJPos_buffer 
    실행파일:Sam70Boot.bin,Sam70Boot_main.bin
    위치:A.PROJECTS\jpos5000\Sam70BootJPosV1.3_485_ID1_Main\Sam70Boot\Debug
    App download: using SAmUploaderV40.exe in the Kiosk
    실행파일:flowmeter-ads1118.bin
    위치:A.PROJECTS\J.jpos5000.main.ads1118\flowmeter\Release
3. Interface B'd boot & App(kiosk와 동일)
    <li> <b>Boot download:</b> using atmel sam-ice with Sam70BootJPos_buffer </li>
    <li>실행파일:Sam70Boot.bin,Sam79BootJos_bufer.bin <b>??확인요망??</b></li>
    <li>위치:A.PROJECTS\jpos5000\Sam70BootJPosV1.3_Com3_ID2_Buffer\Sam70Boot\Debug</li>

    <li> <b>App download:</b> using SAmUploaderV40.exe in the Kiosk</li>    
    <li>실행파일:J5000Buffer.bin,J5000Buffer-PR.bin</li>
    <li>위치:A.PROJECTS\J.jpos5000.buffer\J5000Buffer\Debug</li>
4. Touch B'd App
    <li> J.odt: latest </li>
    <li>main.exe is updated with mainU.exe</li>


```

<!-- ### Input form in markdown -->

<!-- 아이디 <input type="text"  name="name"  />
비밀번호 <input type="password"  name="password" />
제출 <input type="submit" value="제출"/> -->


<script>
</script>