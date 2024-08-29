# Frightsome Howl

## 섬찟한 울음소리
![섬찟한울음소리](./res/섬찟한울음소리.png)


## JPOS3000 메인보드
![업보드](./res/jpos3000main.png)

    Top connection:
        vfd-conn#1/vfd-conn#2,upboard-conn,jtag-conn,nozzleSW-conn
    Left connection:
        232/isp-conn,keypad-conn,lcd-conn,ac-conn
    Right connection:
        printer-sel-conn,printer-conn,rftag-conn,counter-conn,bat-conn
    Bottom connection:
        pump-conn,sol-conn

## JPOS3000 업보드
![업보드](./res/upboard.png)

## JPOS3000 485/422 통신보드
![422통신보드](./res/ext-interface.png)

    Input:
        MainA 232rx/tx,isp(rx,tx,reset,boot)
        MainA 232rx/tx,isp(rx,tx,reset,boot)
    Output:
        IspA(6pin) for MainA download
        IspB(6pin) for MainB download
        RS422A
        RS422B
        RS485

## JPOS3000 485/232 쪽보드 for PC
![422쪽보드](./res/485To232.png)

