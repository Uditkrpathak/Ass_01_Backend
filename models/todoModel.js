import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo;
