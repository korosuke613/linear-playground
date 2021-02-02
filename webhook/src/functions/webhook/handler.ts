import "source-map-support/register";

import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import type { Handler } from "aws-lambda";
import { Webhook, WebhookHandler } from "linear-webhook";

const webhook: Handler = async (event) => {
  const handler = new WebhookHandler();
  const linearWebhook: Webhook = event.body;

  console.log(
    handler.getWebhookEvent(linearWebhook),
    `Action: ${linearWebhook.action}, Type: ${linearWebhook.type}`,
    JSON.stringify(linearWebhook, null, 2)
  );

  return formatJSONResponse({
    message: "OK",
    event,
  });
};

export const main = middyfy(webhook);
