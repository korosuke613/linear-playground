import { createIssue } from "./createIssue";
import { CreateIssueWebhook, Webhook, WebhookHandler } from "linear-webhook";
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

const handler = new WebhookHandler();

handler.addCallback("CreateIssueWebhook", (webhook: CreateIssueWebhook) => {
  console.log(webhook.data.title);
  return webhook.data.createdAt;
});

handler.execCallback(unknownWebhook).then((result) => {
  console.log(result);
});

// console.log(
//   typedCreateComment.data,
//   typedRemoveIssue.action,
//   typedRemoveComment.data
// );
