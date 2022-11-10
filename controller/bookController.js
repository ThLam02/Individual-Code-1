const {Author,Book}= require("../model/model");

const bookController = {
    //Add book
    addBooks: async(req,res)=>{
        try{
            const newBook  = new Book(req.body);
            const saveBook  = await newBook.save();
            res.status(200).json(newBook);
        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports = bookController;