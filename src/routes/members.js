const express = require("express")
const router = express.Router()
const membersSchema = require("../schemas/members")
const validate = require("../middlewares/validateData")

const {
  getAll,
  getbyname,
  createOne,
  updateOne,
  getOne,
  deleteOne,
  assignAtendance
} = require("../controllers/members");

router.get("/", getAll);
router.get("/getbyname/:name", getbyname);
router.get('/:id', getOne);
router.post("/", validate(membersSchema), createOne);
router.put("/:id", validate(membersSchema), updateOne);
router.put("/assignAttendance/:id", assignAtendance);
router.delete("/:id", deleteOne);

module.exports = router;
