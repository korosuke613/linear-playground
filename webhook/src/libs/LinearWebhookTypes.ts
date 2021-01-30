type Action = "create" | "update" | "remove";
type State = {
  id: string;
  name: string;
  color: string;
  type: "backlog" | "unstarted" | "started" | "completed" | "canceled";
};
type Team = {
  id: string;
  name: string;
  key: "KOR";
};
type Type = "Issue" | "Comment";
type User = {
  id: string;
  name: string;
};
type Project = {
  id: string;
  name: string;
};

type Label = {
  id: string;
  name: string;
  color: string;
};

type Base = {
  action: Action;
  createdAt: string;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  type: Type;
};
type Create = Base & {
  url: string;
};
type Remove = Base;

type Comment = {
  data: {
    body: string;
    userId: string;
    issueId: string;
    issue: Pick<Base["data"], "id"> & Pick<Issue["data"], "title">;
    user: User;
    reactions: [];
  };
  type: Extract<Base["type"], "Comment">;
};
type Issue = {
  data: {
    number: number;
    title: string;
    priority: number;
    boardOrder: number;
    previousIdentifiers: [];
    priorityLabel: string;
    teamId: string;
    cycleId?: string;
    stateId: string;
    assigneeId?: string;
    projectId?: string;
    subscriberIds: string[];
    creatorId: string;
    labelIds: string[];
    assignee: User;
    project: Project;
    state: State;
    team: Team;
    labels?: Label[];
  };
  type: Extract<Base["type"], "Issue">;
};

export type CreateComment = Create & Comment;
export type RemoveComment = Remove &
  Pick<Comment, "type"> & { data: Omit<Comment["data"], "issue" | "user"> };

export type CreateIssue = Create & Issue;
export type RemoveIssue = Remove &
  Issue & {
    data: {
      archivedAt: string;
    };
  };
