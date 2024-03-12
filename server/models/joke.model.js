const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup is not long enough"]
    },
    punchline: {
        type: String,
        required: [true, "All Jokes require a punchline"],
        minlength: [3, "Punchline is not log enough"]
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke',JokeSchema);

module.exports = Joke;
