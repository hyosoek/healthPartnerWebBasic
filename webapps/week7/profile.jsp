<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<!-- dB통신을 위한 것 -->
<%@ page import="java.sql.DriverManager"%>
<!-- 탐색라이브러리 -->
<%@ page import="java.sql.Connection"%>
<!-- 연결라이브러리 -->
<%@ page import="java.sql.PreparedStatement"%>
<!-- 요청라이브러리 -->


<!-- jsp영역 -->
<%
    //jsp의 영역입니다. jsp의 주석은 //입니다.
    // 앞 페이지에서 받아온 값을 저장

    //앞에서 받아온 모든 통신 자첼르 의미 = request
    request.setCharacterEncoding("utf-8"); //받아온 값에 대한 인코딩 설정, 안하면 깨짐.
    String idValue = request.getParameter("id_value");
    String pwValue = request.getParameter("pw_value");

    //받은 값으로 db 통신
    //Connector 파일을 불러오기
    Class.forName("com.mysql.jdbc.Driver");
    //DB 연결하기
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/healthpartner","hyoseok","123123z"); // 원래 mysql:ip를 적어줌.
    //SQL 만들기
    String sql = "INSERT INTO user (id,pw) VALUES (?,?);"; //SQL 만들고
    PreparedStatement query = connect.prepareStatement(sql); //만들어진 SQL로 통신 준비
    query.setString(1,idValue);
    query.setString(2,pwValue);

    //sql 전송
    query.executeUpdate();

    //READ는 어떻게 하는가?
    
%>

<!-- CRUD -->
<!-- CREATE, UPDATA, DELETE -->
<!-- READ 모양이 다름 -->


<!-- html 영역 -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><%=idValue%></h1>
    <h1><%=pwValue%></h1>
</body>