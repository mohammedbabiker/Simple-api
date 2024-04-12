import express from "express";
import StatusCodes from "http-status-codes";

import userServices from "./services/user.service.js";

const router = express.Router();
const STATUS = {
  success: "OK",
  failure: "BAD_REQUEST",
};

router.get("/", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("The API is working");
});

router.post("/add", (req, res) => {
  const { body: user } = req;

  const addedUser = userServices.addUser(user);

  return res.status(StatusCodes.OK).send({
    status: STATUS.success,
    message: addedUser,
  });
});

router.put("/update/:id", (req, res) => {
  const { body: user } = req;
  const id = parseInt(req.params.id, 10);

  const updateUser = userServices.updateUser(id, user);

  if (updateUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: updateUser,
    });
  } else {
    return res.status(StatusCodes.NOT_MODIFIED).send({
      status: STATUS.failure,
      message: `User with id ${id} not found`,
    });
  }
});

export default router;
