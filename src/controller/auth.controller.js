import Notes from "../models/user.notes.js";

export const createnote = async (req, res) => {
    const {title, content} = req.body; 

    //console.log(title, content); 
    res.send('Registrando'); 
    try {
        const newNote = new Notes({
            title,
            content
        })
        const noteSave = await newNote.save(); 
        return res.status(201).json(noteSave)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}