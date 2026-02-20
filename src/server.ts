import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { registerAllTools } from "./tools/index.js";
import { registerResources } from "./resources/index.js";
import { registerPrompts } from "./prompts/index.js";

export function createServer(): Server {
  const server = new Server(
    {
      name: "milo-reach",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        resources: {},
        prompts: {},
      },
    }
  );

  // Register all tools via central registry (single ListTools + CallTool handler)
  // Knowledge (4), Analysis (4), Strategy (4), Scoring (3), Sector (3)
  // Discovery (3): prospect_search, sogc_search, web_scrape
  // Enrichment (3): email_find, email_verify, prospect_enrich
  // Storage (2): lead_save, lead_list
  registerAllTools(server);

  // Resources: milo://atoms/*, milo://personas/*, milo://sectors/*, etc.
  registerResources(server);

  // Prompts: marketing_audit, prospect_analysis, campaign_planning, etc.
  registerPrompts(server);

  return server;
}
