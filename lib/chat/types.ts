import type { Project } from "@/lib/site";

// The chat UI only talks to a ChatEngine, so the scripted engine can later be
// swapped for one that calls an AI model (e.g. through a serverless proxy)
// without touching any components.

export type ChatMessage =
  | { role: "user"; text: string }
  | { role: "assistant"; reply: ChatReply };

export type ChatReply = {
  // Paragraphs of text. Wrap words in **double asterisks** to bold them.
  paragraphs: string[];
  // Optional project card shown under the text
  project?: Project["id"];
  // Follow-up prompts shown as chips under the reply
  suggestions?: string[];
};

export interface ChatEngine {
  reply(message: string, history: ChatMessage[]): Promise<ChatReply>;
}
