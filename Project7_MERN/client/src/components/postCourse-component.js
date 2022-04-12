import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const PostCourseComponent = (props) => {
  // let [courseData, setCourseData] = useState(null);
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const postCourse = () => {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("New course has been created.");
        navigate("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  // useEffect(() => {
  //   console.log("using effect");
  //   console.log(currentUser);
  //   let _id = currentUser.user._id;
  //   console.log(currentUser.user.role);
  //   if (currentUser.user.role == "instructor") {
  //     CourseService.get(_id)
  //       .then((data) => {
  //         console.log(data.data);
  //         setCourseData(data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else if (currentUser.user.role == "student") {
  //     CourseService.getEnrolled(_id)
  //       .then((data) => {
  //         console.log(data.data);
  //         setCourseData(data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, []);
  return (
    <div style={{ padding: "3rem" }}>
      {message && (
        <div className="alert alert-warning" role="alert">
          {message}
        </div>
      )}
      {!currentUser && (
        <div>
          <p>You must login first before seeing posts.</p>
          <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div>
          <h1>Only instruct can post new courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="form-group">
          <label for="exampleforTitle">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleChangeTitle}
          />
          <br />
          <label for="exampleforContent">Content</label>
          <textarea
            name="content"
            type="text"
            className="form-control"
            id="exampleforContent"
            onChange={handleChangeDescription}
          />
          <br />
          <label for="exampleforPrice">Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleforPrice"
            onChange={handleChangePrice}
          />
          <br />
          <button className="btn btn-primary" onClick={postCourse}>
            Submit
          </button>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;
