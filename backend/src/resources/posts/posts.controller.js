import { Post } from '../../models/posts.model';

export const createPost = async (req, res) => {
  const newPost = new Post({
    ...req.body,
    userId: req.user._id
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user._id });
    res.json(posts);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  // console.log(req.body);
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: { ...req.body }
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedTodo = await Post.deleteOne({ _id: req.params.id });
    res.json(deletedTodo);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

export const getPostById = async (req, res)=> {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  }catch(error){
    res.sendStatus(500);
    console.log(error);
  }
}
