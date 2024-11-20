import bookService from "../services/bookService.js";

const getBook = async (req, res) => {
  const data = await bookService.getBook();
  res.status(200).json(data);
  };
  
  const createBook = async (req, res) => {
    const data = await bookService.createBook(req.body);
    res.status(201).json(data);
  };
  
  const updateBook = async (req, res) => {
    const data = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json(data);
  };
  
  const deleteBook = async (req, res) => {
    const data = await bookService.deleteBook(req.params.id);
    res.status(200).json(data);
  };  
 
  export default { getBook, createBook, updateBook, deleteBook };