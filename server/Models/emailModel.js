// for purpose of creating api not overlapping with user

const emailSchema = mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
    },
    {
      timeStamp: true,
    }
  );
  const email = mongoose.model("email", emailSchema);
  
  export default email;