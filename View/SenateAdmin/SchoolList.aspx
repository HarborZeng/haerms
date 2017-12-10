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
                        <a href="TeacherList.html">教师列表</a>
                        <a href="#" style="color:blue">院系列表</a>
                    </div>
                </div>
            </div>
            <br />
            <div class="school">
                <table>
                <tr>
                    <td>编号</td>
                    <td>名称</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
                 <asp:Button ID="Button_createSchool" runat="server" Text="新建" Width="98px" />
            </div>      
        </div>
    </form>
</body>
</html>
