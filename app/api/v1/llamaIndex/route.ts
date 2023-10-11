import {
  Document,
  storageContextFromDefaults,
  VectorStoreIndex,
} from "llamaindex";
// import essay from "@/assets/mockdata/essay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, fileContent } = body;

    // Create Document object with essay
    const document = new Document({ text: fileContent, id_: "uploaded-file" });

    // Split text and create embeddings. Store them in a VectorStoreIndex
    // persist the vector store automatically with the storage context
    const storageContext = await storageContextFromDefaults({
      persistDir: "./storage",
    });

    // optionally query the index
    const index = await VectorStoreIndex.fromDocuments([document], {
      storageContext,
    });
    // optionally load the index
    // const index = await VectorStoreIndex.init({
    //   storageContext,
    // });

    // Query the index
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query(message);

    return NextResponse.json(response.toString());
  } catch (error) {
    console.log("[PROMPT_OPEN_AI_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
