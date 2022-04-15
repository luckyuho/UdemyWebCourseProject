# MERN Project
- 這個專案類似Udemy的開課與註冊課程功能，身份可註冊為instructor與student，instructor可開課程及查看自己已開課程，student可搜尋及註冊課程，以及自己已註冊的課程。
- 主要結構可分為 “伺服器資料庫” 與 “客戶端” 兩部分。

## 伺服器資料庫
- 伺服器：採用mongodb atlas
- 於伺服器上的資料庫中建立了兩種model(相當於SQL的table) courses 與 users
<div align="center">
<table>
  <tr>
    <td>courses: <br />
     (其中建立了兩筆資料，分別為"Learning React"與"Java"，其中instructor的ID為"624ef31b120512aba21f73da"):
   </td>
    <td>users: <br/>
     (其中建立了七筆資料，值得注意username為zxc(role: "student")與asd(role: "instructor")，其中asd的ID為"624ef31b120512aba21f73da"，也是上面兩堂課程的開課講師):
   </td>
  </tr>
  <tr>
   <td align="center"><img src="https://github.com/luckyuho/UdemyWebCourseProject/blob/main/Project7_MERN/images/mongodbCourses.png" width=270 height=340 title="mongodb courses" /></td>
   <td align="center"><img src="https://github.com/luckyuho/UdemyWebCourseProject/blob/main/Project7_MERN/images/mongodbUsers.png" width=270 height=340 title="mongodb users" /></td>
   </tr>
</table>
 </div>

## 客戶端
- 以下可分為首頁、註冊、登入、登出、個人資料、課程(student看到的是自己已註冊課程，instructor看到的是自己已開課課程)、{註冊｜開課}(student看到的是搜尋課程，instructor則可建立新課程)
<div align="center">
<table>
  <tr>
    <td>register</td>
    <td>login</td>
  </tr>
  <tr>
    <td><img src="https://github.com/luckyuho/UdemyWebCourseProject/blob/main/Project7_MERN/images/register.png" width=270 height=340 title="register" /></td>
    <td><img src="https://github.com/luckyuho/UdemyWebCourseProject/blob/main/Project7_MERN/images/login.png" width=270 height=340 title="login" /></td>
  </tr>
</table>
</div>

<img src="https://github.com/luckyuho/UdemyWebCourseProject/blob/main/Project7_MERN/images/instructPostCourse.png" width="200" title="instruct post course" />
