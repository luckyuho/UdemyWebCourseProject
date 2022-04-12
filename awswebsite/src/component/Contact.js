import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ie2ayhr",
        "template_be4yhmq",
        form.current,
        "LGcXk5aiidNnFQrJO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.alert(
      "Thanks for your message :)\n You will receive an auto-reply message!"
    );
    form.current.reset();
  };
  return (
    <div>
      <main>
        <section class="form">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label for="from_name">姓名:</label>
              <input type="text" name="from_name" />
            </div>
            <div>
              <label for="email">郵件:</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label for="phone">電話:</label>
              <input type="text" name="phone" />
            </div>
            <div>
              <label for="message">訊息:</label>
              <textarea name="message" id="message" rows="10"></textarea>
            </div>
            <button type="submit">提交表單</button>
          </form>
        </section>

        <div class="line"></div>

        <section class="contact">
          <div class="content">
            <h2>我的電話: 暫不提供</h2>
            <h2>我的Email: 暫不提供</h2>
            <h2>方便聯絡時間: 再累都要與你喝杯咖啡</h2>
            <h2>其他聯絡方式: Email(可透過提交表單聯絡我)</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
