import Todo  from "../models/todoModel.js"

export const createTodo = async (req, res) => {
  try {
    const { title, description, isCompleted, dueDate } = req.body;

    const todo = new Todo({
      title,
      description,
      isCompleted,
      dueDate,
    });

    const savedTodo = await todo.save();
    return res.status(201).json(savedTodo); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find().sort(
                { createdAt: -1 }
);
    res.json(todo);
  } catch (error) {
    res.status(500).json( {
               message:error.message,
                success:false }
)
  }
};

export const deleteTodo = async(req,res) => {
   try {
     const todo = await Todo.findByIdAndDelete(req.params.id);
                if(!todo) return res.status(404).json({
                                message:'Todo not existing',
                                success:false,
                })
                res.status(200).json({
                                message:'Todo deleted successfully',
                                success:true,
                })
   } catch (error) {
        console.log(error);
        res.status(500).json({
                message:error.message,
                success:false
        })
                
   }
}

