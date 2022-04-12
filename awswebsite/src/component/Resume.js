import React from "react";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <div style={{ margin: "4rem 2rem" }}>
      <Helmet>
        <title>{"我的履歷 | YUHO 網頁工程師"}</title>
      </Helmet>
      <main>
        <section class="table">
          <table>
            <thead>
              <tr>
                <td style={{ width: "20%" }}>自我簡介</td>
                <td style={{ width: "80%" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda cupiditate ducimus, modi deserunt officiis suscipit
                  animi. Rem neque sunt nostrum, quidem natus optio at iusto.
                  Rerum repudiandae esse sit veniam!
                </td>
              </tr>
              <tr>
                <td>學歷</td>
                <td>成功大學 航空太空工程學系控制組</td>
              </tr>
              <tr>
                <td>經歷</td>
                <td>
                  <ol>
                    <li>asd</li>
                    <li>wer</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>語言</td>
                <td>
                  <ul>
                    <li>中文: 精通</li>
                    <li>英文: 還不錯</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>專長</td>
                <td>
                  <img src="/icons/html5.svg" alt="html" title="html" />
                  <img src="/icons/css3.svg" alt="css" title="css" />
                  <img
                    src="/icons/javascript.svg"
                    alt="javascript"
                    title="javascript"
                  />
                  <img src="/icons/react.svg" alt="react" title="react" />
                </td>
              </tr>
              <tr>
                <td>開發經驗</td>
                <td>內容</td>
              </tr>
            </thead>
          </table>
        </section>

        <section class="picture">
          <div>
            <img src="/images/headshot.jpeg" alt="" />
            <div class="orangeRect"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
