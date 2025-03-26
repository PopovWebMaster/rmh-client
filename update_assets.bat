del C:\OpenServer\domains\rmh-server\public\assets\css\*.* /q
del C:\OpenServer\domains\rmh-server\public\assets\js\*.* /q
del C:\OpenServer\domains\rmh-server\public\assets\fonts\*.* /q
del C:\OpenServer\domains\rmh-server\public\assets\img\*.* /q
xcopy C:\OpenServer\domains\rmh-client\dist\assets\css C:\OpenServer\domains\rmh-server\public\assets\css /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client\dist\assets\js C:\OpenServer\domains\rmh-server\public\assets\js /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client\dist\assets\fonts C:\OpenServer\domains\rmh-server\public\assets\fonts /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client\dist\assets\img C:\OpenServer\domains\rmh-server\public\assets\img /f /i /y /s


