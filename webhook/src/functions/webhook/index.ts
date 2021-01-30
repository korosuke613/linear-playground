import * as path from "path";

export default {
  handler: `${path.relative(process.cwd(), __dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "webhook",
      },
    },
  ],
};
