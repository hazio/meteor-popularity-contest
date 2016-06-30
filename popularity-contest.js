Mongo.Collection.prototype.createPopularityContest = function(fields, popularityField) {
    var self = this;

    if (!fields)
        throw new Error("Missing argument: fields");

    if (!popularityField)
        throw new Error("Missing argument: popularityField");

    var update = function(_id, difference, weight) {
        if (!_id) return;

        var modifier = {
            $inc: {}
        };
        var value = difference * weight;

        if (value) {
            modifier.$inc[popularityField] = value;
            self.update(_id, modifier);
        }
    };

    self.after.insert(function(userId, doc) {
        _.each(fields, function(field) {
            update(doc._id, doc[field.key], field.weight);
        });
    });

    self.after.update(function(userId, doc) {
        var oldDoc = this.previous;
        _.each(fields, function(field) {
            if (doc[field.key] !== oldDoc[field.key]) {
                var difference = doc[field.key] - oldDoc[field.key];
                update(doc._id, difference, field.weight);
            }
        });
    }, {
        fetchPrevious: true
    });
};