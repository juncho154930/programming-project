import { NextResponse } from "next/server";
// import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    const body = await req.json();
    const { messages } = body;

    const openAiParams: OpenAI.Chat.ChatCompletionCreateParams = {
      model: "gpt-3.5-turbo",
      messages: [...messages],
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(openAiParams);

    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.log("[PROMPT_OPEN_AI_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
