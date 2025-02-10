import express from "express";
import prisma from "../database";

const router = express.Router();

// 📌 GET /posts → Haal alle blogs op
router.get("/", async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
});

// 📌 GET /posts/:id → Haal één blog op
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const postId = parseInt(id);
  
      const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
      });
  
      res.json(post);
  });
  
  
  

// 📌 POST /posts → Voeg een nieuwe blog toe
router.post("/", async (req, res) => {
  const { title, content, image } = req.body;
  const newPost = await prisma.post.create({
    data: { title, content, image },
  });
  res.json(newPost);
});

export default router;
