
const Admin = require('../model/Admin')

class AdminController {

    static async listAdmin(req,res) {
      
        try {
          const admins = await Admin.findAll(); // use the model 'admin', store result in 'admins'
          return res.status(200).json(admins);
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to fetch admins' });
        }
      }



    static async createAdmin(req, res) {
        try {
            const { username, password } = req.body;
            const data = {
                username,
                password,
            };
            //saving the user
            const admin = await Admin.create(data);
            return res.status(201).send(admin);
        } catch (error) {
            console.log(error);
        }
    }

}






module.exports = AdminController