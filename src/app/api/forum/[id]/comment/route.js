import {  mongoGetComment, mongoPostComment } from "@/mongoMethods/forum"


export const POST = async (req, context) => {
    try {
      const { params } = context;
      const data = await req.json();
      const forumId = params.id;
  
      console.log("Data received:", data);
      console.log("Forum ID:", forumId);
  
      await mongoPostComment(data, forumId);
  
      return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
    } catch (error) {
      console.error("API Error:", error.message);
      return new Response(JSON.stringify({ message: "Failed", error: error.message }), { status: 500 });
    }
  };
  

export const GET = async () => {
  try {
      const response = await mongoGetComment();

      return Response.json({
          message: "Success",
          data: response
      });
  } catch (error) {
      console.error(error.message);
      return Response.json({
          message: "Failed",  
          data: []
      })
  }
}
