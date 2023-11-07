import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Content-Type", "application/json");

  try {
    const domains = await prisma.domain.findMany({
      where: {
        isValid: true,
      },
      select: {
        domain: true,
        bundleId: true,
      },
    });

    const details = domains.map((domain) => ({
      appID: domain.bundleId,
      paths: ["*"],
    }));

    const aasa = {
      applinks: {
        apps: [],
        details,
      },
    };

    res.status(200).json(aasa);
  } catch (error) {
    console.error("Failed to generate AASA file:", error);
    res.status(500).json({ error: "Error generating AASA file" });
  }
}
