import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// export default async function editProfileHandler(req, res) {
//   if (req.method === "PUT") {
//     // Process a POST request
//     try {
//       const {
//         deskripsi,
//         pekerjaan,
//         suku,
//         pendidikanTerakhir,
//         domisili,
//         statusPernikahan,
//         hobi,
//         karakterPositif,
//         karakterNegatif,
//         userId,
//       } = req.body;

//       const result = await prisma.user.update({
//         where: {
//           id: userId,
//         },
//         data: {
//           deskripsiDiri: deskripsi,
//           pekerjaan: pekerjaan,
//           suku: suku,
//           pendidikanTerakhir: pendidikanTerakhir,
//           domisili: domisili,
//           statusPernikahan: statusPernikahan,
//           hobi: hobi,
//           karakterPositif: karakterPositif,
//           karakterNegatif: karakterNegatif,
//         },
//       });
//       // res.json(result);
//       res.status(200).json({
//         status: "Successfully edited !",
//         result,
//       });
//     } catch (err) {
//       res.status(400).json({
//         message: "Something went wrong",
//         detailMessage: err.message,
//       });
//     }
//   } else {
//     // Handle any other HTTP method
//     return res.status(405).json({
//       message: "Method not allowed-SALAH WOY",
//       detailMessage: err.message,
//     });
//   }
// }


export default async function editProfileHandler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    try {
      const {
        deskripsiDiri,
        pekerjaan,
        suku,
        pendidikanTerakhir,
        domisili,
        statusPernikahan,
        hobi,
        karakterPositif,
        karakterNegatif,
        userId
      } = req.body;

      const result = await prisma.user.create({
        data: {
          deskripsiDiri,
          pekerjaan,
          suku,
          pendidikanTerakhir,
          domisili,
          statusPernikahan,
          hobi,
          karakterPositif,
          karakterNegatif,
          user: {
            connect: {id: userId},
          },
        },
      });
      // res.json(result);
      res.status(200).json({
        status: "Successfully edited !",
        result,
      });
    } catch (err) {
      res.status(400).json({
        message: "Something went wrong",
        detailMessage: err.message,
      });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({
      message: "Method not allowed-SALAH WOY",
      detailMessage: err.message,
    });
  }
}
