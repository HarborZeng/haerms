<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TeacherList.aspx.cs" Inherits="TeacherList" %>

<!DOCTYPE html>

<html>
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="style/css/TeacherList.css">
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div class="top">
                <div class="container">
                    <div class="brand">
                         <img src="style/images/logo.png" />
                         <h1>作业与实验报告管理系统</h1>
                    </div>
                    <div class="navbar">
                        <a href="TeacherList.html" style="color:blue">教师列表</a>
                        <a href="#">院系列表</a>
                    </div>
                </div>
            </div>
            <br />
            <div class="teacher">
                 <table>
                <tr>
                    <td>姓名</td>
                    <td>工号</td>
                    <td>院系</td>
                    <td>简介</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
                <asp:Button ID="Button_createTeacher" runat="server" Text="新建" Width="98px" />
            </div> 
        </div>
    </form>
</body>
</html>
