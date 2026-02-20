/**
 * Slack API client for Milo Reach MCP.
 * Uses Slack Web API (https://api.slack.com/web).
 * Bot token + signing secret from env vars.
 */

import { apiCall, ApiError } from "./api-client.js";

const SLACK_API = "https://slack.com/api";

function getToken(): string {
  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) throw new ApiError("SLACK_BOT_TOKEN not configured", 0);
  return token;
}

function headers(): Record<string, string> {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json; charset=utf-8",
  };
}

// ── Types ──

export interface SlackChannel {
  id: string;
  name: string;
  is_member: boolean;
  topic?: { value: string };
  purpose?: { value: string };
  num_members?: number;
}

export interface SlackMessage {
  ts: string;
  user?: string;
  bot_id?: string;
  text: string;
  type: string;
}

export interface SlackUser {
  id: string;
  name: string;
  real_name?: string;
  profile?: { display_name?: string; email?: string };
}

// ── API calls ──

/**
 * List channels the bot has access to.
 */
export async function listChannels(
  limit = 100
): Promise<{ channels: SlackChannel[] }> {
  const res = await apiCall<{
    ok: boolean;
    error?: string;
    channels: SlackChannel[];
  }>(
    `${SLACK_API}/conversations.list?types=public_channel,private_channel&exclude_archived=true&limit=${limit}`,
    { headers: headers() }
  );
  if (!res.ok) throw new ApiError(`Slack API: ${res.error}`, 0);
  return { channels: res.channels };
}

/**
 * Read recent messages from a channel.
 */
export async function readChannel(
  channel: string,
  limit = 20
): Promise<{ messages: SlackMessage[]; channel_id: string }> {
  // Resolve channel name to ID if needed
  const channelId = channel.startsWith("C")
    ? channel
    : await resolveChannelId(channel);

  const res = await apiCall<{
    ok: boolean;
    error?: string;
    messages: SlackMessage[];
  }>(
    `${SLACK_API}/conversations.history?channel=${channelId}&limit=${limit}`,
    { headers: headers() }
  );
  if (!res.ok) throw new ApiError(`Slack API: ${res.error}`, 0);
  return { messages: res.messages, channel_id: channelId };
}

/**
 * Send a message to a channel.
 */
export async function sendMessage(
  channel: string,
  text: string,
  thread_ts?: string
): Promise<{ ts: string; channel: string }> {
  const channelId = channel.startsWith("C")
    ? channel
    : await resolveChannelId(channel);

  const body: Record<string, string> = { channel: channelId, text };
  if (thread_ts) body.thread_ts = thread_ts;

  const res = await apiCall<{
    ok: boolean;
    error?: string;
    ts: string;
    channel: string;
  }>(`${SLACK_API}/chat.postMessage`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new ApiError(`Slack API: ${res.error}`, 0);
  return { ts: res.ts, channel: res.channel };
}

/**
 * Get user info by ID.
 */
export async function getUserInfo(
  userId: string
): Promise<{ user: SlackUser }> {
  const res = await apiCall<{
    ok: boolean;
    error?: string;
    user: SlackUser;
  }>(`${SLACK_API}/users.info?user=${userId}`, { headers: headers() });
  if (!res.ok) throw new ApiError(`Slack API: ${res.error}`, 0);
  return { user: res.user };
}

// ── Helpers ──

async function resolveChannelId(name: string): Promise<string> {
  const cleanName = name.replace(/^#/, "");
  const { channels } = await listChannels(200);
  const match = channels.find((c) => c.name === cleanName);
  if (!match)
    throw new ApiError(
      `Channel "#${cleanName}" not found. Available: ${channels
        .slice(0, 10)
        .map((c) => c.name)
        .join(", ")}`,
      0
    );
  return match.id;
}
