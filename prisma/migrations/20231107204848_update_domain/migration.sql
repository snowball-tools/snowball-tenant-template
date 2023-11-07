/*
  Warnings:

  - Added the required column `bundleId` to the `Domain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Domain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Domain" ADD COLUMN     "bundleId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
