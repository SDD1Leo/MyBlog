const home = async(req,res) => {
    try {
        res.send("hello router controller");
    } catch (error) {
        res.status(404).send({"msg":"notfound"});
    }
}
const register = async(req,res) => {
    try {
        const {user,id} = req.body;
        res.send({"user":req.body.user,"id":req.body.id});
    } catch (error) {
        res.error();
    }
}

module.exports = {home,register};