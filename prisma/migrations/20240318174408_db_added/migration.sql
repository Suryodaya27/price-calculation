-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "zone" TEXT NOT NULL,
    "baseDistanceInKm" INTEGER NOT NULL,
    "basePriceInEuros" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);
