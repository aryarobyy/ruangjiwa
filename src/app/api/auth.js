export const auth = (req,res) => {
    if(req.headers.authorization !== "rumah-sehat"){
        return res.status(401).json({"status":401,"message":"Authorization required"})
    }
}