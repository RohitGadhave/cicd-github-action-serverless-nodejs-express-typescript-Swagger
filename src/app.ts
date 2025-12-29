import express, { Request, Response, NextFunction } from "express";
import path from "node:path";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import appRoutes from "./routes/appRoutes";

export const defaultSpecFileName = "spec.yaml";

const app = express();

app.use(express.json());

// eslint-disable-next-line unicorn/perfer-module, @typescript-eslint/no-explicity-any
const fdxSpec = YAML.load(path.join(__dirname, defaultSpecFileName)) as any;

app.use(appRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(fdxSpec));

app.use(
  "/api-docs",
  swaggerUi.serve,
  (req: Request, res: Response, next: NextFunction) => {
    const dynamicSpec = {
      ...fdxSpec,
      servers: [
        {
          url: `${req.protocol}://${req.get("host")}`,
          description: "Dynamic URL based on current request",
        },
        ...(fdxSpec.servers || []),
      ],
    };
    return swaggerUi.setup(dynamicSpec)(req, res, next);
  },
);

export default app;
