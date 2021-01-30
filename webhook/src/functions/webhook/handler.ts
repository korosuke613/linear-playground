import "source-map-support/register";

import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import type { Handler } from "aws-lambda";

const webhook: Handler = async (event) => {
  const payload = event.body;

  console.log(
    `Action: ${payload.action}, Type: ${payload.type}`,
    JSON.stringify(payload, null, 2)
  );

  return formatJSONResponse({
    message: "OK",
    event,
  });
};

export const main = middyfy(webhook);
