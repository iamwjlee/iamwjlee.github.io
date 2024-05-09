# iamwjlee.github.io

## 터치보드 윈도우10 설정
```
1. 윈도우10 설치후 c:드라이브에 AryaStark폴더를 복사한다
2. AryaStark폴더를 공유디렉토리로 만든다

    2-1 폴더공유에서 everyone,guest 추가하고  트워그및공유센터에서 호보호공유끄기로 설정한다.
    2-2 폴더공유에서 everyone,guest 추가하고  네트워그및공유센터에서 암호보호공유끄기로 설정한다.
3. odt/arya.bat를 바탕화면으로 복사한다.
4. AryaStark/odt/bin/uac_disable.bat를 관리자 권한으로 실행
    동영상 실행을 위해서 (게시자를 알수없는 이 앱이 디바이스를 변경하도록 허용하기 위해)
5. 설정에서 전원관리 -> 고성능 -> 고급전원관리 -> 
    하드디스크끄기 0
    디스플레이끄기 -> 해당없슴
    화면끄기 ->없슴
    디스플레이 밝기 -> 60%
6. 고급시스템설정 -> 최적
7. 기타 원도우10 최적화 셋팅및 업데이트방지 셋팅이 필요(TBD)
    services.msc -> windows update 사용안함으로 셋팅
    gpedit.msc  -> 관리템플릿->windows 구성요소 ->windows 업데이트->자동업데이트구성 -> 사용안함
    gpedit.msc  -> 관리템플릿->시스템->인터넷통신관리 ->인터넷통신설정->모든 windows 업데이트기능에 액세스안함 ->사용
    <a href="https://itshareit.tistory.com/3">참조</a> 
    
8. 최신터치SW로 업데이트 한다(main.exe를 AryaStark/odt/release 에 복사한다) 
9. 부팅메뉴 Advanced->Miscellaneous Configuration->Restore AC Power Loss ->Power On 으로 셋팅
10. 아리아 실행화일인 main.exe를 악성코드로 오인하여 windows가 이파일을 지우는 경우가 있슴
    설정->업데이트및보안->Windows 보안->바이러스및 위협방지->설정관리 -> 제외추가또는 제거->제외사항추가 ->C:\AryaStark 폴더를 제외항목에 추가한다! 
11. NFC_dirver 디렉토리에 있는 usb 드라이버 설치

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Welcome
This is your new *vault*.
Make a note of something, [[create a link]], or try [the Importer](https://help.obsidian.md/Plugins/Importer)!

[상대 참조](./test.md)