module.exports = {
  branches: ['main', { name: 'staging', prerelease: true }],
  dryRun: false,
  plugins: [
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    // '@semantic-release/npm',
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
  ],
}
