import * as core from '@actions/core';
import { Toolkit } from 'actions-toolkit';

interface Commit {
  message: string;
  body: string;
}

Toolkit.run(async tools => {
  // eslint-disable-next-line no-console
  console.log('okay');

  const event = tools.context.payload;

  if (!event.commits) {
    core.debug("Couldn't find any commits in this event, incrementing patch version...");
  }

  const messages = event.commits ? event.commits.map((commit: Commit) => `${commit.message}\n${commit.body}`) : [];
  core.debug(messages);

  core.setOutput('okay', new Date().toTimeString());
  core.setFailed('failed');
});
