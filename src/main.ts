import * as core from '@actions/core';
import { Toolkit } from 'actions-toolkit';

interface Commit {
  message: string;
  body: string;
}

Toolkit.run(async tools => {
  core.info('Starting action');

  const event = tools.context.payload;

  if (!event.commits) {
    core.info("Couldn't find any commits in this event, incrementing patch version...");
  }

  const messages = event.commits ? event.commits.map((commit: Commit) => `${commit.message}\n${commit.body}`) : [];
  core.info(messages);

  // eslint-disable-next-line no-console
  console.log('Commits:', event.commits);

  core.setOutput('Action completed', new Date().toTimeString());
});
