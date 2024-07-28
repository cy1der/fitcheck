/*
  Warnings:

  - You are about to drop the column `pants` on the `Fit` table. All the data in the column will be lost.
  - You are about to drop the column `shirt` on the `Fit` table. All the data in the column will be lost.
  - You are about to drop the column `shoes` on the `Fit` table. All the data in the column will be lost.
  - You are about to drop the column `top` on the `Fit` table. All the data in the column will be lost.
  - Added the required column `pantId` to the `Fit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shirtId` to the `Fit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoesId` to the `Fit` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Headwear" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Shirt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Pant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Shoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "headwearId" INTEGER,
    "shirtId" INTEGER NOT NULL,
    "pantId" INTEGER NOT NULL,
    "shoesId" INTEGER NOT NULL,
    CONSTRAINT "Fit_headwearId_fkey" FOREIGN KEY ("headwearId") REFERENCES "Headwear" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Fit_shirtId_fkey" FOREIGN KEY ("shirtId") REFERENCES "Shirt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Fit_pantId_fkey" FOREIGN KEY ("pantId") REFERENCES "Pant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Fit_shoesId_fkey" FOREIGN KEY ("shoesId") REFERENCES "Shoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Fit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Fit" ("createdAt", "id", "userId") SELECT "createdAt", "id", "userId" FROM "Fit";
DROP TABLE "Fit";
ALTER TABLE "new_Fit" RENAME TO "Fit";
PRAGMA foreign_key_check("Fit");
PRAGMA foreign_keys=ON;
