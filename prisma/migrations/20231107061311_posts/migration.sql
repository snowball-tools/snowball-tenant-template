-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("domain") ON DELETE RESTRICT ON UPDATE CASCADE;
