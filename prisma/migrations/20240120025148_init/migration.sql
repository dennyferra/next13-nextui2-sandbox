-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_name_key" ON "Activity"("name");

-- CreateIndex
CREATE INDEX "parentId" ON "Activity"("parentId");

-- CreateIndex
CREATE INDEX "type" ON "Activity"("type");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
