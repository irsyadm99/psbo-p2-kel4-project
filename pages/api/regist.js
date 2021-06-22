import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function registHandler(req, res) {
  const { password } = req.body;
  const salt = await bcrypt.genSalt();
  const encryptedPassword = await bcrypt.hash(password, salt);

  if (req.method === "POST") {
    // Process a POST request
    try {
      const { firstName, lastName, email } = req.body;

      const result = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: encryptedPassword,
          // deskripsiDiri: "",
          // pekerjaan: "",
          // suku: "",
          // pendidikanTerakhir: "",
          // domisili: "",
          // statusPernikahan: "",
          // hobi: "",
          // karakterPositif: "",
          // karakterNegatif: "",
        },
      });
      // res.json(result);
      res.status(200).json({
        status: "Successfully registered!",
        result,
      });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Something went wrong", detailMessage: err.message });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ message: "Method not allowed-SALAH WOY" });
  }
}
