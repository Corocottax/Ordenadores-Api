const PcRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { postNewPc, getAllPcs, getPc, patchPc} = require("./pc.controller");
const upload = require("../../middlewares/file");

PcRoutes.get("/", getAllPcs);
PcRoutes.get("/:model", getPc);
PcRoutes.post("/", [isAdmin], upload.single("img"), postNewPc);
PcRoutes.patch("/:id", [isAdmin], upload.single("img"), patchPc);

module.exports = PcRoutes;