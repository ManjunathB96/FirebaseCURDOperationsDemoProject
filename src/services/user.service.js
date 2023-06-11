import User from '../config/database.js';

//get all users
export const getAllUsers = async () => {
  const getData = await User.get();
  // const userId=getData.docs.map((doc)=>doc.id)
  // console.log("Output ===> app.get ===> userId:", userId);

  const userDetails = getData.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return userDetails;
};

// //create new user
// export const newUser = async (body) => {
// const data =await User.add(body);
// return data
// };

//create new user
export const newUser = async (body) => {
  const entry = await User.doc();
  const entryObj = {
    id: entry.id,
    ...body
  };
  const data = entry.set(entryObj);
  console.log('Output ===> newUser ===> data:', data);
  return entryObj;
};

//update single user
export const updateUser = async (body) => {
  console.log('Output ===> updateUser ===> body:', body);
  const id = body.id;
  // console.log("Output ===> before deleting===> id:", body);
  delete body.id;
  // console.log("Output ===> after deleting===> id:", body);
  const data = body;
  return await User.doc(id).update(data);
};

//delete single user
export const deleteUser = async (body) => {
  const id = body.id;
  await User.doc(id).delete();
  return { msg: 'deleted' };
};

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };

// app.get("/", async (req, res) => {
//   const getData = await User.get();
//   // const userId=getData.docs.map((doc)=>doc.id)
//   // console.log("Output ===> app.get ===> userId:", userId);

//   const userDetails = getData.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   res.send(userDetails);
// });

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await User.add(data);
//   res.send({ msg: "User added successfully" });
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   console.log("Output ===> before deleting===> id:", re.body);
//   delete req.body.id;
//   console.log("Output ===> after deleting===> id:", re.body);
//   const data = req.body;
//   await User.doc(id).update(data);
//   res.send({msg:"Updated successfully"})
// });
// app.post("/delete", async (req, res) => {
//   const id = req.body.id;

//   await User.doc(id).delete();
//   res.send({msg:"deleted"})
// });
