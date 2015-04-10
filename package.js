Package.describe({
  name: 'hazio:popularity-contest',
  version: '0.0.2',
  summary: 'Generates a popularity value of collection based on user defined fields & factors',
  git: 'https://github.com/hazio/meteor-popularity-contest',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'matb33:collection-hooks@0.7.11',
    'underscore@1.0.0',
    'mongo@1.0.6'
  ]);
  api.versionsFrom('1.1');
  api.addFiles('popularity-contest.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hazio:popularity-contest');
  api.addFiles('popularity-contest-tests.js');
});
