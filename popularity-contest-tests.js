Tinytest.add('basic functionality', function (test) {
  	Authors = new Mongo.Collection('authors' + test.id);
  	Authors.createPopularityContest([{key: "likes", weight: 2}, {key: "comments", weight: 3}], 'authorPopularity');

  	var authorId = Authors.insert({
    	name: 'Charles Darwin',
    	likes: 1
  	});

  	// insert
  	test.equal(Authors.find().count(), 1);
  	test.equal(Authors.findOne(authorId).authorPopularity, 2);

  	Authors.remove(authorId);
  	var authorId = Authors.insert({
    	name: 'Charles Darwin',
    	likes: 1,
    	comments: 1
  	});

  	// insert
  	test.equal(Authors.find().count(), 1);
  	test.equal(Authors.findOne(authorId).authorPopularity, 5);

	Authors.update(authorId, { $set: { 'comments': 2 }});

  	test.equal(Authors.find().count(), 1);
  	test.equal(Authors.findOne(authorId).authorPopularity, 8);


	Authors.update(authorId, { $set: { 'likes': 10, 'comments': 20 }});

  	test.equal(Authors.find().count(), 1);
  	test.equal(Authors.findOne(authorId).authorPopularity, 80);

	Authors.update(authorId, { $set: { 'likes': 2, 'comments': 2 }});
    
  	test.equal(Authors.find().count(), 1);
  	test.equal(Authors.findOne(authorId).authorPopularity, 10);
});
