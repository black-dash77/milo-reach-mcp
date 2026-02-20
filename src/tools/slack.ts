/**
 * Slack MCP tools — slack_send, slack_read, slack_channels
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  listChannels,
  readChannel,
  sendMessage,
  getUserInfo,
} from "../apis/slack.js";

export function getSlackTools(): Tool[] {
  return [
    {
      name: "slack_channels",
      description:
        "List Slack channels the bot has access to. Returns channel names, IDs, topics, and member counts.",
      inputSchema: {
        type: "object" as const,
        properties: {
          limit: {
            type: "number",
            description: "Max channels to return (default 100)",
          },
        },
        required: [],
      },
    },
    {
      name: "slack_read",
      description:
        "Read recent messages from a Slack channel. Accepts channel name (e.g. 'tous-fourfive') or channel ID.",
      inputSchema: {
        type: "object" as const,
        properties: {
          channel: {
            type: "string",
            description:
              "Channel name (without #) or channel ID (e.g. 'milo-reach' or 'C01234ABCDE')",
          },
          limit: {
            type: "number",
            description: "Number of messages to fetch (default 20, max 100)",
          },
        },
        required: ["channel"],
      },
    },
    {
      name: "slack_send",
      description:
        "Send a message to a Slack channel. Accepts channel name or ID. Supports threading via thread_ts.",
      inputSchema: {
        type: "object" as const,
        properties: {
          channel: {
            type: "string",
            description: "Channel name (without #) or channel ID",
          },
          text: {
            type: "string",
            description: "Message text (supports Slack mrkdwn formatting)",
          },
          thread_ts: {
            type: "string",
            description:
              "Optional: timestamp of parent message to reply in thread",
          },
        },
        required: ["channel", "text"],
      },
    },
    {
      name: "slack_user",
      description:
        "Get Slack user info by user ID. Returns name, display name, email.",
      inputSchema: {
        type: "object" as const,
        properties: {
          user_id: {
            type: "string",
            description: "Slack user ID (e.g. 'U01234ABCDE')",
          },
        },
        required: ["user_id"],
      },
    },
  ];
}

export async function handleSlackTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "slack_channels": {
      const limit = (args.limit as number) || 100;
      const result = await listChannels(limit);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                total: result.channels.length,
                channels: result.channels.map((c) => ({
                  id: c.id,
                  name: c.name,
                  is_member: c.is_member,
                  topic: c.topic?.value || "",
                  members: c.num_members || 0,
                })),
              },
              null,
              2
            ),
          },
        ],
      };
    }

    case "slack_read": {
      const channel = args.channel as string;
      if (!channel) {
        return {
          content: [
            { type: "text", text: JSON.stringify({ error: "channel required" }) },
          ],
        };
      }
      const limit = Math.min((args.limit as number) || 20, 100);
      const result = await readChannel(channel, limit);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                channel_id: result.channel_id,
                message_count: result.messages.length,
                messages: result.messages.map((m) => ({
                  ts: m.ts,
                  user: m.user || m.bot_id || "unknown",
                  text: m.text,
                })),
              },
              null,
              2
            ),
          },
        ],
      };
    }

    case "slack_send": {
      const channel = args.channel as string;
      const text = args.text as string;
      if (!channel || !text) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: "channel and text required" }),
            },
          ],
        };
      }
      const thread_ts = args.thread_ts as string | undefined;
      const result = await sendMessage(channel, text, thread_ts);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              success: true,
              channel: result.channel,
              ts: result.ts,
              message: `Message sent to ${channel}`,
            }),
          },
        ],
      };
    }

    case "slack_user": {
      const userId = args.user_id as string;
      if (!userId) {
        return {
          content: [
            { type: "text", text: JSON.stringify({ error: "user_id required" }) },
          ],
        };
      }
      const result = await getUserInfo(userId);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                id: result.user.id,
                name: result.user.name,
                real_name: result.user.real_name,
                display_name: result.user.profile?.display_name,
                email: result.user.profile?.email,
              },
              null,
              2
            ),
          },
        ],
      };
    }

    default:
      return null;
  }
}
