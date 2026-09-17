import { fsdStack } from './fsd-stack'

const selectedStack: readonly string[] = [
  fsdStack.apiClient,
  fsdStack.serverState,
  fsdStack.clientState,
  fsdStack.forms,
]

export const templateInfo = {
  name: 'FSD CLI Vue starter',
  framework: fsdStack.frameworkLabel,
  stack: selectedStack.filter((item) => item !== 'none'),
  commands: fsdStack.commands,
  docsUrl: fsdStack.docsUrl,
  githubUrl: 'https://github.com/FSD-CLI',
} as const
