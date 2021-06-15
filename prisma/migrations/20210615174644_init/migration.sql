-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "deskripsiDiri" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "suku" TEXT NOT NULL,
    "pendidikanTerakhir" TEXT NOT NULL,
    "domisili" TEXT NOT NULL,
    "statusPernikahan" TEXT NOT NULL,
    "hobi" TEXT NOT NULL,
    "karakterPositif" TEXT NOT NULL,
    "karakterNegatif" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deskripsiDiri" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "suku" TEXT NOT NULL,
    "pendidikanTerakhir" TEXT NOT NULL,
    "domisili" TEXT NOT NULL,
    "statusPernikahan" TEXT NOT NULL,
    "hobi" TEXT NOT NULL,
    "karakterPositif" TEXT NOT NULL,
    "karakterNegatif" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_unique" ON "Profile"("userId");
