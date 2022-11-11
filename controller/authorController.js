const {Author,Book}= require("../model/model");

const authorController = {
    //Add Author
    addAuthor: async(req,res)=>{
        try{
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAuthor: async(req,res)=>{
        try{
        const author = await Author.find();
        res.status(200).send(author);
        }catch(err){
            res.status(500).json(err);
        }
    }

    
};

module.exports = authorController;