const Docket = require("../db/docketModal.js");

const getAllDockets = async (req, res) => {
    try {
      const retrivedDockets = await Docket.find({});
      res.send(retrivedDockets);
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createDocket = async (req, res) => {
    try {
        const newDocket = req.body;
        const createdDocket = await Docket.create(newDocket);
        res.send(createdDocket);
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

const deleteDocket = async (req, res) => {
    try {
        const { body: { id } } = req;
        const retrivedUser = await Docket.find({ id: req.body.id });
        if (!retrivedUser) {
          throw {
            status: 404,
            message: `PO doesn't exist`,
          };
        }
        const deletedDocket = await Docket.findOneAndDelete({ id: id }, { new: true });
        res.send(deletedDocket);
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
  
module.exports = {
    getAllDockets,
    createDocket,
    deleteDocket
}