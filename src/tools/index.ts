/**
 * Central tool registry for Milo Reach MCP server.
 *
 * The MCP SDK allows only ONE handler per request type (ListToolsRequestSchema,
 * CallToolRequestSchema). This file aggregates all tools from individual modules
 * and registers a single pair of handlers.
 */

import type { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { getDiscoveryTools, handleDiscoveryTool } from "./discovery.js";
import { getEnrichmentTools, handleEnrichmentTool } from "./enrichment.js";
import { getStorageTools, handleStorageTool } from "./storage.js";
// Stubs for future tool modules — will be implemented in Phase 3
import { getKnowledgeTools, handleKnowledgeTool } from "./knowledge.js";
import { getAnalysisTools, handleAnalysisTool } from "./analysis.js";
import { getStrategyTools, handleStrategyTool } from "./strategy.js";
import { getScoringTools, handleScoringTool } from "./scoring.js";
import { getSectorTools, handleSectorTool } from "./sector.js";
import { getSlackTools, handleSlackTool } from "./slack.js";

type ToolHandler = (
  name: string,
  args: Record<string, unknown>
) => Promise<{ content: Array<{ type: "text"; text: string }> } | null>;

/**
 * Register all tools with the MCP server — single ListTools + CallTool handler.
 */
export function registerAllTools(server: Server): void {
  // Aggregate all tool definitions
  const allTools = [
    ...getKnowledgeTools(),
    ...getAnalysisTools(),
    ...getStrategyTools(),
    ...getScoringTools(),
    ...getSectorTools(),
    ...getDiscoveryTools(),
    ...getEnrichmentTools(),
    ...getStorageTools(),
    ...getSlackTools(),
  ];

  // Handler chain — try each handler in order until one returns a result
  const handlers: ToolHandler[] = [
    handleKnowledgeTool,
    handleAnalysisTool,
    handleStrategyTool,
    handleScoringTool,
    handleSectorTool,
    handleDiscoveryTool,
    handleEnrichmentTool,
    handleStorageTool,
    handleSlackTool,
  ];

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: allTools,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const toolArgs = (args || {}) as Record<string, unknown>;

    for (const handler of handlers) {
      const result = await handler(name, toolArgs);
      if (result) return result;
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ error: `Unknown tool: ${name}` }),
        },
      ],
    };
  });

  console.error(`[milo-reach] Registered ${allTools.length} tools`);
}
