ctrl + shift + I ------> to open developer tool



Transformation 

main background mein 4 boxes bnaye hein .... phir unko style kiya hai ..... 

2D Transformation

1. Translate :
    box m ja k ....  
    .box:hover{
        transform : translateX(300px);     //iss se smoothness nhi aati .... left m jaane k liye (-300px)
    }

    vertical k liye X ki jagah Y .... y k positive m neeche jaata hai 

    parent m ja k .... 
    .box{
        transition : transform 2s;
    }


2. Rotate :
    .box:hover{
        transform : rotate(90deg);    //anticlockwise k liye -90deg
    }


    .box:hover{
        transform : rotate(360deg) Translate(300px,0px);
    }


3. Scale :
    .box:hover{
        transform : scale(2);     // 1 se bdi value bda karegi .... aur points wali value chhota karegi
    }

4. skew :
    .box:hover{
        transform : skew(30deg,-45deg);
    }


3D Transform

transform : rotate3D(60,0,0,60deg);

transform : translate3D(0px,0px,-50px);

transform : rotate() translate();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


car , city , highway , sky , wheel


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1MB=1024 KB 

WEB STORAGE 

1.Local Storage
2.Session Storage

http : state-less protocol



