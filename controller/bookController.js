const {Author,Book}= require("../model/model");

const bookController = {
    //Add book
    addBooks: async(req,res)=>{
        try{
            const newBooks = new Book(req.body);
            const saveBooks = await newBooks.save();
            res.status(200).json(saveBooks);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllBook : async (req,res) => {
        try{
            const books = await Book.find();
            res.status(200).send(books);
        }catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = bookController;