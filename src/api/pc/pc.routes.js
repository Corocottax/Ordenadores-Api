const PcRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { postNewPc, getAllPcs, getPc, patchPc, /* deletePc, */ NUKE} = require("./pc.controller");

PcRoutes.get("/", getAllPcs);
PcRoutes.get("/:model", getPc);
PcRoutes.post("/", [isAdmin], postNewPc);
PcRoutes.patch("/:id", [isAdmin], patchPc);
/* PcRoutes.delete("/:model", [isAuth], deletePc); */
PcRoutes.delete("/delete", NUKE);

module.exports = PcRoutes;