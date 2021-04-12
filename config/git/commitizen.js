"use strict";

module.exports = {
  types: [
    { value: "build", name: "build:     Build the project or change external dependencies", },
    { value: "ci", name: "ci:        Setting up CI and working with scripts" },
    { value: "docs", name: "docs:      Setting up CI and working with scripts" },
    { value: "feat", name: "feat:      Add new feature" },
    { value: "fix", name: "fix:       Bug fix" },
    { value: "perf", name: "perf:      Changes to improve performance" },
    { value: "refactor", name: "refactor:      Code changes without fixing bugs or adding new features" },
    { value: "revert", name: "revert:    Revert to previous commits" },
    { value: "test", name: "test:      Add tests" },
  ],

  messages: {
    type: "What changes are you making?",
    customScope: "Specify the scope:",
    subject: "Write a short description in the imperative:\n",
    body: 'Write a detailed description (optional). Use "|" for a new line:\n',
    breaking: "BREAKING CHANGES list (optional):\n",
    footer: "A place for meta data (tickets, links and the rest).\n",
    confirmCommit: "Are you satisfied with the resulting commit?",
  },

  allowCustomScopes: true,

  allowBreakingChanges: false,

  footerPrefix: "META DATA: ",

  subjectLimit: 72,
};
