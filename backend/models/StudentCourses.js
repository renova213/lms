import mongoose from "mongoose";

const { Schema, model } = mongoose;

const StudentCoursesSchema = new Schema({
  userId: String,
  courses: [
    {
      courseId: String,
      title: String,
      instructorId: String,
      instructorName: String,
      dateOfPurchase: Date,
      courseImage: String,
    },
  ],
});

export default model("StudentCourses", StudentCoursesSchema);
