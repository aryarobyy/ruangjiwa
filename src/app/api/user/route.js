// import { mongoPostUser, mongoGetAllUser } from "@/mongoMethods/user";
// import { v4 as uuidv4 } from "uuid";
// import bcrypt, { hash } from "bcryptjs";
// import jwt from 'jsonwebtoken'
// import jwtGenerate from "@/hooks/jwtGenerate";

// export const POST = async (req, res) => {
//     try {
//         const data = await req.json();

//         const uuid = uuidv4();
        
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(data.password, salt);

//         const newData = {...data, userId: uuid, password: hashedPassword}
//         console.log("DATAAAAA", newData)

//         const token = jwtGenerate(uuid, res)
//         await mongoPostUser(newData);
//         return Response.json({ message: "Success", token });
//     } catch (error) {
//         console.error(error.message);
//         return Response.json({
//             message: "Failed",
//         });
//     }
// };

// export const GET = async (res) => {
//     try {
//         const response = await mongoGetAllUser();

//         jwtGenerate(response, res)
//         return Response.json({
//             message: "Success",
//             data: response,
//         });
//     } catch (error) {
//         console.error(error.message);
//         return Response.json({
//             message: "Error",
//             data: [],
//         });
//     }
// };
