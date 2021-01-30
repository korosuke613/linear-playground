import {
  CreateIssueWebhook,
  // CreateCommentWebhook,
  // RemoveCommentWebhook,
  // RemoveIssueWebhook,
  Webhook,
} from "@libs/LinearWebhookInterfaces";
import { createIssue } from "./createIssue";
import { LinearWebhookHandler } from "@libs/LinearWebhookHandler";
// import { createComment } from "./createComment";
// import { removeIssue } from "./removeIssue";
// import { removeComment } from "./removeComment";

const unknownWebhook: Webhook = createIssue;
// const typedCreateComment: CreateCommentWebhook = createComment;
// const typedRemoveIssue: RemoveIssueWebhook = removeIssue;
// const typedRemoveComment: RemoveCommentWebhook = removeComment;

if (unknownWebhook.action === "create") {
  if (unknownWebhook.type === "Issue") {
    const typedCreateIssue = unknownWebhook as CreateIssueWebhook;
    console.log(typedCreateIssue);
  }
}

const handler = new LinearWebhookHandler();
handler.addCallbackWebhook(
  "CreateIssueWebhook",
  (webhook: CreateIssueWebhook) => {
    console.log(webhook.data.title);
    return webhook.data.createdAt;
  }
);

handler.execCallback(unknownWebhook).then((result) => {
  console.log(result);
});

// console.log(
//   typedCreateComment.data,
//   typedRemoveIssue.action,
//   typedRemoveComment.data
// );
