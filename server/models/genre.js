var mongoose = reuire('mongoose')

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
	{
		name: {type: String, required: true, maxLength: }
	}
);

GenreSchema.virtual('url').get(function () {
	return '/catalog/genre' + this._id;
});

model.exports = mongoose.model('Genre', GenreSchema);