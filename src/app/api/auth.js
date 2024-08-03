export const auth = (req,res) => {
    if(req.headers.authorization !== "conqueror"){
        return res.status(401).json({"status":401,"message":"Authorization required"})
    }
}