import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function registHandler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    try {
      const { email, password } = req.body;

      const result = await prisma.user.findMany({
        where: { email: email },
      });
      if (result.length === 0) {
        throw new Error("Ëmail tidak ditemukan");
      }
      const isUserPasswordValid = await bcrypt.compare(
        password,
        result[0].password
      );
      if (!isUserPasswordValid) {
        throw new Error("Password salah!");
      }
      res.status(200).json({
        status: "Successfully login !",
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
