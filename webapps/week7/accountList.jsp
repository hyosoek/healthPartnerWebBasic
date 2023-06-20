<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<!-- dB통신을 위한 것 -->
<%@ page import="java.sql.DriverManager"%>
<!-- 탐색라이브러리 -->
<%@ page import="java.sql.Connection"%>
<!-- 연결라이브러리 -->
<%@ page import="java.sql.PreparedStatement"%>
<!-- 요청라이브러리 -->
<%@ page import="java.sql.ResultSet"%>

<%@ page import="java.util.ArrayList"%>



<!-- jsp영역 -->
<%
    //jsp의 영역입니다. jsp의 주석은 //입니다.

    //Connector 파일을 불러오기
    Class.forName("com.mysql.jdbc.Driver");

    //DB 연결하기
    Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/healthpartner","hyoseok","123123z"); // 원래 mysql:ip를 적어줌.
    
    //SQL 만들기
    String sql = "SELECT * FROM user;"; //SQL 만들고
    PreparedStatement query = connect.prepareStatement(sql); //만들어진 SQL로 통신 준비

    //sql 전송
    ResultSet result = query.executeQuery();

    //2차원 리스트로 만들어서 전달
    //데이터 정제
    ArrayList<String> idList = new ArrayList<String>();
    ArrayList<String> pwList = new ArrayList<String>();

    while(result.next()){
        String id = result.getString(1);
        String pw = result.getString(2);
        idList.add("\""+id+"\"");
        pwList.add("\""+pw+"\""); 
    } //커서를 계속 내려줌

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
    <script>
        var idList = <%=idList%>;
        var pwList = <%=pwList%>;
        for(var index = 0; index<idList.length;index++){
            console.log(idList[index],pwList[index]);
        }
    </script>
</body>