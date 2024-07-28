-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "top" TEXT,
    "shirt" TEXT NOT NULL,
    "pants" TEXT NOT NULL,
    "shoes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    CONSTRAINT "Fit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Fit" ("createdAt", "id", "pants", "shirt", "shoes", "top") SELECT "createdAt", "id", "pants", "shirt", "shoes", "top" FROM "Fit";
DROP TABLE "Fit";
ALTER TABLE "new_Fit" RENAME TO "Fit";
PRAGMA foreign_key_check("Fit");
PRAGMA foreign_keys=ON;
