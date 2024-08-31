import connectDb from "@/libs/mongodb";
import { monitorMessagesChanges } from "@/mongoMethods/konsul";

export const GET = async (req, res) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection('konsul_chat');
        // await col.createIndex({ konsulId: 1 });
        
        const pipeline = [
            { $match: { 'fullDocument.konsulId': 'testingId' } },
            { $addFields: { newField: 'this is an added field!' } }
          ];

        const changeStream = col.watch(pipeline);
        
  // Return a ReadableStream to stream events to the client
  const stream = new ReadableStream({
    start(controller) {
      // Send change events to the client
      changeStream.on('change', (change) => {

        // Write the event data in Server-Sent Event format
        controller.enqueue(
          `data: ${JSON.stringify(change)}\n\n`
        );
      });

      changeStream.on('error', (err) => {
        console.error('Change Stream error:', err);
        controller.close();
      });

      changeStream.on('close', () => {
        controller.close();
      });
    },
    cancel() {
      changeStream.close();
      client.close();
    },
  });

        return new Response(stream, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
            },
          });
    } catch (error) {
        console.error("error api: ", error.message);
        return Response.json({message: error.message})
      }
};
