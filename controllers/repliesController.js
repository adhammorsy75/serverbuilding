const { Replies } = require('../models');
const Editreply = async (req, res) => {
    try {
    const id = req.params.id
    const editreply = await reply.findByIdAndUpdate(id, req.body, { new: true })
    if (editreply) {
    return res.status(200).json(editreply)
      } 
    } catch (e) {
    return res.status(500).send(e.message)
    
}}
const deletereply = async (req, res) => {
 try {
    const id = req.params.id
   const deletereply = await reply.findByIdAndDelete(id)
    if (deletereply) {
    return res.status(200).send('co') }
    throw new Error("reply not found")
    } catch (e) {
    return res.status(500).send(e.message)
}}

const veiwreply = async (req, res) => {
 try {
    const reply = await reply.find()
    res.json(reply)
    } catch (error) {
    return res.status(500).send(error.message);
}}

const replyto = async (req, res) => {
    try {
     const reply = await new reply(req.body)
     await reply.save()
    return res.status(201).json({ reply })
    } catch (e) {
    return res.status(500).send(e.message)
 }}

    module.exports = {
    replyto,
    deletereply,
    Editreply,
    veiwreply
 
}