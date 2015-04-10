Package.describe({
  name: 'hazio:popularity-contest',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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
