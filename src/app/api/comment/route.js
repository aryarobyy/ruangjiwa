import { mongoPostComment} from "@/mongoMethods/forum"

export const POST = async (req, context) => {
  try {
    const { params } = context; // Properly destructuring params from context
    const data = await req.json();
    const forumId = params.id; // Correctly accessing the forum ID

    await mongoPostComment(data, forumId);

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    console.error("API Error:", error.message);
    return new Response(JSON.stringify({ message: "Failed", error: error.message }), { status: 500 });
  }
};
