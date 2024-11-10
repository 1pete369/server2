const mongoose = require('mongoose')

const user = new mongoose.Schema({
    uid: String,
    email: String,
    displayName: String,
    username: String,
    photoURL: String,
    provider: String,
    isEmailVerified: Boolean,
    createdAt: Date,
    lastLoginAt: Date,
    customData: {
      preferences: String,
      streak: Number,
      goals: [String],
      days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'day_model' }],
    }
})

module.exports=mongoose.model("user_model",user)